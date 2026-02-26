import gsap from "gsap";
gsap.set(".box", {
  x: -400,
});
gsap.to(".box", {
  opacity: 1,
  scale: 1,
  delay: 2,
  duration: 2,
  ease: "power2.out",
  onComplete: () => {
    gsap.to(".box", {
      x: 400,
      duration: 2,
      ease: "power2.inOut",
    });
  },
});
