// Minimal placeholder for checkout API route.
// When you integrate Stripe / Razorpay, replace this with server-side order creation.

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Example: validate cart -> create payment session -> return session id
    return res.status(200).json({ ok: true, message: 'Replace with real checkout integration' });
  }
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
