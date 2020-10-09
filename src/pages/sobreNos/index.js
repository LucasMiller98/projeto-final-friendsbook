import React, { Component } from "react";
import Header from "../../components/Header/index";
import "./style.css";
import perfilRafael from "../../assets/image/perfilRafael/foto_perfil_rafael.jpg";
import perfilCamilla from "../../assets/image/foto_perfil_camilla.jpeg";
import ProfileLucasMiller from "../../assets/image/profileLucasMiller/foto-profile.jpg";
import { Link } from "react-router-dom";

export default class SobreNos extends Component {
  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = "Sobre Nós";
  }
  render() {
    return (
      <div>
        <Header />
        <div id="section_sobre_nos">
          <h1 id="titulo-perfis">Conheça um pouco sobre nós</h1>
          <div id="flex_layout">
            <div className="item_perfil">
              <img
                src={perfilCamilla}
                alt="perfil Camilla"
                className="image-profile"
              />

              <button className="botao_sobre_nos">
                <Link to="/perfil_camilla">Ver Perfil</Link>
              </button>
            </div>

            <div className="item_perfil">
              <img
                src={ProfileLucasMiller}
                alt="Perfil de Lucas Miller"
                className="image-profile"
              />

              <button className="botao_sobre_nos">
                <Link to="/profilelucasmiller">Ver Perfil</Link>
              </button>
            </div>

            <div className="item_perfil itens_de_baixo">
              <img
                src={perfilRafael}
                alt="perfil rafael"
                className="image-profile"
                title="Rafael Eliú"
              />

              <button className="botao_sobre_nos">
                <Link to="/perfil_rafael">Ver Perfil</Link>
              </button>
            </div>

            <div className="item_perfil itens_de_baixo">
              <img
                src={perfilRafael}
                alt="perfil rafael"
                className="image-profile"
              />

              <button className="botao_sobre_nos">Ver Perfil</button>
            </div>
          </div>
        </div>
        <footer id="footer_sobre_nos">
          &copy; Projeto criado por: Liliane, Rafael, Camilla, Lucas
        </footer>
      </div>
    );
  }
}
