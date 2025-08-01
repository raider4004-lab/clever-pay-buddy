import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { 
  DollarSign, 
  Users, 
  Mail, 
  AlertTriangle,
  TrendingUp,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
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

  // Mock data
  const stats = [
    {
      title: "Total Outstanding",
      value: "$124,500",
      change: "+12% from last month",
      changeType: "negative" as const,
      icon: DollarSign,
      description: "Across 23 customers"
    },
    {
      title: "Active Customers",
      value: "23",
      change: "+3 this month",
      changeType: "positive" as const,
      icon: Users,
      description: "2 high risk"
    },
    {
      title: "Reminders Sent",
      value: "156",
      change: "+8% this week",
      changeType: "positive" as const,
      icon: Mail,
      description: "92% delivery rate"
    },
    {
      title: "Overdue Payments",
      value: "8",
      change: "-2 this week",
      changeType: "positive" as const,
      icon: AlertTriangle,
      description: "$45,200 total"
    }
  ];

  const recentActivities = [
    {
      id: "1",
      type: "email" as const,
      customer: "Acme Corp Ltd",
      amount: 15000,
      status: "delivered" as const,
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      type: "whatsapp" as const,
      customer: "Tech Solutions Inc",
      amount: 8500,
      status: "responded" as const,
      timestamp: "4 hours ago"
    },
    {
      id: "3",
      type: "voice" as const,
      customer: "Global Enterprises",
      amount: 22000,
      status: "sent" as const,
      timestamp: "1 day ago"
    },
    {
      id: "4",
      type: "email" as const,
      customer: "StartupCo",
      amount: 3200,
      status: "failed" as const,
      timestamp: "2 days ago"
    }
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your payment reminders today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>

          {/* Quick Actions & Insights */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span>AI Insights</span>
                </CardTitle>
                <CardDescription>Smart recommendations for your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-finbot-gray-light rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-1">
                    High Priority
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3 customers are 30+ days overdue. Consider escalating to phone calls.
                  </p>
                </div>
                <div className="p-3 bg-finbot-gray-light rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Best Time to Send
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tuesday 10 AM shows highest response rates for your customers.
                  </p>
                </div>
                <div className="p-3 bg-finbot-gray-light rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Collection Tip
                  </p>
                  <p className="text-sm text-muted-foreground">
                    WhatsApp reminders have 40% higher response rate than email.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Upcoming Due Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Today</span>
                    <span className="text-sm font-medium text-accent">$12,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">This Week</span>
                    <span className="text-sm font-medium">$35,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Next Week</span>
                    <span className="text-sm font-medium">$28,800</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;