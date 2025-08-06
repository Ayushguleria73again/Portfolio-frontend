// Reusable animation variants - motion is imported in components where used
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideIn = {
  left: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  },
  right: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  },
  up: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 }
  },
  down: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -180, scale: 0.5 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 180, scale: 0.5 }
};

// Stagger animations
export const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Floating animation for particles
export const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Text reveal animation
export const textReveal = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Counter animation
export const counterAnimation = (targetValue) => ({
  initial: { value: 0 },
  animate: { 
    value: targetValue,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
});

// Hover effects
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const hoverGlow = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
  }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

// Scroll-triggered animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  viewport: { once: true, amount: 0.3 }
};

// Parallax effect
export const parallaxVariants = {
  animate: (offset) => ({
    y: offset,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30
    }
  })
};

// Loading spinner
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Form field animations
export const formFieldVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4
    }
  }
};

// Button micro-interactions
export const buttonVariants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};
