export default function AboutMe(){
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img  src="./img/about-me.jpg" alt="AboutMe"/>
      </div>
      <div className="hero--section--content--box about --section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            I am a software engineer at RealPlus Technology, where I develop software for our company's robots and IoT products. I collaborate closely with the hardware team to ensure seamless integration between software and hardware components. 
          </p>
          <p className="hero--section--description">         
            Currently, I am pursuing a Master's degree in Electrical and Computer Engineering at Duke University, with an expected graduation date of December 2026.
          </p>
        </div>
      </div>
    </section>
  )

}