import { useRef, useEffect } from "react";
import { motion, useSpring, useScroll, useTransform, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";

export default function SkillsMarquee({ skills, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);


    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-4 cursor-[url('/hand.svg'),_pointer] active:cursor-[url('/hand.svg'),_grabbing]">
      <motion.div 
        className="flex gap-4 whitespace-nowrap" 
        style={{ x }}
        drag="x"
        onDrag={(e, info) => {
          baseX.set(baseX.get() + info.delta.x * 0.05); 
        }}
        onDragStart={() => (directionFactor.current = 0)}
        onDragEnd={(e, info) => {
          directionFactor.current = info.velocity.x > 0 ? 1 : -1;
        }}
      >
    
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div 
            key={i}
            className={`w-32 h-32 flex-shrink-0 ${skill.color} border-4 border-black shadow-brutal flex flex-col items-center justify-center gap-2 select-none`}
          >
            <span className="material-symbols-outlined text-3xl text-black">
              {skill.type === 'front' ? 'code' : 'database'}
            </span>
            <span className="font-['JetBrains_Mono'] font-black uppercase text-[10px]">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}