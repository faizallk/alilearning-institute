import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Fees() {
 
const feePlans = [
  {
    title: "One-Time Payment",
    price: "₹28,000",
    description: "Pay once and save more compared to installments.",
    benefits: [
      "Full course access",
      "Lifetime support",
      "Certificate included",
      "No registration fees",
      "Save extra ₹3,000 on total fees",
    ],
  },
  {
    title: "Installment Plan",
    price: "₹31,000",
    description:
      "Pay ₹11,000 at admission (₹10,000 course fee + ₹1,000 registration fee), then pay ₹10,000 per month for the next 2 months.",
    benefits: [
      "Full course access from day 1",
      "Flexible 3-part payment option",
      "₹10,000 per month for next 2 months",
      "Certificate after completion",
      "Admission fees applicable",
    ],
  },
];



  const refundPolicy = [
    "No refund after the Admission, but you can switch to another course.",
  ];

  return (
    <motion.div transition={{ delay: 0.2, opacity: 0 }} className="mt-[9vh] sm:mt-[12vh] md:mt-[8vh] lg:mt-[15vh] ">
    <Helmet>
        {/* Title Tag */}
        <title>Fees & Payment | Alibros Learning Institute</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore flexible course fees and payment options at Alibros Learning Institute. Choose between one-time payment or installment plans with lifetime support and certification."
        />

        
        <meta name="keywords"
          content="Alibros Learning Institute fees, course payment options, installment plan, one-time payment, programming courses fees, Laravel PHP MySQL C++ C programming"
        />

        {/* Author */}
        <meta name="author" content="Alibros Learning Institute" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="Choose the best fee structure at Alibros Learning Institute. One-time or installment plans available with full course access."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alilearning.org/fees" />
        <meta property="og:site_name" content="Alibros Learning Institute" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Course Fees & Payment Options" />
        <meta
          name="twitter:description"
          content="Check out our flexible course fees and payment options — one-time or installment plans with lifetime support."
        />
      </Helmet>
      {/* ✅ Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-blue-600 via-blue-600/95 to-white text-white text-center py-24 px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Course Fees & Payment Options
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Choose a payment plan that works best for you
        </motion.p>
      </motion.section>

      {/* ✅ Payment Plans Section */}
      <div className="py-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold"
          >
            Flexible Payment Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-zinc-600 mt-3"
          >
            Choose a payment plan that fits your convenience. Whether you prefer to save more with a one-time payment or go with our easy installment option, you’ll get full course access, lifetime support, and certification — all with 100% satisfaction and success assurance.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feePlans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                {plan.title}
              </h2>
              <p className="text-3xl font-extrabold text-zinc-800 mb-4">
                {plan.price}
              </p>
              <p className="text-zinc-600 mb-4">{plan.description}</p>
              <ul className="space-y-3">
                {plan.benefits.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-zinc-700"
                  >
                    <i className="ri-checkbox-circle-fill text-green-500 mt-1"></i>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Refund Policy Section */}
      <section className="py-16 px-6 lg:px-20 bg-zinc-100">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Refund & Cancellation Policy
          </h1>
          <p className="text-zinc-600 mt-3 max-w-2xl mx-auto">
            We value your trust. That’s why we offer a fair refund policy.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border">
          <ul className="space-y-4">
            {refundPolicy.map((rule, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-2 text-lg text-zinc-700"
              >
                <i className="ri-error-warning-fill text-red-500 mt-1"></i>
                {rule}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
