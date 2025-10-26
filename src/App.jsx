import React from "react";
import "./index.scss";

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="first-child">
          <h3 className="child-head">How does our 2-week trial work?</h3>
          <p className="child-para">
            Try our experts and then add them to your team. Evaluate their work
            and integrate them into your workflow with ease. We make hiring
            simple, transparent, and flexible for your needs.
          </p>
        </div>

        <div className="boxes">
          <div className="boxes1">
            <div className="boxes1-content">
              <div className="content">
                <p className="content-heading">Inquire</p>
                <p className="content-para">
                  Send us your requirements, and based on them, we will send you
                  some CVs.
                </p>
              </div>
              <div className="content-bottom">
                <div className="bottom">
                  <div className="bottom1">1</div>
                  <p className="bottom-step">Step</p>
                </div>
              </div>
            </div>
          </div>

          <div className="boxes1">
            <div className="boxes1-content">
              <div className="content">
                <p className="content-heading">Select CV</p>
                <p className="content-para">
                  Go through the CVs and select the one that best fits your
                  needs.
                </p>
              </div>
              <div className="content-bottom">
                <div className="bottom">
                  <div className="bottom1">2</div>
                  <p className="bottom-step">Step</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxes">
          <div className="boxes1">
            <div className="boxes1-content">
              <div className="content">
                <p className="content-heading">Interview</p>
                <p className="content-para">
                  Conduct an interview and test their skills for one week.
                </p>
              </div>
              <div className="content-bottom">
                <div className="bottom">
                  <div className="bottom1">3</div>
                  <p className="bottom-step">Step</p>
                </div>
              </div>
            </div>
          </div>

          <div className="boxes1">
            <div className="boxes1-content">
              <div className="content">
                <p className="content-heading">Select</p>
                <p className="content-para">
                  If you're satisfied with their work, add them to your team, or
                  try out another resource.
                </p>
              </div>
              <div className="content-bottom">
                <div className="bottom">
                  <div className="bottom1">4</div>
                  <p className="bottom-step">Step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
