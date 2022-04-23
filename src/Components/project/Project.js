import React from "react";
import project1 from "../../images/project1.PNG";

export const Project = () => {
  return (
    <div>
      <section id="project" className="project">
        <div className="sec-title fs-1 fw-bolder m-auto text-center mt-5">
          Project
        </div>

        <div className="proj-content">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={project1}
                  alt="portfolio"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <div className="links fs-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-chrome"></i>
                  </a>
                </div>
                <p className="mt-5 pl-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, exercitationem ducimus eveniet quam inventore dolor
                  quidem praesentium, eius quasi accusantium atque id laboriosam
                  officia adipisci? Dolores ex deleniti numquam tempora.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  amet blanditiis velit deleniti beatae dolorum iure mollitia
                  ipsum ab sit neque quidem dolores hic tempora nobis, autem
                  eaque id inventore!
                </p>
              </div>
            </div>

            <div className="row mt-5 py-5">
              <div className="col-md-6 order-md-1">
                <img
                  src={project1}
                  alt="portfolio"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <div className="links fs-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-chrome"></i>
                  </a>
                </div>
                <p className="mt-5 pl-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, exercitationem ducimus eveniet quam inventore dolor
                  quidem praesentium, eius quasi accusantium atque id laboriosam
                  officia adipisci? Dolores ex deleniti numquam tempora.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  amet blanditiis velit deleniti beatae dolorum iure mollitia
                  ipsum ab sit neque quidem dolores hic tempora nobis, autem
                  eaque id inventore!
                </p>
              </div>
            </div>

            <div className="row mt-5 py-5">
              <div className="col-md-6">
                <img
                  src={project1}
                  alt="portfolio"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <div className="links fs-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-chrome"></i>
                  </a>
                </div>
                <p className="mt-5 pl-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, exercitationem ducimus eveniet quam inventore dolor
                  quidem praesentium, eius quasi accusantium atque id laboriosam
                  officia adipisci? Dolores ex deleniti numquam tempora.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  amet blanditiis velit deleniti beatae dolorum iure mollitia
                  ipsum ab sit neque quidem dolores hic tempora nobis, autem
                  eaque id inventore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
