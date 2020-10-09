import React, { Component } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import fundo from "../../assets/image/download1.jpg";
import foto from "../../assets/image/download2.jpg";
import fotoA from "../../assets/image/PerfilF/avenida-paulista.jpg";
import fotoC from "../../assets/image/PerfilF/cataratas-do-iguacu.jpg";
import fotoL from "../../assets/image/PerfilF/lencois-maranhenses.jpg";
import fotoP from "../../assets/image/PerfilF/porto-de-galinhas.jpg";
import Story from "../../components/Story/index";

import "./perfil.css";

export default class Perfil extends Component {
  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = "Meu Perfil";
  }
  render() {
    return (
      <div>
        <Header />
        <div id="perfil1">
          <img src={fundo} alt="fundo-perfil" id="fundo-perfil1" />
          <div id="div_informacao_botoes">
            <img src={foto} alt="foto-perfil" id="foto-perfil1" />
            <div id="informacao_perfil_fake">
              <h2 id="nome1">João Henrique</h2>
              <p id="prof1">Desenvolvedor Front-End</p>
              <p id="lugar1">Recife-Pe</p>
            </div>
            <div id="botoes_perfil_fake">
              <button id="button3">Conectar</button>
              <button id="button1">Mensagem</button>
              <button id="button2">...</button>
            </div>
          </div>
        </div>
        <div>
          <section id="descricao">
            <article id="galeria">
              <p id="ft1">Fotos</p>
              <div id="gale">
                <img src={fotoA} alt="avenida-paulista" className="ft" />
                <img src={fotoC} alt="cataratas-do-iguacu" className="ft" />
                <img src={fotoL} alt="lencois-maranhenses" className="ft" />
                <img src={fotoP} alt="porto-de-galinhas" className="ft" />
              </div>
            </article>
          </section>
          <div id="div_feed">
            <input
              type="text"
              id="escrever"
              placeholder=" O que você está pensando?"
            />
            <button id="bb">Enviar</button>
            <div id="status">
              <Story />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
