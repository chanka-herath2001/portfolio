import { useRef } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/Globe";


const About = () => {
  const grid2Container = useRef();

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "/>
          <div className="z-10">
            <p className="headtext">Hi, I'm Chanka</p>
            <p className="subtext">
              a Software Engineering undergraduate skilled in frontend development, UI/UX design, and cloud solutions. I love building creative, user-focused applications that blend technology and design.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-950"/>
        </div>
        
        <div className="grid-default-color grid-2">
  <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
    <p className="flex items-end text-5xl text-gray-500">
      CODE IS CRAFT
    </p>

    {/* Frontend */}
    <Card style={{ rotate: "-15deg", top: "55%", left: "18%", width: "84px" }} image="assets/logos/react.svg" containerRef={grid2Container}/>
    <Card style={{ rotate: "10deg",  top: "62%", left: "34%", width: "84px" }} image="assets/logos/vitejs.svg" containerRef={grid2Container}/>
    <Card style={{ rotate: "-8deg",  top: "35%", left: "42%", width: "84px" }} image="assets/logos/tailwindcss.svg" containerRef={grid2Container}/>
    <Card style={{ rotate: "6deg",   top: "24%", left: "22%", width: "88px" }} image="assets/logos/material-ui.svg" containerRef={grid2Container}/>

    {/* Backend / Python */}
    <Card style={{ rotate: "-12deg", top: "28%", left: "55%", width: "90px" }} image="assets/logos/fastapi.png" containerRef={grid2Container}/>
    <Card style={{ rotate: "20deg",  top: "18%", left: "68%", width: "90px" }} image="assets/logos/flask.png" containerRef={grid2Container}/>
    {/* <Card style={{ rotate: "75deg",  top: "12%", left: "8%",  width: "80px" }} image="assets/logos/python.svg" containerRef={grid2Container}/> */}
    {/* If you want Librosa explicitly as text */}
    <Card style={{ rotate: "-5deg",  top: "40%", left: "30%" }} text="Librosa" containerRef={grid2Container}/>

    {/* AWS */}
    <Card style={{ rotate: "-40deg", top: "44%", left: "70%", width: "90px" }} image="assets/logos/aws.svg" containerRef={grid2Container}/>
    {/* <Card style={{ rotate: "15deg",  top: "14%", left: "40%", width: "80px" }} image="assets/logos/lambda.svg" containerRef={grid2Container}/>
    <Card style={{ rotate: "-25deg", top: "50%", left: "50%", width: "80px" }} image="assets/logos/dynamodb.svg" containerRef={grid2Container}/>
    <Card style={{ rotate: "8deg",   top: "66%", left: "62%", width: "82px" }} image="assets/logos/cognito.svg" containerRef={grid2Container}/> */}

    {/* Other stacks you've used */}
    <Card style={{ rotate: "-18deg", top: "72%", left: "26%", width: "82px" }} image="assets/logos/mysql.svg" containerRef={grid2Container}/>
    <Card style={{ rotate: "12deg",  top: "70%", left: "47%" }} text="Flutter" containerRef={grid2Container}/>
    <Card style={{ rotate: "5deg",   top: "32%", left: "12%" }} text="Java/JSP" containerRef={grid2Container}/>
    <Card style={{ rotate: "-10deg", top: "22%", left: "32%" }} text="Firebase" containerRef={grid2Container}/>
  </div>
</div>


        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I am based in Sri Lanka and open for remote work worldwide</p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe/>
            </figure>
          </div>
        </div>

        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Do you want to start a project together?</p>
            <CopyEmailButton/>
          </div>
        </div>

        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stacks</p>
            <p className="subtext">I specialize in a variaty of languages frameworks and tool that allow me to be able to build robust and scalable applications</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
