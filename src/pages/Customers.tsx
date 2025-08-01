import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import CustomerList from "@/components/customers/CustomerList";
import { useToast } from "@/hooks/use-toast";

const Customers = () => {
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

  // Mock customer data
  const [customers] = useState([
    {
      id: "1",
      name: "Acme Corp Ltd",
      email: "billing@acmecorp.com",
      phone: "+1-555-0123",
      amount: 15000,
      dueDate: "2024-01-15",
      status: "overdue" as const,
      riskLevel: "high" as const,
      lastContact: "2 days ago"
    },
    {
      id: "2",
      name: "Tech Solutions Inc",
      email: "accounts@techsolutions.com",
      phone: "+1-555-0124",
      amount: 8500,
      dueDate: "2024-01-20",
      status: "pending" as const,
      riskLevel: "medium" as const,
      lastContact: "1 week ago"
    },
    {
      id: "3",
      name: "Global Enterprises",
      email: "finance@globalent.com",
      phone: "+1-555-0125",
      amount: 22000,
      dueDate: "2024-01-10",
      status: "overdue" as const,
      riskLevel: "high" as const,
      lastContact: "5 days ago"
    },
    {
      id: "4",
      name: "StartupCo",
      email: "hello@startupco.com",
      amount: 3200,
      dueDate: "2024-01-25",
      status: "pending" as const,
      riskLevel: "low" as const,
      lastContact: "3 days ago"
    },
    {
      id: "5",
      name: "Enterprise Solutions",
      email: "billing@enterprise.com",
      phone: "+1-555-0126",
      amount: 12800,
      dueDate: "2024-01-12",
      status: "paid" as const,
      riskLevel: "low" as const,
      lastContact: "1 day ago"
    }
  ]);

  const handleAddCustomer = () => {
    toast({
      title: "Add Customer",
      description: "Customer management form would open here",
    });
  };

  const handleEditCustomer = (customer: any) => {
    toast({
      title: "Edit Customer",
      description: `Editing ${customer.name}`,
    });
  };

  const handleDeleteCustomer = (customerId: string) => {
    toast({
      title: "Delete Customer",
      description: "Customer would be removed from the system",
      variant: "destructive",
    });
  };

  const handleSendReminder = (customerId: string, type: "email" | "whatsapp" | "voice") => {
    const customer = customers.find(c => c.id === customerId);
    if (customer) {
      toast({
        title: "Reminder Sent",
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} reminder sent to ${customer.name}`,
      });
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Customer Management
          </h1>
          <p className="text-muted-foreground">
            Manage your customers and send personalized payment reminders.
          </p>
        </div>

        <CustomerList
          customers={customers}
          onAddCustomer={handleAddCustomer}
          onEditCustomer={handleEditCustomer}
          onDeleteCustomer={handleDeleteCustomer}
          onSendReminder={handleSendReminder}
        />
      </main>
    </div>
  );
};

export default Customers;