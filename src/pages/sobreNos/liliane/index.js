import React, { Component } from "react";
import "./style.css";
import perfil from "../../../assets/image/Liliane.jpg";
export default class Perfilliliane extends Component {
  render() {
    return (
      <div>
        <img src={perfil} alt="foto perfil" />
      </div>
    );
  }
}
