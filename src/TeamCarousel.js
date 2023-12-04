import React from "react";
import CardTeam from "./CardTeam";

const TeamCarousel = () => {
  const isMobileView = window.innerWidth < 572;
  const isDesktopView = window.innerWidth >= 572;

  return (
    <section className="bg-light py-5 " >
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h1 className="display-4 fw-bolder">
                <span className="d-inline">Our team</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="cards mx-auto">
          <div
            id="teamCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {isDesktopView && (
                <div className="carousel-item active">
                  <div className="row">
                    {/* Your team cards go here */}
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="John - AdminXEQ"
                        desc="Team leader and privacy enthusiast"
                        description= "Passionate team leader and privacy advocate with a focus on project ownership. Core developer with a commitment to creating secure and privacy-oriented solutions."
                      />
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="Michal vel M@lbit"
                        desc="Core developer"
                        description="Core developer dedicated to shaping project foundations through coding expertise."
                      />
                    </div>
                    <div className="col-md-2"></div>
                    {/* Add more cards as needed */}
                  </div>
                </div>
              )}

              {isDesktopView && (
                <div className="carousel-item">
                   <div className="row">
                    {/* Your team cards go here */}
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="ArqTras"
                        desc="Dev support"
                        description=" Skilled team member serving as developer, tester, and support specialist. Embracing anonymity, I contribute to seamless collaboration across project phases."
                      />
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="Dev"
                        desc="Contractors"
                        description="Anonymous contractors skilled in C++, Node, React, Go, Solidity and Python, providing versatile expertise for projects"
                      />
                    </div>
                    <div className="col-md-2"></div>
                    {/* Add more cards as needed */}
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="John - AdminXEQ"
                        desc="Team leader and privacy enthusiast"
                        description= "Passionate team leader and privacy advocate with a focus on project ownership. Core developer with a commitment to creating secure and privacy-oriented solutions."
                      />
                    </div>
                    {/* Add more cards as needed */}
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="Michal vel M@lbit"
                        desc="Core developer"
                        description="Core developer dedicated to shaping project foundations through coding expertise."
                      />
                    </div>
                    {/* Add more cards as needed */}
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="ArqTras"
                        desc="Dev support"
                        description=" Skilled team member serving as developer, tester, and support specialist. Embracing anonymity, I contribute to seamless collaboration across project phases."
                      />
                    </div>
                    {/* Add more cards as needed */}
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="Dev"
                        desc="Contractors"
                        description="Anonymous contractors skilled in C++, Node, React, Go, Solidity and Python, providing versatile expertise for projects"
                      />
                    </div>
                    {/* Add more cards as needed */}
                  </div>
                </div>
              )}
            </div>

            <button
              className="carousel-control-prev inc"
              type="button"
              data-bs-target="#teamCarousel"
              data-bs-slide="prev"
              style={{
                backgroundColor: "black",
                width: "50px",
                height: "50px",
                marginTop: "150px",
                borderRadius: "50px",
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ color: "black" }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next inc"
              type="button"
              style={{
                backgroundColor: "black",
                width: "50px",
                height: "50px",
                marginTop: "150px",
                borderRadius: "50px",
              }}
              data-bs-target="#teamCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;