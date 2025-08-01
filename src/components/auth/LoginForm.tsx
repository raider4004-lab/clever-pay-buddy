import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onSwitchToSignup: () => void;
  loading?: boolean;
  error?: string;
}

const LoginForm = ({ onLogin, onSwitchToSignup, loading, error }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center p-2">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <path d="M120 140 Q80 120 60 100 Q50 80 70 60 Q90 50 120 60 Q150 70 180 80 Q200 90 220 100 Q240 110 250 120 Q260 130 250 140 Q240 150 220 150 Q200 150 180 145 Q150 140 120 140 Z" fill="white"/>
              <path d="M250 120 Q280 100 300 80 Q320 60 340 70 Q350 80 340 100 Q330 120 320 130 Q310 135 300 130 Q290 125 280 120 Q270 118 250 120 Z" fill="white"/>
              <circle cx="340" cy="85" r="25" fill="white"/>
              <path d="M355 85 L375 82 L370 88 Z" fill="#E50000"/>
              <circle cx="345" cy="80" r="4" fill="black"/>
            </svg>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Welcome to FinBot-AI</CardTitle>
        <CardDescription>
          Sign in to access your payment reminder dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2 h-6 w-6 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-accent transition-colors"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto font-semibold text-accent"
                onClick={onSwitchToSignup}
              >
                Sign up here
              </Button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;