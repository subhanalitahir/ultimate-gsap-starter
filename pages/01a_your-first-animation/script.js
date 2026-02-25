gsap.to(".card", {
  opacity: 1,
  duration: 2,
  ease: "power2.out",
  scale: 1,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  },
});
