export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--conten--box">
        <div className="hero--section--content">
          <p className="section--title">Hello</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color"> Full Stack</span>{""}
            <br/>
            Developer
            <p className="hero--section--description">
              description

              <br/>
            </p>
          </h1>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img"/>
      </div>

    </section>
  )
}