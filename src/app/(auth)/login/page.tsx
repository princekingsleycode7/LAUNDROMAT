"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loginWithEmail, loginWithPIN } from "@/actions/auth";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await loginWithEmail(email, password);
    } catch (err: any) {
      setError(err.message || "Login failed");
      setLoading(false);
    }
  };

  const handlePINLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length !== 6) return;
    setLoading(true);
    setError("");
    try {
      await loginWithPIN(pin);
    } catch (err: any) {
      setError(err.message || "Invalid PIN");
      setLoading(false);
    }
  };

  const appendToPIN = (num: string) => {
    if (pin.length < 6) setPin(pin + num);
  };

  const clearPIN = () => setPin("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Zap className="h-10 w-10 text-brand-secondary-medium" />
          </div>
          <CardTitle className="text-2xl">LaundromatAI</CardTitle>
          <CardDescription>Sign in to manage your business</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="manager" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="manager">Manager</TabsTrigger>
              <TabsTrigger value="cashier">Cashier</TabsTrigger>
            </TabsList>
            
            <TabsContent value="manager">
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full bg-brand-primary-medium" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="cashier">
              <div className="space-y-6">
                <div className="flex justify-center gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-4 rounded-full border-2 ${pin.length > i ? 'bg-brand-primary-medium border-brand-primary-medium' : 'border-gray-300'}`}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <Button 
                      key={num} 
                      variant="outline" 
                      className="h-14 text-xl font-semibold"
                      onClick={() => appendToPIN(num.toString())}
                    >
                      {num}
                    </Button>
                  ))}
                  <Button variant="ghost" onClick={clearPIN}>Clear</Button>
                  <Button 
                    variant="outline" 
                    className="h-14 text-xl font-semibold"
                    onClick={() => appendToPIN("0")}
                  >
                    0
                  </Button>
                  <Button 
                    className="h-14 bg-brand-primary-medium"
                    disabled={pin.length !== 6 || loading}
                    onClick={handlePINLogin}
                  >
                    Go
                  </Button>
                </div>
                {error && <p className="text-sm text-destructive text-center">{error}</p>}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-brand-secondary-medium hover:underline font-medium">
              Register Organization
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
