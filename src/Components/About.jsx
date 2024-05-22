import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5">Skills </h1>
        
            <h3 className="mb-4">My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Team work</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Leadership</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Hardworking</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Power point</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Microsoft word
</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Microsoft Excel</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button
                  className={`nav-link w-100 py-3 fs-5 ${
                    activeTab === "experience" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  Education
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className={`nav-link w-100 py-3 fs-5 ${
                    activeTab === "education" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("education")}
                >
                  Internship & Achievements
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className={`tab-pane fade show p-0 ${
                  activeTab === "experience" ? "active" : ""
                }`}
              >
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5>Master of Buisness Administrative (Pursuing)</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2023 - 2025</p>
                    <h6 className="mb-0">
                      Srinivas Institute of Technology Valachil
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Bachelor of Commerce</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2023</p>
                    <h6 className="mb-0">
                      Sri Venkataramana Swamy College Bantwal
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Pre - University</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2019</p>
                    <h6 className="mb-0">
                      Sri Venkataramana Swamy College Bantwal
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>SSLC</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2017</p>
                    <h6 className="mb-0">
                      Sri Venkataramana Swamy Temple School Bantwal
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade show p-0 ${
                  activeTab === "education" ? "active" : ""
                }`}
              >
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5>INTERNSHIP</h5>
                    <h5>Bright Globe Pvt Ltd (HR solutions & consultancy)</h5>
                    <ul>
                      <li>Telephone</li>
                      <li>PF, ESI</li>
                      <li>Naukri.com</li>
                    </ul>
                  </div>

                  <div className="col-sm-6">
                    <h5>ACHIEVEMNTS & AWARDS</h5>
                    <ul>
                      <li>Participated in National level management fest </li>
                      <li>College Secretary for 1year</li>
                      <li>Class Representative for 3 years </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
