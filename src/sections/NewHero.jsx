import { Canvas } from "@react-three/fiber";

import { useMediaQuery } from "react-responsive";
import { Astronaught } from "../components/Astronaught";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const NewHero = () => {

  const isMobile=useMediaQuery({maxWidth:852});

  return (
    <section className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space px-20 z-0">
      
      <div className="relative z-10">
        <HeroText />
      </div>
      <ParallaxBackground />
      <figure className="absolute inset-0 w-full h-full pointer-events-none">
  <Canvas
    className="!w-full !h-full"
    camera={{ position: [0, 1, 3], fov: 45 }}
  >
    <Astronaught
      scale={isMobile ? 0.15 : 0.19}
      position={isMobile ? [0, -1.5, 0] : [1, 0, 0]}
    />
    {/* <OrbitControls /> */}
  </Canvas>
</figure>

    </section>
  );
};

export default NewHero;
