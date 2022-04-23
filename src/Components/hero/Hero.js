import React from "react";

export const Hero = () => {
  return (
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
            <h4 style={{ color: "wheat" }}>
              Hi 🙋‍♂️, Call me <strong>Rosh</strong>
            </h4>
            <h1 className="pt-2" style={{ color: "wheat" }}>
              Programmer
            </h1>
            <p className="mt-5" style={{ color: "wheat", fontSize: "25px" }}>
              When preparation gets a chance it's a luck. <br />
              So, let's connect and prepare. <br />
              PING ME!! PING ME!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
