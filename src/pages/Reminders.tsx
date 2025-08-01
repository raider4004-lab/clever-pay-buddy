import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Phone, Search, Filter, Download } from "lucide-react";

const Reminders = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

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

  // Mock reminder data
  const reminders = [
    {
      id: "1",
      customer: "Acme Corp Ltd",
      email: "billing@acmecorp.com",
      amount: 15000,
      type: "email" as const,
      status: "delivered" as const,
      sentAt: "2024-01-18 10:30 AM",
      message: "Gentle reminder about your outstanding payment of $15,000. Please contact us if you need assistance.",
      responseTime: "2 hours",
      aiTone: "Professional"
    },
    {
      id: "2",
      customer: "Tech Solutions Inc",
      email: "accounts@techsolutions.com",
      amount: 8500,
      type: "whatsapp" as const,
      status: "responded" as const,
      sentAt: "2024-01-18 02:15 PM",
      message: "Hi! This is a friendly reminder about your payment. Let us know if you need any assistance.",
      responseTime: "45 minutes",
      aiTone: "Friendly"
    },
    {
      id: "3",
      customer: "Global Enterprises",
      email: "finance@globalent.com",
      amount: 22000,
      type: "voice" as const,
      status: "sent" as const,
      sentAt: "2024-01-17 11:00 AM",
      message: "Automated voice message regarding overdue payment.",
      responseTime: "-",
      aiTone: "Formal"
    },
    {
      id: "4",
      customer: "StartupCo",
      email: "hello@startupco.com",
      amount: 3200,
      type: "email" as const,
      status: "failed" as const,
      sentAt: "2024-01-16 09:45 AM",
      message: "Payment reminder - please review your account.",
      responseTime: "-",
      aiTone: "Professional"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "whatsapp":
        return <MessageSquare className="h-4 w-4" />;
      case "voice":
        return <Phone className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      sent: "bg-finbot-gray-medium text-foreground",
      delivered: "bg-primary text-primary-foreground",
      failed: "bg-destructive text-destructive-foreground",
      responded: "bg-accent text-accent-foreground"
    };

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const filteredReminders = reminders.filter(reminder => {
    const matchesSearch = reminder.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reminder.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || reminder.status === statusFilter;
    const matchesType = typeFilter === "all" || reminder.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Reminder History
          </h1>
          <p className="text-muted-foreground">
            Track all payment reminders sent to your customers with AI-powered insights.
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter & Search</CardTitle>
            <CardDescription>Find specific reminders and analyze performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by customer or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="responded">Responded</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="voice">Voice</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reminder History ({filteredReminders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredReminders.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No reminders found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredReminders.map((reminder) => (
                  <div key={reminder.id} className="p-4 border border-finbot-gray-medium rounded-lg hover:shadow-elegant transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-finbot-gray-light rounded-full">
                            {getIcon(reminder.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{reminder.customer}</h3>
                            <p className="text-sm text-muted-foreground">{reminder.email}</p>
                          </div>
                          {getStatusBadge(reminder.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Amount</p>
                            <p className="font-medium text-accent">${reminder.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Sent At</p>
                            <p className="font-medium">{reminder.sentAt}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Response Time</p>
                            <p className="font-medium">{reminder.responseTime}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">AI Tone</p>
                            <p className="font-medium">{reminder.aiTone}</p>
                          </div>
                        </div>
                        
                        <div className="bg-finbot-gray-light p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Message Content</p>
                          <p className="text-sm text-foreground">{reminder.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reminders;