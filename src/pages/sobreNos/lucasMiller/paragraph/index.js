import React from "react";
import "./styles.css";
export default class Paragraphs extends React.Component {
  render() {
    return (
      <>
        <main id="main-paragraph">
          <section id="section-aboutme">
            <h3 className="h3-aboutme">Sobre mim</h3>
            <p className="paragraph-aboutme">
              Meu nome é Lucas Miller, tenho 21 anos, moro em Jaboatão dos
              Guararapes, toco clarinete na banda e na orquestra da matriz.
              Gosto muito de música, tecnologia, gosto de ser organizado,
              aprender coisas novas, gosto de conhecimento.
            </p>
            <h3 className="h3-aboutme">tecnologias</h3>
            <p className="paragraph-aboutme">
              Sei HTML5, CSS3, JavaScript e o básico de React.js, mas estou
              correndo atrás para aprender a maior quantidadde de tecnologias
              possíveis. Já estudei Python pela internet com o Gustavo Guanabara
              e Java, no curso do IFPE.
            </p>
            <h3 className="h3-aboutme">Curso</h3>
            <p className="paragraph-aboutme">
              Estou estudando informatica para internet, no IFPE, campus
              Jaboatão. Como lá é mais focado em back-end do que front-end, eu
              sei a base de Java orientado a objetos. No periodo atual,
              estudarei node.js e jQuery.
            </p>
            <h3 className="h3-aboutme">Hobby</h3>
            <p className="paragraph-aboutme">
              Toco clarinete na banda e na orquestra da igreja assembleia de
              Deus em Jaboatão dos Guararapes desde os 12 anos de idade.
            </p>
          </section>
        </main>
      </>
    );
  }
}
