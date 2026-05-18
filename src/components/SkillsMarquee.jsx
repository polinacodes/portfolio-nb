import { useRef } from "react";
import { motion, useSpring, useScroll, useTransform, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";

export default function SkillsMarquee({ baseVelocity = 1, children }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * 2 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-2 cursor-[url('/hand.svg'),_pointer] active:cursor-[url('/hand.svg'),_grabbing]">
      <motion.div 
        className="flex gap-12 whitespace-nowrap" 
        style={{ x }}
        drag="x"
        onDrag={(e, info) => {
          baseX.set(baseX.get() + info.delta.x * 0.03); 
        }}
        onDragStart={() => (directionFactor.current = 0)}
        onDragEnd={(e, info) => {
          directionFactor.current = info.velocity.x > 0 ? 1 : -1;
        }}
      >
        <div className="flex gap-12 flex-shrink-0">
          {children}
        </div>
        <div className="flex gap-12 flex-shrink-0" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}