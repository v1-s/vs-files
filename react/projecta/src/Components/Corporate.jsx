import { Link } from "react-router-dom";
export default function Corporate() {
  return (
    <>
      <div className="banner pad-xs-20">
      <div className="container pad-xs-0 text-xs-center">
      <div className="col-md-12">
        <h1>IT ON-JOB SUPPORT</h1>
        </div>
        <div className="col-md-12 inner-breadcrumb">
        <Link className="cosub" to='/'>Home</Link>
        </div>
      </div>
      </div>
      <div className="innerContent">
        <h2>CORPORATE TRAINING</h2>
        <div className="hr"></div>
        <p >
          Looking for a live instructor Led Online training platform to train
          your employees and connect them with best professional trainers, and
          enrich their careers?
        </p>
        <div class="container text-center">
          <div class="row pad-sm-0 pad-xs-0 text-center">
            <div class="training col-md-6">
                <h4>Proven Online Training Platform</h4>
                <hr style={{ width: "280px", marginLeft: "45px" }}></hr>
                <p>
                  AchieversIt has built up a robust Live Instructor-Led internet
                  preparing stage that permits learners to get prepared by the
                  Expert coaches and through self-guided preparing programs.
                  AchieversiT incorporates learning conditions combining
                  traditional learning the board with the social association and
                  cooperative abilities to construct a branded and corporate
                  learning arrangement that guides and expands commitment.
                </p>
            </div>
            <div class=" trend col-md-6">
              <h4>Trending Courses</h4>
              <hr style={{ width: "280px", marginLeft: "45px" }}></hr>
              <p>
                Our E-learning Management system (LMS) comprises of a few
                courses identified with the most recent progressions in
                Information Technology and Software, for example, Business
                Intelligence and Analytics, DevOps, Cloud Integration, Cloud
                Computing, Internet of Things, BigData and Analytics, Continuous
                Integration, Release Management and our highly qualified
                trainers created excellent course contents.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
