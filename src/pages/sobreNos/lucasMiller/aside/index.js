import React from "react";
import curriculo from "../../../../assets/image/icons/curriculo.svg";
import github from "../../../../assets/image/icons/github.svg";
import linkedin from "../../../../assets/image/icons/linkedin.svg";
import "./styles.css";

export default class Aside extends React.Component {
  state = {
    blank: "_blank"
  };

  render() {
    const { blank } = this.state;

    return (
      <>
        <aside id="aside-miller">
          <section className="space">
            <h1 id="h1-projects">Alguns projetos</h1>
            <section>
              <h3>Currículo</h3>
              <a
                id="curriculo"
                href="https://github.com/LucasMiller98/curriculo-figma"
                target={blank}
              >
                <img
                  id="curriculo-lucasmiller"
                  src={curriculo}
                  alt="meu curriculo"
                  className="img-projects"
                />
              </a>
            </section>
          </section>
          <section className="section-git-linkedIn space">
            <h3>Jogo do par ou ímpar com python</h3>
            <a
              target={blank}
              className="links"
              href="https://github.com/LucasMiller98/JogoParOuImpar"
            >
              <img
                src={github}
                alt="Projeto par ou ímpar com python"
                className="img-projects"
              />
            </a>
          </section>
          <section>
            <h3>Rocketseat lista de "to do"</h3>
            <a
              className="links"
              target={blank}
              href="https://github.com/LucasMiller98/Rocketseat-app"
            >
              <img src={github} alt="Projetos" className="img-projects" />
            </a>
          </section>
          <section className="section-git-linkedIn space">
            <h3 id="h3-linkedin">LinkedIn</h3>
            <a
              className="links"
              href="https://www.linkedin.com/in/lucas-miller-076564175/"
              target={blank}
            >
              <img src={linkedin} alt="LinkedIn" className="img-projects" />
            </a>
          </section>
        </aside>
      </>
    );
  }
}
