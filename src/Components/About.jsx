import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <div className="container-xxl py-6 pb-5" id="skill">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-5 mb-5">Skills & Experience</h1>
                        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
                        <h3 className="mb-4">My Skills</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">HTML</h6>
                                        <h6 className="font-weight-bold">95%</h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">CSS</h6>
                                        <h6 className="font-weight-bold">85%</h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">PHP</h6>
                                        <h6 className="font-weight-bold">90%</h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">JavaScript</h6>
                                        <h6 className="font-weight-bold">90%</h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Angular JS</h6>
                                        <h6 className="font-weight-bold">95%</h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">WordPress</h6>
                                        <h6 className="font-weight-bold">85%</h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                            <li className="nav-item w-50">
                                <button 
                                    className={`nav-link w-100 py-3 fs-5 ${activeTab === 'experience' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('experience')}
                                >
                                    Education
                                </button>
                            </li>
                            <li className="nav-item w-50">
                                <button 
                                    className={`nav-link w-100 py-3 fs-5 ${activeTab === 'education' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('education')}
                                >
                                    Edu
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className={`tab-pane fade show p-0 ${activeTab === 'experience' ? 'active' : ''}`}>
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>Master of Buisness Administrative (Pursuing)

</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2023 - 2025</p>
                                        <h6 className="mb-0">Srinivas Institute of Technology Valachil</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Product Designer</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Web Designer</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Apps Designer</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade show p-0 ${activeTab === 'education' ? 'active' : ''}`}>
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>UI Design Course</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>iOS Development</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Web Design</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Apps Design</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
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
