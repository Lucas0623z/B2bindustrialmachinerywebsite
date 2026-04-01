export const motionConfig = {
  // Viewport intersection thresholds
  viewport: {
    early: 0.1,    // Trigger early (10% visible)
    default: 0.25, // Standard trigger (25% visible)
    late: 0.5,     // Trigger late (50% visible)
  },

  // Animation durations (in seconds)
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    extended: 1.2,
  },

  // Easing curves
  easing: {
    smooth: [0.25, 0.1, 0.25, 1],        // Smooth ease-in-out
    subtle: [0.33, 0.01, 0.66, 1],       // Very subtle ease
    spring: [0.68, -0.55, 0.265, 1.55],  // Bouncy spring
    snappy: [0.4, 0, 0.2, 1],            // Sharp and snappy
  },

  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

export const variants = {
  // Hero content layered reveal
  heroContent: {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: motionConfig.duration.slow,
        delay: custom * 0.2,
        ease: motionConfig.easing.smooth,
      },
    }),
  },

  // Fade up from bottom
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionConfig.duration.normal,
        ease: motionConfig.easing.smooth,
      },
    },
  },

  // Slide in from left
  slideLeft: {
    hidden: {
      opacity: 0,
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: motionConfig.duration.slow,
        ease: motionConfig.easing.smooth,
      },
    },
  },

  // Slide in from right
  slideRight: {
    hidden: {
      opacity: 0,
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: motionConfig.duration.slow,
        ease: motionConfig.easing.smooth,
      },
    },
  },

  // Container for staggered children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motionConfig.stagger.normal,
        delayChildren: 0.1,
      },
    },
  },

  // Individual stagger item
  staggerItem: {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: motionConfig.duration.normal,
        ease: motionConfig.easing.smooth,
      },
    },
  },

  // Scale reveal effect
  scaleReveal: {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: motionConfig.duration.slow,
        ease: motionConfig.easing.smooth,
      },
    },
  },
};
