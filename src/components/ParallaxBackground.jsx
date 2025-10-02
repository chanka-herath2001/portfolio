import { useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping:50});
    const mountain3Y = useTransform(x, [0,0.5], ["0%" , "70%"]);
    const planetsX = useTransform(x, [0,0.5], ["0%" , "-20%"]);
    const mountain2Y = useTransform(x, [0,0.5], ["0%" , "30%"]);
    const mountain1Y = useTransform(x, [0,0.5], ["0%" , "0%"]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="relative h-full w-full overflow-hidden">
        {/* Tint overlay (optional) */}
        <section className="absolute inset-0 bg-black/40 " >

        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-full z-[-1] bg-center bg-cover"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Mountain Layer 3 (farthest) */}
        <div
          className="absolute inset-0 z-[-1] bg-bottom bg-cover"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain3Y,
          }}
        />

        
        {/* Planets / mid layers */}
        <div
          className="absolute inset-0 z-[-1] bg-bottom bg-cover"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x:planetsX,
          }}
        />
        {/* Mountains 2 */}
        <div
          className="absolute inset-0 z-[-1] bg-bottom bg-cover"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain2Y,
          }}
        />
        {/* Mountain 1 */}
        <div
          className="absolute inset-0 z-[-1] bg-bottom bg-cover"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain1Y,
          }}
        />
        </section>
      </div>
    </div>
  );
};

export default ParallaxBackground;
