
//estrella normal
// import { motion } from "framer-motion";

// export default function StarSection({ fillColor = "currentColor", className = "" }) {
//   return (
//     <motion.svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 200 200"
//       className={className}
//       initial={{ y: -100, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       viewport={{ once: true, amount: 0.3 }} 
//       transition={{
//         type: "spring",
//         stiffness: 300, 
//         damping: 12,    
//         mass: 1,
//         opacity: { duration: 0.2 } 
//       }}
//     >
//       <path
//         fill={fillColor}
//         stroke="#000000"
//         strokeWidth="12"
//         strokeLinejoin="round"
//         d="M158.727 195 100 150.193 41.273 195l22.353-72.545L5 77.545l72.546-.101L100 5l22.455 72.444 72.545.102-58.626 44.909z"
//       />
//     </motion.svg>
//   );
// }


//estrella mas redondeada 
import { motion } from "framer-motion";

export default function StarSection({ fillColor = "currentColor", className = "" }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256" 
      className={className}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 12,
        mass: 1,
        opacity: { duration: 0.2 } 
      }}
    >
      <path
        fill={fillColor}
        stroke="#000000"
        strokeWidth="16" 
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z"
      />
    </motion.svg>
  );
}