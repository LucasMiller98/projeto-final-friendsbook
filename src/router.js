import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lista from "./components/Lista/index";
import TelaLogin from "./pages/login/index";
import ListaAmigos from "./pages/amigos/index";
import Perfil from "./pages/perfilFake";
import SobreNos from "./pages/sobreNos";
import PerfilRafael from "./pages/sobreNos/rafael";
import ProfileLucasMiller from "./pages/sobreNos/lucasMiller";
import PerfilCamilla from "./pages/sobreNos/camilla";
import Perfilliliane from "./pages/sobreNos/liliane";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TelaLogin} />
      <Route path="/login" component={TelaLogin} />
      <Route path="/buscar_amigos" component={ListaAmigos} />
      <Route path="/lista" component={Lista} />
      <Route path="/login" component={TelaLogin} />
      <Route path="/home" component={Perfil} />
      <Route path="/sobre_nos" component={SobreNos} />
      <Route path="/perfil_rafael" component={PerfilRafael} />
      <Route path="/profilelucasmiller" component={ProfileLucasMiller} />
      <Route path="/perfil_camilla" component={PerfilCamilla} />
      <Route path="/liliane" component={Perfilliliane} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
