import "./App.css";
// import { Header } from "./Components/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrapper">
      <div id="top-nav" className="top-nav">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
                <a className="nav-link" href="#project">
                  Project
                </a>
                <a className="nav-link" href="#about">
                  About Me
                </a>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="hero">
          <div className="container">
            <div className="row mt-5 py-10">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQFRe-EfYXiJlQ/profile-displayphoto-shrink_400_400/0/1643103983361?e=1655942400&v=beta&t=v_iYdQT_ANAosje9Z6TT1rSu68tPQDWmKqtP0o0r_5s"
                  alt="my photo"
                  width="70%"
                  className="ml-auto"
                />
              </div>
              <div className="col-md-6 pt-5 mt-5">
                <h4 style={{ color: "wheat" }}>Hi 🙋‍♂️, Call me 'Ran'</h4>
                <h1 className="pt-2" style={{ color: "wheat" }}>
                  Engineering Framework
                </h1>
                <p
                  className="mt-5"
                  style={{ color: "wheat", fontSize: "25px" }}
                >
                  When preparation gets a chance it's a luck. <br />
                  So, let's connect and prepare. <br />
                  PING ME!! PING ME!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Skills --> */}
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
      {/* <!-- Project --> */}

      <section id="project" className="project">
        <div className="sec-title fs-1 fw-bolder m-auto text-center mt-5">
          Project
        </div>

        <div className="proj-content">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="./images/project1.PNG"
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
                  src="./images/project1.PNG"
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
                  src="./images/project1.PNG"
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
      {/* <!-- About Me --> */}

      <section id="about" className="about">
        <div className="sec-title fs-1 fw-bolder m-auto text-center pt-5">
          About Me
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center pt-5">
              <img src="./images/roshan.jfif" alt="" width="70%" />
            </div>
            <div className="col-md-7">
              <p className="pt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                veniam labore? Optio maxime qui saepe cupiditate, quae earum quo
                harum reprehenderit ullam aliquam sed id nesciunt corporis
                pariatur hic exercitationem. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ipsa ut explicabo facere qui,
                cumque aliquid. Voluptate dolor beatae praesentium architecto
                recusandae, adipisci officiis asperiores autem impedit
                repudiandae maiores, sint expedita. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fuga quaerat quod facilis
                aspernatur quibusdam animi, perspiciatis ab earum qui! Sed omnis
                aspernatur sit atque ipsa suscipit assumenda nihil molestiae
                totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita tempore porro ex repellat libero molestias eaque
                adipisci dicta, maiores cumque harum sint quasi placeat possimus
                accusamus a culpa earum nisi! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Corporis necessitatibus iste
                repellat quidem cum accusantium adipisci vitae eaque illum
                itaque temporibus enim natus id facilis perspiciatis, amet modi
                quae laboriosam? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quibusdam, repellat provident. Quam officia
                quia aut, autem doloremque aperiam adipisci labore voluptatem
                praesentium sunt! Id nesciunt vel molestiae dolor omnis
                doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Voluptatem aspernatur quibusdam unde neque facere in
                tenetur sint reiciendis? Libero, enim modi! Qui beatae
                aspernatur, ad reiciendis dicta error similique quo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores fugit est nemo consequatur facere. Nesciunt
                temporibus, nobis ipsum ad deserunt sed, voluptatibus blanditiis
                nostrum error unde nisi earum! Nemo, dolor? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Unde sequi consequuntur
                voluptates fugit obcaecati facilis sed. Cum eaque placeat
                assumenda natus, minima illo architecto exercitationem.
                Cupiditate autem quas ipsa quam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}

      <section id="contact" className="contact-icons">
        <div className="container pt-5">
          <div className="contact"></div>
          <div className="icons rounded">
            <div className="sec-title fs-1 fw-bolder m-auto text-center pt-1">
              Contact Me!
            </div>
            <div class="icons1 mt-5 py-5">
              <a href="tel:0405624418">
                <i class="fas fa-mobile"></i>
              </a>
              <a href="mailto:broshan2056@gmail.com" target="_blank">
                <i class="fas fa-envelope-open-text"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/roshan--bhattarai"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCjwNPxfsMBQmYaT4AidUdMw"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a href="" target="_blank">
                Twr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}

      <div class="footer">
        <footer class="container text-center mt-5 py-5">
          Make with Your Love ❤
        </footer>
        <a href="#top-nav">
          <div class="up">
            <i class="fas fa-arrow-up"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
