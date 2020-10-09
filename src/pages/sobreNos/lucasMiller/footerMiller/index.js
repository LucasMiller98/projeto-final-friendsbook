import React from "react";
import github from "../../../../assets/image/icons/github.svg";
import linkedin from "../../../../assets/image/icons/linkedin.svg";
import "./styles.css";

export default class FooterMiller extends React.Component {
  state = {
    blank: "_blank"
  };

  render() {
    const { blank } = this.state;

    return (
      <>
        <footer id="footerMiller">
          <section className="section-footerMiller">
            <h3 className="h3-footerMiller">GitHub</h3>
            <a href="https://github.com/LucasMiller98" target={blank}>
              <img src={github} alt="GitHub" id="img-footer-github" />
            </a>
          </section>
          <section className="section-footerMiller">
            <h3 className="h3-footerMiller">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/lucas-miller-076564175/"
              target={blank}
            >
              <img src={linkedin} alt="LinkedIn" id="img-footer-linkedin" />
            </a>
          </section>
        </footer>
      </>
    );
  }
}
