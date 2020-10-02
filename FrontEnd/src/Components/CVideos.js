import React from "react";
import "../Style/styles.css";
import Mar from "../Imagenes/img/mar.jpg";

class CVideos extends React.Component {
  render() {
    return (
      <body>
        <div id="Fondo_1" style={{ backgroundImage: `url(${Mar})` }}>
          <h1>¿Qué es un test?</h1>
          <section id="video">
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/acKq34s3f_c"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
        </div>
      </body>
    );
  }
}
export default CVideos;
