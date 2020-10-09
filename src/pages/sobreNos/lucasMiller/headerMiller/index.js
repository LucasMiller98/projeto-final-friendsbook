import React from "react";
import Profile from "../profile/index";
import "./styles.css";
import img from "./img/img-codes.jpg";

export default class HeaderMiller extends React.Component {
  render() {
    return (
      <>
        <header id="header-home">
          <section id="section-img-capa-profile">
            <img src={img} alt="Foto da capa" id="img-capa" />
          </section>
          <section id="section-myProfile">
            <Profile />
            <h1 className="title-lucasMiller">Lucas Miller</h1>
            <h3 className="title-lucasMiller">Front-end Developer</h3>
          </section>
          <section id="section-nav">
            <h3 id="title-projects">Alguns projetos</h3>
            <button
              id="button-curriculo"
              className="buttons-projects"
              onClick={this.buttonShowCurriculo}
            >
              Curriculo
            </button>
            <button
              id="button-rocketseat"
              className="buttons-projects"
              onClick={this.buttonSecretMessage}
            >
              Mensagem secreta(Rocketseat)
            </button>
          </section>
        </header>
      </>
    );
  }
}
