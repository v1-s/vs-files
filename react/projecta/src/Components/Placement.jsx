import { Link } from "react-router-dom";
function Placements() {
  return (
    <>
      <div className="banner lg">
        <h1>PLACEMENTS</h1>
        <Link id="place" to='/'>Home</Link>
      </div>
      <div className="placeContent lg">
        <h1>Job Support at AcheiversIT</h1>
        <p>
          Our IT On-Job Support mission is to up skill the beginners in IT with
          the ability to solve their Real-time complex project requirements. We
          at AchieversIT, assist and render job support services in more than
          50+ IT Courses.<br></br>
          If you are one of those, struggling to survive in the
          job due to lack of technical abilities or those got a new project and
          stressed about the work assigned then write to us. We put forward our
          best skilled IT consultant, to guide you in achieving the best result
          in your work and furnish your deliverables.
        </p>
      </div>
    </>
  );
}
export default Placements;
