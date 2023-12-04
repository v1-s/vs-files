import { Link } from "react-router-dom";

export default function UI() {
  return (
    <>
      <nav className="navbar-UI navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="navUI-item" id="ctrain">
              <Link className="navUI-link" to="/">
                Curriculum
              </Link>
            </li>
            <li className="navUI-item">
              <Link className="navUI-link" to="/">
                Course Details
              </Link>
            </li>

            <li className="navUI-item">
              <Link className="navUI-link" to="/">
                Certification
              </Link>
            </li>
            <li className="navUI-item">
              <Link className="navUI-link" to="/Review">
                Reviews
              </Link>
            </li>
            <li className="navUI-item">
              <Link className="navUI-link" to="/">
                Projects
              </Link>
            </li>
            <li className="navUI-item">
              <Link className="navUI-link" to="/">
                Features
              </Link>
            </li>
            <li className="navUI-item">
              <Link className="navUI-link" to="/">
                FAQ's
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* --------------------------------NAVBAR ENDS------------------------------------------ */}
      <h2 className="UI-title">UI Development Trianing In Banglore</h2>
      <hr className="UI-break"></hr>
      <p>
        With AchieversIT's UI development course in bangalore, you will be able
        to master the concepts such as CSS3, CSS, HTML, JavaScript, Bootstrap,
        HTML5, JQuery, Angular/ReactiS etc.We will give training on real time
        projects and this will improve your skills and experience. Complete your
        dream about working for top MNC Companies. Below are the benefits from
        top UI Development Training institute in Bangalore
      </p>
    </>
  );
}
