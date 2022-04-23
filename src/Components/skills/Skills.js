import React from "react";

export const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section">
        <div className="skills container pt-5 py-30">
          <div className="sec-title fs-1 fw-bolder m-auto text-center">
            Skills
          </div>
          <div className="sec-content fs-1 mt-5">
            <div className="row d-flex justify-content-between">
              <div className="col col-6 col-md-6 col-lg-3 d-flex justify-content-around text-center ">
                <span>
                  <i className="fab fa-html5 d-flex flex-column align-items-center"></i>
                  HTML
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around ">
                <span>
                  <i className="fab fa-css3-alt d-flex flex-column align-items-center"></i>
                  CSS
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around ">
                <span>
                  <i className="fab fa-js d-flex flex-column align-items-center "></i>
                  Javascript
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around">
                <span>
                  <i className="fab fa-python d-flex flex-column align-items-center "></i>
                  Python
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around pt-5 text-center">
                <span>
                  <i className="fab fa-bootstrap d-flex flex-column align-items-center"></i>
                  Bootstrap
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around pt-5">
                <span>
                  <i className="fab fa-php d-flex flex-column align-items-center "></i>
                  php
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around pt-5">
                <span>
                  <i className="fab fa-node d-flex flex-column align-items-center"></i>{" "}
                  Node
                </span>
              </div>

              <div className="col  col-6 col-md-6 col-lg-3 d-flex justify-content-around pt-5">
                <span>
                  <i className="fab fa-java d-flex flex-column align-items-center "></i>
                  Java
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
