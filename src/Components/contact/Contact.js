import React from "react";

export const Contact = () => {
  return (
    <div>
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
    </div>
  );
};
