import React, { useState } from "react";
import CardTeam from "./CardTeam";

const TeamCarousel = () => {
  const isMobileView = window.innerWidth < 572;
  const isDesktopView = window.innerWidth >= 572;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
    
    <section className="bg-light py-5">
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
       
            data-bs-interval="4000" // Disable auto sliding
          >
            {/* Carousel Indicators */}
            <ol className="carousel-indicators" style={{ transform: "translateY(-10px)" }}>
              {[...Array(isDesktopView ? 2 : 4)].map((_, index) => (
                <li
                  key={index}
                  data-bs-target="#teamCarousel"
                  data-bs-slide-to={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => handleSlideChange(index)}
                ></li>
              ))}
            </ol>

            {/* Carousel Inner */}
            <div className="carousel-inner">
              {isDesktopView && (
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="John - AdminXEQ"
                        desc="Team leader and privacy enthusiast"
                        description="Passionate team leader and privacy advocate with a focus on project ownership. Core developer with a commitment to creating secure and privacy-oriented solutions."
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
                  </div>
                </div>
              )}

              {isDesktopView && (
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="ArqTras"
                        desc="Dev support"
                        description="Skilled team member serving as a developer, tester, and support specialist. Embracing anonymity, I contribute to seamless collaboration across project phases."
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
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="John - AdminXEQ"
                        desc="Team leader and privacy enthusiast"
                        description="Passionate team leader and privacy advocate with a focus on project ownership. Core developer with a commitment to creating secure and privacy-oriented solutions."
                      />
                    </div>
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="Michal vel M@lbit"
                        desc="Core developer"
                        description="Core developer dedicated to shaping project foundations through coding expertise."
                      />
                    </div>
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="ArqTras"
                        desc="Dev support"
                        description="Skilled team member serving as a developer, tester, and support specialist. Embracing anonymity, I contribute to seamless collaboration across project phases."
                      />
                    </div>
                  </div>
                </div>
              )}

              {isMobileView && (
                <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <CardTeam
                        logo="l3.png"
                        name="Dev"
                        desc="Contractors"
                        description="Anonymous contractors skilled in C++, Node, React, Go, Solidity and Python, providing versatile expertise for projects"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Add more carousel items as needed */}
            </div>

            {/* Carousel Controls */}
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
</div>
  );
};

export default TeamCarousel;