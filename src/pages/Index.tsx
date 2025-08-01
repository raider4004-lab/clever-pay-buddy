import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain, 
  Mail, 
  MessageSquare, 
  Phone, 
  Shield, 
  TrendingUp, 
  Users,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem("finbot_user");
    if (userData) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Messages",
      description: "Intelligent tone adjustment based on customer history and payment urgency"
    },
    {
      icon: Mail,
      title: "Multi-Channel Reminders",
      description: "Send via Email, WhatsApp, and Voice calls for maximum reach"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Track delivery rates, response times, and payment success metrics"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Automated risk scoring and escalation rules for problem accounts"
    }
  ];

  const benefits = [
    "Reduce manual work by 80% with automation",
    "Improve collection rates by up to 35%",
    "Maintain professional customer relationships",
    "Real-time dashboard and reporting",
    "Secure API integrations with major providers",
    "Customizable message templates and tones"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-finbot-gray-medium">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full transform rotate-12"></div>
            </div>
            <h1 className="text-2xl font-bold text-primary">FinBot-AI</h1>
          </div>
          <Button 
            onClick={() => navigate("/auth")}
            className="bg-primary hover:bg-accent transition-colors"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            Fintech Innovation 2024
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Smart Payment
            <span className="text-accent"> Reminder Agent</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Automate your payment collection process with AI-powered reminders. 
            Send personalized messages via email, WhatsApp, and voice calls to improve cash flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")}
              className="bg-primary hover:bg-accent transition-colors flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-finbot-gray-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Powerful Features for Finance Teams
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline payment collection and maintain excellent customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Finance Teams Choose FinBot-AI
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-primary p-8 text-primary-foreground">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="h-8 w-8" />
                    <div>
                      <CardTitle className="text-primary-foreground">Join 500+ Finance Teams</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                        Already improving their collection process
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold">35%</p>
                      <p className="text-sm opacity-90">Faster Collections</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">92%</p>
                      <p className="text-sm opacity-90">Delivery Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-finbot-gray-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Payment Collection?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join finance teams worldwide who have automated their payment reminders and improved cash flow with FinBot-AI.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/auth")}
            className="bg-primary hover:bg-accent transition-colors flex items-center space-x-2 mx-auto"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-finbot-gray-medium py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-accent rounded-full transform rotate-12"></div>
            </div>
            <span className="font-bold text-primary">FinBot-AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 FinBot-AI. Built for modern finance teams.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
