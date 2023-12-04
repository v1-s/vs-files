import { Link } from "react-router-dom";
import goo from "./Assests/google.png";
import fb from "./Assests/fb.png";
import linkedin from "./Assests/linkedin.png";
export default function Intern() {
  return (
    <>
      <div className="Intern-banner pad-xs-20">
        <div className="container pad-xs-0 text-md-center">
          <div className="col-md-12">
            <h1>Internship</h1>
          </div>
          <div className="col-md-12 inner-breadcrumb">
            <Link className="intern" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>

      <button className="register">INTERNSHIP REGISTRATION</button>

  <div className="container p-xs-0 text-md-center">
    <div className="row">
        <div className="col-md-9 mt-2">
            <h1 className="internship" style={{ color: "orangered" }}>
              Internship At AchieversIT
            </h1>
            <p className="internPara font-xs-15 text-xs-center">
              Internships can help you gain valuable work experience, fulfill a
              college requirement and give you material to add to your resume.
              They can introduce you to many aspects of full-time employment
              while allowing you to explore your interests and form your
              personal career goals.<br></br>
              Our IT Internsship Programs is to provides the industry experience
              to the beginners as well as non-technical students so that they
              must be prepared enough to perform better and gain the good jobs
              in their career.
            </p>

            <h1 className="wtinter" style={{ color: "orangered" }}>
              What do we Promise?
            </h1>
            <p style={{ marginLeft: "45px", textAlign: "left" }}>
              We are here to better solve your work-related complications.
              <ul className="list">
                <li>
                  {" "}
                  Our services are reliable and affordable that meets client
                  needs.
                </li>
                <li>
                  Our consultants are real-time professionals with abundant
                  experience in the IT industry on various skills.
                </li>
                <li>
                  {" "}
                  They provide complete exposure of your job-related issues.
                </li>
                <li>
                  We impart knowledge and skills in a practical way and make
                  resource understand the technology workflow.
                </li>
                <li>
                  {" "}
                  Our real-time expert’s guidelines help you handle critical
                  situations at the job.
                </li>
                <li>
                  Our consultants guide you to solve the particular task within
                  a given amount of time. We offer students effective tools to
                  achieve success.
                </li>
              </ul>
            </p>
          </div>
       <div className="intern-card col-md-3 mt-4">
            <ul className="list-group border-n">
              <li className="list-group-item">
                <img
                  src={goo}
                  alt="Google"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="cut p-2">4.9</span>/
                <span className="all">5</span>
                <h5 className="text-center p-2 mb-0 d-sm-inline-block">
                  <small>1280+ Google Reviews</small>
                </h5>
              </li>
              <li className="list-group-item">
                <img
                  src={fb}
                  alt="Facebook"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="cut p-2">9.4</span>/
                <span className="all">10</span>
                <h5 className="text-center p-2 mb-0 d-sm-inline-block">
                  <small>500+ Facebook Reviews</small>
                </h5>
              </li>
              <li className="list-group-item">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="cut p-2">4.0</span>/
                <span className="all">5</span>
                <h5 className="text-center p-2 mb-0 d-sm-inline-block">
                  <small>400+ Linkedin Reviews</small>
                </h5>
              </li>
            </ul>
        </div>
    </div>
  </div>
    </>
  );
}
// //
//  CSS
// .orange-text {
//   color: orangered;
// }

// // JSX
// const reviews = [
//   { src: goo, alt: "Google", score: "4.9", total: "5", text: "1280+ Google Reviews" },
//   { src: fb, alt: "Facebook", score: "9.4", total: "10", text: "500+ Facebook Reviews" },
//   { src: linkedin, alt: "Linkedin", score: "4.0", total: "5", text: "400+ Linkedin Reviews" },
// ];

// <div className=" card col-md-3 m-LR-10 col-12 col-sm-12">
//   <ul className="list-group border-n">
//     {reviews.map((review, index) => (
//       <li key={index} className="list-group-item">
//         <img src={review.src} alt={review.alt} style={{ width: "50px", height: "50px" }} />
//         <span className="cut p-2">{review.score}</span>/<span className="all">{review.total}</span>
//         <h5 className="text-center p-2 mb-0 d-sm-inline-block">
//           <small>{review.text}</small>
//         </h5>
//       </li>
//     ))}
//   </ul>
// </div>

//
