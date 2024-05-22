import React, { useState } from 'react';

const Header = () => {
    const [typedText, setTypedText] = useState('');
    const handleDownloadCV = () => {
        // Add logic for downloading CV
    };

    const handlePlayVideo = () => {
        // Add logic for playing video
    };

    return (
        <div className="container-fluid bg-light my-6 mt-0" id="home">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                        <h3 className="text-primary mb-3">I'm</h3>
                        <h1 className="display-3 mb-3">Kate Winslet</h1>
                        <h2 className="typed-text-output d-inline">{typedText}</h2>
                        <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                        <div className="d-flex align-items-center pt-5">
                            <button className="btn btn-primary py-3 px-4 me-5" onClick={handleDownloadCV}>Download CV</button>
                            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal" onClick={handlePlayVideo}>
                                <span></span>
                            </button>
                            <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src="assets/img/profile.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
