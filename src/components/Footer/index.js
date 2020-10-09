import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  // state = {
  //   githubRafael: "https://github.com/Rafael72-hue",
  //   githubLucasMiller: "https://github.com/LucasMiller98",
  //   linkedInLucasMiller: "https://www.linkedin.com/in/lucas-miller-076564175/",
  //   linkedInRafael: "www.linkedin.com/in/rafael-eliú",
  //   githubCamilla: "https://github.com/camillataina",
  //   linkedinCamilla: "https://www.linkedin.com/in/camilla-taina-9788251ab/",
  //   target: "_blank"
  // };

  render() {
    // const {
    //   githubLucasMiller,
    //   githubRafael,
    //   githubCamila,
    //   target,
    //   linkedInLucasMiller,
    //   linkedInRafael,
    //   linkedinCamila
    // } = this.state;

    return (
      <footer>
        <p>
          {/* ESSE TEXTO PODE SER ALTERADO, MAS OS LINKS TERÃO QUE FICAR NA PÁGINA ESPECIFICA */}
          Projeto criado com o objetivo de aprendizado. Quer saber quem nós
          somos? <Link to="/sobre_nos">Clique Aqui!</Link>{" "}
        </p>
        {/* <section>
            <h3>Grupo</h3>
            <p>&copy; Rafael Eliú, Camilla Tainá e Lucas Miller.</p>
          </section>
          <section>
            <h3>GitHub</h3>
            <p>
              <a target={target} href={githubRafael}>
                GitHub de Rafael
              </a>
            </p>
            <p>
              <a href={githubLucasMiller} target={target}>
                GitHub de Lucas
              </a>
            </p>
            <p>
              <a href={githubCamila} target={target}>
                GitHub de Camilla
              </a>
            </p>
          </section>
          <section>
            <h3>Linkedin</h3>
            <p>
              <a href={linkedInRafael} target={target}>
                Linkedin de Rafael
              </a>
            </p>
            <p>
              <a href={linkedInLucasMiller} target={target}>
                Linkedin de Lucas
              </a>
            </p>
            <p>
              <a href={linkedinCamila} target={target}>
                Linkedin de Camilla
              </a>
            </p>
          </section> */}
      </footer>
    );
  }
}
