import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mail, MessageSquare, Phone } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "email" | "whatsapp" | "voice";
  customer: string;
  amount: number;
  status: "sent" | "delivered" | "failed" | "responded";
  timestamp: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "whatsapp":
        return <MessageSquare className="h-4 w-4" />;
      case "voice":
        return <Phone className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      sent: "secondary",
      delivered: "default",
      failed: "destructive",
      responded: "default"
    } as const;

    const colors = {
      sent: "bg-finbot-gray-medium text-foreground",
      delivered: "bg-primary text-primary-foreground",
      failed: "bg-destructive text-destructive-foreground",
      responded: "bg-accent text-accent-foreground"
    };

    return (
      <Badge variant={variants[status as keyof typeof variants]} className={colors[status as keyof typeof colors]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest payment reminders sent to customers
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No recent activity</p>
            <p className="text-sm">Start sending reminders to see activity here</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-2 border-b border-finbot-gray-medium last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-finbot-gray-light rounded-full">
                  {getIcon(activity.type)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{activity.customer}</p>
                  <p className="text-sm text-muted-foreground">
                    ${activity.amount.toLocaleString()} reminder via {activity.type}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
              </div>
              <div className="text-right">
                {getStatusBadge(activity.status)}
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;