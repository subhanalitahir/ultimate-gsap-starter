gsap.to(".card", {
  opacity: 1,
  scale: 1.3,
  rotate: 350,
  ease: "power2.out",
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      opacity: 0.6,
      scale: 1,
      ease: "sine.inOut",
      rotate: 0,
      duration: 1.3,
    });
  },
});
