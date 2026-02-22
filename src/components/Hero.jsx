import Spline from '@splinetool/react-spline';
import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main className="relative flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] mb-10">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond" />
            PORTFOLIO
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Hi! I’m Chanka,
          <br />
          I Build Web & Mobile Apps
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          I specialize in React, Flutter, and AWS cloud systems. My work spans from sleek UIs to scalable backend integrations. Explore my portfolio to see how I bring ideas to life.
        </p>

        <div className="flex gap-4 mt-12">
          {/* <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            View Projects
            <i className="bx bx-link-external" />
          </a> */}
          <a
            href="https://drive.google.com/file/d/1i1Wo1e8FJjUCjptH8WIuqwMElAoEMipV/view?usp=sharing"
            target='_blank'
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            Download CV
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>

      {/* Scope the absolute Spline to this section and keep it below the text if needed */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] h-full z-0"
        scene="https://prod.spline.design/jNpViECCDNWj6J7M/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
