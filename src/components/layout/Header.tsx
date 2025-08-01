import { Button } from "@/components/ui/button";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  user?: {
    email: string;
    name?: string;
  };
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-background border-b border-finbot-gray-medium shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-accent rounded-full transform rotate-12"></div>
          </div>
          <h1 className="text-2xl font-bold text-primary">FinBot-AI</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="text-foreground hover:text-accent"
          >
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/customers")}
            className="text-foreground hover:text-accent"
          >
            Customers
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/reminders")}
            className="text-foreground hover:text-accent"
          >
            Reminders
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/settings")}
            className="text-foreground hover:text-accent"
          >
            Settings
          </Button>
        </nav>

        {user && (
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-foreground">{user.name || user.email}</p>
              <p className="text-xs text-muted-foreground">Finance Manager</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;