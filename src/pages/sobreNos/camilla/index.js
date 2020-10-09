import React, { Component } from "react";
import "./style.css";

import Header from "../../../components/Header/index";

import fotoDePerfilCamilla from "../../../assets/image/foto_perfil_camilla.jpeg";

import iconGitHub from "../../../assets/image/icons/github.svg";
import iconLinkedin from "../../../assets/image/icons/linkedin.svg";
import iconCurriculo from "../../../assets/image/icons/curriculo.svg";

import seta from "../../../assets/image/icons/seta-esquerda.svg";

export default class PerfilCamilla extends Component {
  state = {
    target: "_blank"
  };
  voltar = (event) => {
    this.props.history.push("/sobre_nos");
  };

  render() {
    return (
      <div>
        <Header />
        <img
          onClick={this.voltar}
          id="btn_voltar"
          src={seta}
          alt="Voltar"
          title="Voltar"
        />
        <article>
          <section id="section_perfil_camilla">
            <img
              src={fotoDePerfilCamilla}
              alt="foto de perfil camilla"
              id="foto-de-perfil-camilla"
            />
            <p id="nome-camilla">Camilla Tainá</p>
          </section>
          <section id="sobre-mim-camilla">
            <h1 id="titulo-sobre-mim-camilla">sobre mim</h1>
            <h1 id="titulo-sobre-meus-projetos">Meus Projetos</h1>
            <p id="texto-sobre-camilla">
              Tenho 20 anos, moro em Olinda - PE, uma das minhas paixôes são
              tocar guitarra e violão e nesse ano descobrir mais uma paixão que
              cresceu dentro de mim, que foi a area da tecnologia. Esse foi o
              meu primeiro contato com a área e posso dizer que isso é o que eu
              quero pra minha vida, o Programa Start é só o começo da minha
              carreira como desenvolvedora e o próximo passo é ingressar numa
              faculdade na area de Sitemas para internet.
            </p>
          </section>
         {/* <section id="informacoees-perfil-camilla">
            <a href="" target={this.state.target}>
              <img
                src={iconGitHub}
                alt="Meu GitHub"
                className="size-icon"
                title="Github"
              />
            </a>
            <a href="" target={this.state.target}>
              <img
                src={iconLinkedin}
                alt="Meu Linkedin"
                className="size-icon"
                title="Linkedin"
              />
            </a>
            <a href="" target={this.state.target}>
              <img
                src={iconCurriculo}
                alt="meu curriculo"
                className="size-icon"
                title="Meu Curriculo"
              />
            </a>
    </section>*/}
        </article>
      </div>
    );
  }
}
