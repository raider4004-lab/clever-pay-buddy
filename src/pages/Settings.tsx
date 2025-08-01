import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Key, MessageSquare, Mail, Phone, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("finbot_user");
    if (!userData) {
      navigate("/auth");
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("finbot_user");
    navigate("/auth");
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your configuration has been updated successfully.",
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Configure your FinBot-AI system for optimal performance.
          </p>
        </div>

        <Tabs defaultValue="api" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="ai">AI Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="h-5 w-5 text-accent" />
                  <span>API Configuration</span>
                </CardTitle>
                <CardDescription>
                  Configure your third-party service API keys for full functionality.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="openai-key">OpenAI API Key</Label>
                  <Input
                    id="openai-key"
                    type="password"
                    placeholder="sk-..."
                    className="font-mono"
                  />
                  <p className="text-sm text-muted-foreground">
                    Required for AI-powered message generation and tone customization.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sendgrid-key">SendGrid API Key</Label>
                  <Input
                    id="sendgrid-key"
                    type="password"
                    placeholder="SG...."
                    className="font-mono"
                  />
                  <p className="text-sm text-muted-foreground">
                    Required for email reminder functionality.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twilio-sid">Twilio Account SID</Label>
                  <Input
                    id="twilio-sid"
                    type="password"
                    placeholder="AC..."
                    className="font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twilio-token">Twilio Auth Token</Label>
                  <Input
                    id="twilio-token"
                    type="password"
                    placeholder="Enter your Twilio auth token"
                    className="font-mono"
                  />
                  <p className="text-sm text-muted-foreground">
                    Required for WhatsApp and voice call functionality.
                  </p>
                </div>

                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save className="h-4 w-4" />
                  <span>Save API Keys</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  <span>Message Templates</span>
                </CardTitle>
                <CardDescription>
                  Customize your default message templates for different scenarios.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email-template">Email Template</Label>
                  <Textarea
                    id="email-template"
                    placeholder="Dear [Customer Name], This is a friendly reminder..."
                    rows={4}
                    defaultValue="Dear [Customer Name],

We hope this message finds you well. This is a friendly reminder regarding your outstanding payment of $[Amount] which was due on [Due Date].

We understand that sometimes payments can be overlooked, and we're here to help if you need any assistance or have questions about your account.

Please contact us at your earliest convenience to arrange payment or discuss payment options.

Best regards,
[Your Company Name]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp-template">WhatsApp Template</Label>
                  <Textarea
                    id="whatsapp-template"
                    placeholder="Hi [Customer Name]! Quick reminder about..."
                    rows={3}
                    defaultValue="Hi [Customer Name]! 👋

Quick reminder about your payment of $[Amount] that was due on [Due Date]. 

Please let us know if you need any assistance! 💬"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="voice-template">Voice Message Script</Label>
                  <Textarea
                    id="voice-template"
                    placeholder="Hello, this is a reminder call..."
                    rows={3}
                    defaultValue="Hello, this is an automated reminder from [Your Company Name]. We're calling to remind you about an outstanding payment of [Amount] dollars that was due on [Due Date]. Please contact us to arrange payment. Thank you."
                  />
                </div>

                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save className="h-4 w-4" />
                  <span>Save Templates</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Automation Rules</CardTitle>
                <CardDescription>
                  Set up automatic reminder schedules and escalation rules.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto Send Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically send reminders based on due dates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Reminder (Days after due)</Label>
                    <Select defaultValue="3">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 day</SelectItem>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Escalation (Days after first)</Label>
                    <Select defaultValue="7">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekend Sending</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow reminders to be sent on weekends
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Smart Timing</Label>
                    <p className="text-sm text-muted-foreground">
                      Use AI to optimize sending times
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save className="h-4 w-4" />
                  <span>Save Automation Rules</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-accent" />
                  <span>AI Message Customization</span>
                </CardTitle>
                <CardDescription>
                  Configure how AI personalizes your payment reminder messages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Default Tone</Label>
                  <Select defaultValue="professional">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Escalation Tone (Overdue)</Label>
                  <Select defaultValue="urgent">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="stern">Stern</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Personalization</Label>
                    <p className="text-sm text-muted-foreground">
                      Use customer history to personalize messages
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Amount-Based Tone</Label>
                    <p className="text-sm text-muted-foreground">
                      Adjust tone based on payment amount
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Company Voice</Label>
                  <Textarea
                    placeholder="Describe your company's communication style..."
                    rows={3}
                    defaultValue="We are a professional financial services company that values long-term relationships with our clients. Our communication should be respectful, helpful, and solution-oriented."
                  />
                </div>

                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save className="h-4 w-4" />
                  <span>Save AI Settings</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;