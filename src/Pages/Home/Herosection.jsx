export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--conten--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Jen-Hung (Tom) Chang</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Software</span>{""}
            <br/>
            Engineer
            <p className="hero--section--description">
              description--- <br></br> bla bla blaa

              <br/>
            </p>
          </h1>
        </div>
        <a className="btn btn-primary" href="mailto:tom.jenhungchang@gmail.com" >Get In Touch</a>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/profileImg.jpeg"/>
      </div>

    </section>
  )
}