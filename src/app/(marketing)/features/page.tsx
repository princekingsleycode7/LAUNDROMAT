export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-brand-primary-dark mb-8 text-center">Powerful Features</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">WhatsApp Integration</h2>
          <p className="text-muted-foreground">Automatically notify customers about their order status via WhatsApp.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">QR Code Tracking</h2>
          <p className="text-muted-foreground">Generate unique QR codes for every laundry bag for easy tracking.</p>
        </div>
      </div>
    </div>
  );
}
