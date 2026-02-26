import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Zap, Shield, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-brand-secondary-medium" />
          <span className="ml-2 text-xl font-bold text-brand-primary-dark">LaundromatAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-brand-primary-dark text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Laundry Business with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Automate orders, track customers, and grow your revenue with the smartest laundry management platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-brand-secondary-medium hover:bg-brand-secondary-light text-white">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-primary-dark">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-white shadow-sm">
                <Sparkles className="h-12 w-12 text-brand-secondary-medium" />
                <h3 className="text-xl font-bold">AI Order Processing</h3>
                <p className="text-sm text-gray-500 text-center">
                  Let AI handle order categorization and pricing automatically.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-white shadow-sm">
                <Shield className="h-12 w-12 text-brand-secondary-medium" />
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-sm text-gray-500 text-center">
                  Integrated Paystack for seamless and secure transactions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-white shadow-sm">
                <BarChart3 className="h-12 w-12 text-brand-secondary-medium" />
                <h3 className="text-xl font-bold">Smart Analytics</h3>
                <p className="text-sm text-gray-500 text-center">
                  Deep insights into your business performance and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 LaundromatAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
