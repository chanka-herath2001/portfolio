import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  // helper to smooth-scroll and (if open) close the mobile menu
  const handleScrollTo = (targetId) => (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        className="text-3xl md:text-4xl lg:tesxt-5xl font-light m-0"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        CDH
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#about"
          onClick={handleScrollTo('about')}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={handleScrollTo('projects')}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          Projects
        </a>
        <a
          href="#experiences"
          onClick={handleScrollTo('experiences')}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          Experience
        </a>
        {/* <a ...>Contact me</a> */}
      </nav>

      {/* <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-non font-medium transition-all duration-500 hover:bg-white cursor-pointr z-50">
        Sign In
      </button> */}

      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      <div
        id="mobile-menu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            href="#about"
            onClick={handleScrollTo('about')}
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleScrollTo('projects')}
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            Projects
          </a>
          <a
            href="#experiences"
            onClick={handleScrollTo('experiences')}
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            Experience
          </a>
          {/* <a ...>Contact me</a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
