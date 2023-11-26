import React from "react";
import CardTeam from "./CardTeam"; // Assuming you have a CardTeam component

const TeamCarousel = () => {
  return (
    <section className="bg-light py-5 " id="exchanges">
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
              <div className="carousel-item active">
                <div className="row">
                  {/* Your team cards go here */}
                  <div className="col-md-4"></div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <CardTeam
                      logo="l3.png"
                      name="John - AdminXEQ"
                      desc="Team leader and privacy enthusiast"
                    />
                  </div>
                  <div className="col-md-4"></div>
                  {/* Add more cards as needed */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  {/* Another set of team cards */}
                  <div className="col-md-4"></div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <CardTeam
                      logo="l3.png"
                      name="Michal vel M@lbit"
                      desc="Core developer"
                    />
                  </div>
                  <div className="col-md-4"></div>
                  {/* Add more cards as needed */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                <div className="col-md-4"></div>
                  {/* Another set of team cards */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <CardTeam
                      logo="l3.png"
                      name="ArqTras"
                      desc="Dev Support"
                    />
                  </div>
                  <div className="col-md-4"></div>
                  {/* Add more cards as needed */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                <div className="col-md-4"></div>
                  {/* Another set of team cards */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <CardTeam
                      logo="l3.png"
                      name="Dev"
                      desc="Contractors"
                    />
                  </div>
                  <div className="col-md-4"></div>
                  {/* Add more cards as needed */}
                </div>
              </div>
              {/* Add more carousel items as needed */}
            </div>
            
            <button className="carousel-control-prev inc" type="button" data-bs-target="#teamCarousel" data-bs-slide="prev" style={{backgroundColor:'black', width:'50px',height:'50px', marginTop:'150px',borderRadius:'50px'}}>
              <span className="carousel-control-prev-icon" aria-hidden="tru" style={{color:'black'}}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next inc" type="button"  style={{backgroundColor:'black', width:'50px',height:'50px', marginTop:'150px', borderRadius:'50px'}}
              data-bs-target="#teamCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;