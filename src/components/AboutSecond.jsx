// import React from "react";
// import { MessageCircle } from "lucide-react";
// import { motion } from "framer-motion";
// import "./AboutSecond.css";
// import picOne from "../assets/pic-mew.png";
// import picTwo from "../assets/pic-new2.png";
// import picThree from "../assets/pic-new3.png";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const AboutSecond = () => {
//   const cardData = [
//     {
//       title: "Current Location Tracking",
//       desc: "Our Advanced AI classifies issues as public or business-related with high accuracy. This ensures faster response times, better resource allocation, and enhanced operational efficiency.",
//       img: picOne,
//     },
//     {
//       title: "AI Powered Analysis",
//       desc: "Utilizes intelligent algorithms to instantly classify your location, ensuring accurate and context-aware reporting for enhanced decision-making.",
//       img: picTwo,
//     },
//     {
//       title: "Automated Reports",
//       desc: "Automatically generates detailed, human-like reports and delivers them directly to the appropriate authorities, ensuring quick and accurate communication.",
//       img: picThree,
//     },
//     {
//       title: "Working",
//       desc: (
//         <ul className="list-disc list-inside space-y-1">
//           <li>Spot an issue—Broken sidewalk, pothole, safety hazard, you name it.</li>
//           <li>Take a photo—EAiSER’s AI detects the type of issue and where it is, with over 95% accuracy.</li>
//         </ul>
//       ),
//       img: picThree,
//     },
//     {
//       title: "Working",
//       desc: (
//         <ul className="list-disc list-inside space-y-1">
//           <li>Review & submit—The app pre-fills your report. Confirm and hit send.</li>
//           <li>Automatic routing—We deliver it to the right city department or a vetted local expert.</li>
//         </ul>
//       ),
//       img: picThree,
//     },
//   ];

//   return (
//     <div
//       id="product-section"
//       className="bg-black min-h-screen px-6 sm:px-10 pt-24 text-white"
//     >
//       {/* Header */}
//       <motion.p
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-sm text-gray-400 tracking-widest mb-4"
//       >
//         [ PRODUCTS ]
//       </motion.p>

//       <motion.h1
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4"
//       >
//         EAiSER — Transform Problems into Solutions with One Photo
//       </motion.h1>

//       <motion.h2
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         viewport={{ once: true }}
//         className="about-second text-lg sm:text-xl md:text-2xl font-light text-center text-gray-200 mb-12 mt-10 sm:mt-16"
//       >
//         A product by MomntumAI
//         <br />
//         <span className="italic text-sm sm:text-base text-gray-300">
//           “AI-powered tool that transforms photo reports into fast, accurate solutions for communities and businesses.”
//         </span>
//       </motion.h2>

//       {/* Stats */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-r from-[#000000] via-[#58259c] to-[#090909] py-8 px-6 rounded-lg flex flex-col sm:flex-row justify-around items-center text-center mb-16 gap-8 sm:gap-0 shadow-lg shadow-purple-900/20"
//       >
//         {[
//           { num: "Report in under 30 seconds" },
//           { num: ">95%", label: "Accuracy Rate" },
//           { num: "Cost Free for all residents" },
//         ].map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-1xl sm:text-2xl font-semibold text-white mb-1">
//               {stat.num}
//             </h2>
//             <span className="text-gray-400 text-sm">{stat.label}</span>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Cards */}
//       <div className="flex flex-col gap-6">
//         {/* First row: 3 cards */}
//         <div className="flex justify-center gap-6 flex-wrap">
//           {cardData.slice(0, 3).map((card, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="relative w-full sm:w-[300px] md:w-[320px] min-h-[540px] rounded-xl bg-black border border-white/10 hover:bg-gradient-to-b hover:from-[#111] hover:to-[#000] transition duration-300 shadow-md p-6 flex flex-col justify-between group hover:shadow-purple-900/30 hover:scale-[1.03]"
//               whileHover={{ y: -8 }}
//             >
//               {/* Four corner dots */}
//               <span className="absolute top-0 left-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <span className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <span className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />

//               {/* Icon + Text */}
//               <div>
//                 <motion.div
//                   initial={{ rotate: -10, opacity: 0 }}
//                   whileInView={{ rotate: 0, opacity: 1 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="w-10 h-10 rounded-full border border-white flex items-center justify-center mb-4 bg-purple-600/20"
//                 >
//                   <MessageCircle className="text-white w-5 h-5" />
//                 </motion.div>

//                 <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
//                   {card.title}
//                 </h2>
//                 <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
//               </div>

//               {/* Image */}
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={card.img}
//                 alt="feature"
//                 className="w-full max-w-[220px] h-[150px] object-cover rounded-md mx-auto mt-6 shadow-md shadow-purple-900/20"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Second row: 2 cards */}
//         <div className="flex justify-center gap-12 flex-wrap">
//           {cardData.slice(3).map((card, index) => (
//             <motion.div
//               key={index + 3}
//               custom={index + 3}
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="relative w-full sm:w-[300px] md:w-[320px] min-h-[540px] rounded-xl bg-black border border-white/10 hover:bg-gradient-to-b hover:from-[#111] hover:to-[#000] transition duration-300 shadow-md p-6 flex flex-col justify-between group hover:shadow-purple-900/30 hover:scale-[1.03]"
//               whileHover={{ y: -8 }}
//             >
//               {/* Four corner dots */}
//               <span className="absolute top-0 left-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <span className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <span className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />

//               {/* Icon + Text */}
//               <div>
//                 <motion.div
//                   initial={{ rotate: -10, opacity: 0 }}
//                   whileInView={{ rotate: 0, opacity: 1 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="w-10 h-10 rounded-full border border-white flex items-center justify-center mb-4 bg-purple-600/20"
//                 >
//                   <MessageCircle className="text-white w-5 h-5" />
//                 </motion.div>

//                 <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
//                   {card.title}
//                 </h2>
//                 <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
//               </div>

//               {/* Image */}
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={card.img}
//                 alt="feature"
//                 className="w-full max-w-[220px] h-[150px] object-cover rounded-md mx-auto mt-6 shadow-md shadow-purple-900/20"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSecond;
