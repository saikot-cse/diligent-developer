import React from "react";

const Footer = () => {
  return (
    <footer className="font-small pt-4 bg-dark">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h2 className="text-uppercase text-warning mt-5">Diligent Developer</h2>
          </div>

          <hr className="w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase text-warning">Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none text-white" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#reviews">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase text-warning">Social Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-white text-decoration-none" href="https://www.facebook.com/saifullahmansursaikot" rel="noreferrer" target="_blank">Facebook</a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="https://www.instagram.com/saifullah_mansur_saikot/" rel="noreferrer" target="_blank">Instagram</a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="https://twitter.com/Saifull66148177" rel="noreferrer" target="_blank">Twitter</a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="https://github.com/saikot-cse" rel="noreferrer" target="_blank">Github</a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="https://www.linkedin.com/in/saifullah-mansur/" rel="noreferrer" target="_blank">Linkdin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-white text-center py-3">
        &copy; {new Date().getFullYear()} Copyright:
        <a className="text-warning text-decoration-none" href="#home"> Diligent Developer</a>
      </div>
    </footer>
  );
};

export default Footer;
