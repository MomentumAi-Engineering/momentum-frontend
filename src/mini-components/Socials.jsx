import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { SiX } from "react-icons/si";
import obj2 from "../assets/object-02.png";
import { motion } from "framer-motion";

export default function Socials() {
  const socials = [
    { icon: <SiX className="w-5 h-5" />, label: "Twitter / X", link: "#", color: "#000000" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "https://www.linkedin.com/company/momntum-ai-us", color: "#0077B5" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", link: "#", color: "#E1306C" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "#", color: "#171515" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", link: "#", color: "#1877F2" },
  ];

  return (
    <motion.div
      className="flex flex-col gap-y-6 text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo & Name */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="MomentumAI Logo"
          className="h-10 w-auto object-contain drop-shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.span
          className="ml-3 text-xl font-semibold text-white tracking-wide"
          whileHover={{ color: "#60A5FA" }}
          transition={{ duration: 0.2 }}
        >
          MomntumAI
        </motion.span>
      </motion.div>

      {/* Social Icons */}
      <div className="flex gap-5 items-center">
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.link}
            aria-label={social.label}
            className="flex items-center justify-center text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.3,
              rotate: 8,
              ...(social.label !== "Twitter / X" && {
                color: social.color,
                textShadow: `0px 0px 8px ${social.color}`,
              }),
              transition: { duration: 0.2 },
            }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

// updated