import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";

const PLANS = [
  {
    name: "Pro",
    originalPrice: "₹999",
    price: "₹99",
    period: "month",
    description: "Unlock unlimited job applications with AI-powered features",
    icon: Zap,
    features: [
      "Unlimited job applications",
      "Advanced ATS resume tailoring",
      "All platforms + fresh data every 6 hours",
      "Cover letter generation",
      "Interview prep engine",
      "Priority email support",
      "Telegram integration",
    ],
    cta: "Get Started Now",
    popular: true,
    planId: "plan_pro_monthly",
    amount: 9900, // Amount in paise (₹99)
  },
];

// Razorpay configuration - Replace with your actual key ID
const RAZORPAY_KEY_ID = "rzp_test_your_key_id";

declare global {
  interface Window {
    Razorpay: any;
    rzp1: any;
  }
}

// Load Razorpay script
function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay script"));
    document.body.appendChild(script);
  });
}

async function handleRazorpayPayment(plan: typeof PLANS[0]) {
  if (!plan.planId) {
    // Free plan - redirect to signup
    window.location.href = "/signup";
    return;
  }

  try {
    // Load Razorpay script first
    await loadRazorpayScript();
    
    // In production, you would call your backend to create a Razorpay order
    // and get the order_id
    /*
    const response = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId: plan.planId, amount: plan.amount })
    });
    const data = await response.json();
    */

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: plan.amount || 9900, // Amount in paise
      currency: "INR",
      name: "Applivo",
      description: `${plan.name} Plan - ${plan.price}/${plan.period}`,
      image: "/applivo-logo.png",
      handler: function (response: any) {
        // Handle successful payment
        console.log("Payment successful:", response);
        alert(`Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);
        // Redirect to success page or update user subscription
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#10B981",
      },
    };

    // Open Razorpay payment gateway
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed. Please try again.");
  }
}

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Preload Razorpay script on component mount
  useEffect(() => {
    loadRazorpayScript().catch(console.error);
  }, []);

  return (
    <section id="pricing" ref={ref} className="py-24" style={{ background: "#0D1117" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "#E6EDF3" }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg" style={{ color: "#8B949E" }}>
            Choose the plan that fits your job search needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "ring-2"
                    : "hover:border-emerald-500/50"
                }`}
                style={{
                  background: plan.popular ? "linear-gradient(135deg, #10B981 0%, #059669 100%)" : "#161B22",
                  border: plan.popular ? "none" : "1px solid #21262d",
                  transform: plan.popular ? "scale(1.05)" : "scale(1)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: plan.popular ? "rgba(255,255,255,0.2)" : "rgba(16,185,129,0.1)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: plan.popular ? "#fff" : "#10B981" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: plan.popular ? "#fff" : "#E6EDF3" }}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  {plan.originalPrice && (
                    <span
                      className="text-xl font-semibold line-through mr-2"
                      style={{ color: plan.popular ? "rgba(255,255,255,0.6)" : "#6B7280" }}
                    >
                      {plan.originalPrice}
                    </span>
                  )}
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: plan.popular ? "#fff" : "#E6EDF3" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period !== "forever" && (
                    <span
                      className="text-sm ml-1"
                      style={{ color: plan.popular ? "rgba(255,255,255,0.8)" : "#8B949E" }}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>

                <p
                  className="text-sm mb-6"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.8)" : "#8B949E" }}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: plan.popular ? "#fff" : "#10B981" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: plan.popular ? "#fff" : "#8B949E" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleRazorpayPayment(plan)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-emerald-600 hover:bg-gray-100"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {plan.cta}
                </button>

                {plan.planId && (
                  <p
                    className="text-xs text-center mt-4 flex items-center justify-center gap-1"
                    style={{ color: plan.popular ? "rgba(255,255,255,0.7)" : "#6B7280" }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5h-9v-3h9v3zm0-6h-9v-3h9v3z" />
                    </svg>
                    Secured by Razorpay
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12 text-sm"
          style={{ color: "#6B7280" }}
        >
          All plans include a 14-day money-back guarantee. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
