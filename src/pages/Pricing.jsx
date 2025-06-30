// import React from "react";

// const plans = [
//   {
//     title: "Hobbyist",
//     price: "$16",
//     subtitle: "per person / month\n1 person included",
//     description: "Elevate your projects, watermark-free",
//     features: [
//       "10 transcription hours / month",
//       "Export 1080p, watermark-free",
//       "20 uses / month of Basic AI Actions suite including Filler word removal, Studio sound, Draft show notes, Create clips, and more",
//       "30 minutes / month of AI speech with stock AI speakers and custom voice clones",
//       "5 minutes / month of avatars",
//     ],
//   },
//   {
//     title: "Creator",
//     price: "$24",
//     subtitle: "per person / month\nScale to a team of 3 (billed separately)",
//     description: "Unlock advanced AI-powered creativity",
//     mostPopular: true,
//     features: [
//       "30 transcription hours / month",
//       "Export 4k, watermark-free",
//       "Unlimited Basic and Advanced AI Actions suite including Eye contact, and 20+ more AI features",
//       "2 hours / month of AI speech",
//       "30 minutes / month of dubbing in 20+ languages",
//       "10 minutes / month of custom avatars",
//       "Unlimited access to royalty-free stock library",
//     ],
//   },
//   {
//     title: "Business",
//     price: "$50",
//     subtitle: "per person / month\nFor larger teams",
//     description: "Empower collaboration on your team",
//     features: [
//       "40 transcription hours / month",
//       "Add free Basic seats for collaboration",
//       "Unlimited access to full Professional AI Actions suite including Translation proofread",
//       "5 hours / month of AI speech",
//       "2 hours / month of dubbing in 20+ languages",
//       "30 minutes / month of custom avatars",
//       "Priority support (with SLA)",
//     ],
//   },
// ];

// const PricingPlans = () => {
//   return (
//     <div className="bg-black min-h-screen text-white py-16 px-6 lg:px-24 pt-60">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`border rounded-xl p-8 shadow-md ${
//               plan.mostPopular
//                 ? "border-blue-500 bg-gray-900"
//                 : "border-gray-700 bg-[#111111]"
//             }`}
//           >
//             {plan.mostPopular && (
//               <div className="text-xs text-white bg-blue-600 px-3 py-1 rounded-full w-fit mb-4">
//                 Most Popular
//               </div>
//             )}
//             <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
//             <p className="text-4xl font-bold mb-2">{plan.price}</p>
//             <p className="text-sm text-gray-400 whitespace-pre-line mb-4">
//               {plan.subtitle}
//             </p>
//             <p className="text-sm font-medium mb-6">{plan.description}</p>
//             <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 w-full mb-6">
//               Get started →
//             </button>
//             <ul className="text-sm space-y-2">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-start">
//                   <span className="text-green-400 mr-2 mt-1">✓</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;
