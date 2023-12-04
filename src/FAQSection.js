import React, { useEffect } from "react";

const FAQSection = () => {
  useEffect(() => {
    // Includi i file JavaScript di Bootstrap
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-beta2/js/bootstrap.min.js";
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      // Pulisci lo script quando il componente viene smontato
      document.body.removeChild(bootstrapScript);
    };
  }, []);
  return (
    <section className="bg-light py-5" id="FAQsection">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-4 fw-bolder mb-5">
                <span className="text d-inline">FAQ</span>
              </h2>
            
              <div className="accordion" id="faqAccordion">
                {/* FAQ items */}
                <div className="accordion-item customItemFAQ">
                  <h2 className="accordion-header custom-faq-item " id="faqHeading1">
                    <button className="accordion-button FAQbutton" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                    Where can I find a wallet for Equilibria?
                    </button>
                  </h2>
                  <div id="faqCollapse1" className="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sx-layout">
                      We recommend using either the Graphical User Interface (GUI) or Command Line Interface (CLI) wallets. You can download them <a href="https://github.com/EquilibriaCC/equilibria-wallet/releases">here</a>.
                    </div>
                  </div>
                </div>

                <div className="accordion-item customItemFAQ">
                  <h2 className="accordion-header custom-faq-item " id="faqHeading2">
                    <button className="accordion-button FAQbutton" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="true" aria-controls="faqCollapse2">
                       How do I start mining Equilibria?

                    </button>
                  </h2>
                  <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sx-layout">
                      Equilibria mining is done using the CN-GPU algorithm. For detailed instructions, visit our mining <a href="https://github.com/EquilibriaCC/Equilibria/wiki/How-to-Mine-Equilibria">wiki page</a>.
                    </div>
                  </div>
                </div>

                <div className="accordion-item customItemFAQ">
                  <h2 className="accordion-header custom-faq-item " id="faqHeading5">
                    <button className="accordion-button FAQbutton" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="true" aria-controls="faqCollapse5">
                      Where can I obtain Equilibria tokens?


                    </button>
                  </h2>
                  <div id="faqCollapse5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sx-layout">
                      You can acquire Equilibria from various exchanges. Check out the <a href="#exchanges">exchange section</a> for a list of platforms where Equilibria is available.
                    </div>
                  </div>
                </div>

                <div className="accordion-item customItemFAQ">
                  <h2 className="accordion-header custom-faq-item " id="faqHeading3">
                    <button className="accordion-button FAQbutton" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="true" aria-controls="faqCollapse3">
                      What is the total supply of Equilibria tokens?
                    </button>
                  </h2>
                  <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sx-layout">
                    The current supply data can be obtained from our explorer. For the most accurate and up-to-date information, please refer to <a href="https://explorer.equilibriacc.com/">explorer</a>.
                    </div>
                  </div>
                </div>


                <div className="accordion-item customItemFAQ">
                  <h2 className="accordion-header custom-faq-item " id="faqHeading4">
                    <button className="accordion-button FAQbutton " type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="true" aria-controls="faqCollapse4">
                    Where can I stay updated on the latest Equilibria developments?
                    </button>
                  </h2>
                  <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sx-layout ">
                      Stay informed by checking out our <a href="https://medium.com/@xeq.dev">Medium</a>, <a href="https://t.me/EquilibriaAnnouncements">announcement channel</a>, and our <a href="https://trello.com/b/G692ugky/xeq">Trello board</a> for the latest updates.
                    </div>
                  </div>
                </div>

                <div className="accordion-item customItemFAQ">
                  <h2 className="accordion-header custom-faq-item " id="faqHeading6">
                    <button className="accordion-button FAQbutton " type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse6" aria-expanded="true" aria-controls="faqCollapse6">
                      How do I configure and operate a node?
                    </button>
                  </h2>
                  <div id="faqCollapse6" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sx-layout ">
                      To set up and run a node, refer to our comprehensive documentation <a href="https://github.com/EquilibriaCC/Equilibria/wiki/How-to-Setup-an-Equilibria-Oracle-Node">here</a>. It provides step-by-step instructions for a seamless setup process.
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;