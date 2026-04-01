import { motion } from "motion/react";
import { ReactNode } from "react";
import { variants, motionConfig } from "./MotionConfig";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  custom?: number;
}

// Hero section layered entrance
export function HeroReveal({ children, className = "", delay = 0, custom = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants.heroContent}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scroll-triggered content reveal
export function ScrollReveal({
  children,
  className = "",
  variant = "fadeUp",
  threshold = motionConfig.viewport.default
}: MotionWrapperProps & { variant?: keyof typeof variants; threshold?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for sequential reveals
export function StaggerReveal({
  children,
  className = ""
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: motionConfig.viewport.early }}
      variants={variants.staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
export function StaggerRevealItem({
  children,
  className = ""
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={variants.staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// Premium CTA button with micro-interaction
export function PremiumCTA({
  children,
  className = "",
  onClick,
  variant = "primary"
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: motionConfig.duration.fast,
          ease: motionConfig.easing.smooth
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: motionConfig.duration.instant,
          ease: motionConfig.easing.smooth
        }
      }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.95 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

// Card with premium hover interaction
export function PremiumCard({
  children,
  className = "",
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className={className}
      whileHover={{
        y: -8,
        transition: {
          duration: motionConfig.duration.normal,
          ease: motionConfig.easing.smooth
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: motionConfig.duration.normal,
        ease: motionConfig.easing.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}

// Image reveal with subtle scale
export function ImageReveal({
  children,
  className = ""
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants.scaleReveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax-style background element
export function ParallaxElement({
  children,
  className = "",
  offset = 50
}: { children: ReactNode; className?: string; offset?: number }) {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: false, amount: 0 }}
      transition={{
        duration: motionConfig.duration.extended,
        ease: motionConfig.easing.subtle,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
