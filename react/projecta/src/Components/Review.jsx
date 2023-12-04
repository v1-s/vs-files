import { Link } from "react-router-dom";
import goo from "./Assests/google.png";
import fb from "./Assests/fb.png";
import linkedin from "./Assests/linkedin.png";
import img1 from "./Assests/review1.png";
import img2 from "./Assests/review2.png";
export default function Review() {
  return (
    <>
      <div className="Review-banner pad-xs-20">
        <div className="container pad-xs-0 text-md-center">
          <div className="col-md-12">
            <h1>REVIEWS</h1>
          </div>
          <div className="col-md-12 inner-breadcrumb">
            <Link className="review" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------------------banner starts------------------------------------------ */}
      <div className="container text-center">
        <div className="row">
          <div className="col-md-9 col-12 col-sm-12">
            <div className="rev-card">
              <div className="row">
                <div className="col-md-2 col-12">
                  <img
                    src={img1}
                    alt="Review Image1"
                    style={{
                      width: "90px",
                      marginLeft: "40px",
                      marginTop: "25px",
                    }}
                  />
                </div>
                <div className="col-md-10 col-12">
                  <h5 className="re-title text-xs-center">Ajay Reddy</h5>
                  <p className="re-caption text-xs-center">
                    Posted On - <span style={{color:"black"}}>3 days ago</span>
                  </p>
                  
                  <div className="break"></div>
                  <h5 className="re-content">
                    "I had completed UI Development course from AchieversIT
                    Training institute in BTM and my experience with AchieversIT
                    was very good. All my Senior advisors and mentors was
                    supportive, kindness, and shared all knowledge. It would had
                    been impossible without there guidence to achieve my goal.
                    Thanking to AchieversIT Training Institution for helpful,
                    supportive, friendly. I have secure good knowledge and
                    behaviour from all my Faculty and thier Support throughout
                    my course."
                  </h5>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rev-card2">
              <div className="row">
                <div className="col-md-2 col-12">
                  <img
                    src={img2}
                    alt="Review Image1"
                    style={{
                      width: "90px",
                      marginLeft: "40px",
                      marginTop: "25px",
                    }}
                  />
                </div>
                <div className="col-md-10 col-12">
                  <h5 className="re-title text-xs-center">Vani</h5>
                  <p className="re-caption text-xs-center">
                    Posted On - <span style={{color:"black"}}>2 days ago</span>
                  </p>
                  <div className="break"></div>
                  <h5 className="re-content">
                    "AchieversIT is the best academy for SEO and social media. I
                    have just completed a 2 month advance course in SEO and
                    Social Media that was amazing experience. All the teachers
                    and staff very nice and polite. They provide me a lot of
                    facilities. Their fee is also affordable for anyone. So if
                    you are looking for an institution for Digital Marketing to
                    get quality service, i would recommend AchieversIT.
                    Faculties are realtime experts and staff are very friendly.
                    If you have any issue you can clear it with any trainer
                    without any hesitation. Also if you have completed your
                    course and you have any query or any doubt, you can come and
                    attend the class as many as times. That's the best thing i
                    liked in AchieversIT."
                  </h5>
                </div>
              </div>
            </div>
          </div>
      <div className="re-card col-md-3 mt-5">
        <ul className="list-group border-n">
          <li className="list-group-item">
            <img
              src={goo}
              alt="Google"
              style={{ width: "50px", height: "50px" }}
            />
            <span className="cut p-2">4.9</span>/<span className="all">5</span>
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
            <span className="cut p-2">9.4</span>/<span className="all">10</span>
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
            <span className="cut p-2">4.0</span>/<span className="all">5</span>
            <h5 className="text-center p-2 mb-0 d-sm-inline-block">
              <small>400+ Linkedin Reviews</small>
            </h5>
          </li>
        </ul>
    </div>
        </div>
      </div>
      {/* --------------------------------End of banner-------------------------------------------------- */}
      
    </>
  );
}
