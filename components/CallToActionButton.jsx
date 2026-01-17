import { motion } from "framer-motion";
import useRazorpay from "../src/hooks/useRazorpay";

export default function CallToActionButton(props) {
  const isLoaded = useRazorpay();

  const handlePayment = () => {
    if (!isLoaded) return;

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      alert("Error: Razorpay Key ID is missing. Please check Vercel Environment Variables.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: function (response) {
        alert(JSON.stringify(response));
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(JSON.stringify(response));
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };


  return (
    <motion.div
      className="py-4 px-4 sm:px-0 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={handlePayment}
        disabled={!isLoaded}
        className="
          relative inline-flex w-full sm:max-w-md
          items-center justify-center text-center
          rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold tracking-wide
          shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40
          px-8 sm:px-12 py-4 sm:py-5
          text-sm sm:text-base md:text-lg
          whitespace-nowrap
          transition-all duration-300 ease-out
          max-[380px]:text-[13px] max-[380px]:px-5
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          border border-transparent hover:border-red-400/50
        "
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {props.text || "Apply for IRON DAD CLUB™"}
        <span className="animate-cross-line"></span>
      </motion.button>

    </motion.div>
  );
}
