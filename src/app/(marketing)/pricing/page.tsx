export default function PricingPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-brand-primary-dark mb-8 text-center">Simple Pricing</h1>
      <div className="max-w-md mx-auto p-8 border rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Pro Plan</h2>
        <p className="text-4xl font-bold mb-6">₦15,000<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
        <ul className="text-left space-y-3 mb-8">
          <li className="flex items-center">✅ Unlimited Orders</li>
          <li className="flex items-center">✅ WhatsApp Notifications</li>
          <li className="flex items-center">✅ AI Business Insights</li>
          <li className="flex items-center">✅ 24/7 Support</li>
        </ul>
        <button className="w-full py-3 bg-brand-primary-medium text-white rounded-lg hover:bg-brand-primary-dark transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
