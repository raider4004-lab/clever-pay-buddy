import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock authentication - replace with real auth logic
  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      if (email && password) {
        localStorage.setItem("finbot_user", JSON.stringify({ email, name: "Finance Manager" }));
        toast({
          title: "Welcome back!",
          description: "Successfully signed in to FinBot-AI",
        });
        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError("");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      localStorage.setItem("finbot_user", JSON.stringify({ email, name }));
      toast({
        title: "Account created!",
        description: "Welcome to FinBot-AI. Let's get started!",
      });
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToSignup={() => setIsLogin(false)}
            loading={loading}
            error={error}
          />
        ) : (
          <SignupForm
            onSignup={handleSignup}
            onSwitchToLogin={() => setIsLogin(true)}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;