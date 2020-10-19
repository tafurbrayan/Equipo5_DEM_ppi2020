import React from "react";
import "../../../Style/styles.css";
import NoReal from "../../../Imagenes/img/NoTest.png";

export default function EstudiantesNoRealizaronTest() {
  return (
    <div id="Fondo_1" style={{ backgroundImage: `url(${NoReal})` }}>
          <div class="container-fluid h-100">
    <div class="row justify-content-center h-100">
        <div class="col-sm-8 align-self-center text-center">
          <div>
          <table class="table">
            <caption></caption>
            <thead>
              <tr id="but">
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td id="but">Javier González</td>
                <td id="but">javierjose2555@gmail.com</td>
                <td id="but">
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-right-short"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td id="but">Brayan Tafur</td>
                <td id="but">Brayantafur67@hotmail.com</td>
                <td id="but">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-right-short"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td id="but">Juliana Ibarguen</td>
                <td id="but">Julianarda@gmail.com</td>
                <td id="but">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-right-short"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="MenuDocente">
            <svg
              id="svg12"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-90deg-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
