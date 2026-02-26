export default function ReceiptPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-sm mx-auto border bg-white shadow-sm font-mono text-sm">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold uppercase">LaundromatAI</h1>
        <p>Order Receipt</p>
      </div>
      <div className="border-t border-b py-4 my-4 space-y-2">
        <div className="flex justify-between">
          <span>Order ID:</span>
          <span>{params.id}</span>
        </div>
        <div className="flex justify-between">
          <span>Date:</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Wash & Fold (5kg)</span>
          <span>₦2,500</span>
        </div>
        <div className="flex justify-between">
          <span>Ironing (3 items)</span>
          <span>₦1,500</span>
        </div>
      </div>
      <div className="border-t pt-4 font-bold flex justify-between">
        <span>Total:</span>
        <span>₦4,000</span>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        <p>Thank you for your business!</p>
        <p>Track your order at laundromat.ai</p>
      </div>
    </div>
  );
}
