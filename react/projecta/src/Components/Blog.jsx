import { Link } from "react-router-dom";
import async from "./Assests/async-await.png";
import blog2 from "./Assests/blog2.png";
import bAngular from "./Assests/bAngular.jpg";
import bbanglore from "./Assests/bbangalore.jpg";
import breactjs from "./Assests/breactjs.png";
import breact from "./Assests/breact-native.png";

export default function Blog() {
  return (
    <>
      <div className="Blog-banner pad-xs-20">
        <div className="container pad-xs-0 text-md-center">
          <div className="col-md-12">
            <h1>BLOG</h1>
          </div>
          <div className="col-md-12 inner-breadcrumb">
            <Link className="blog" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    <div className="container">
    <div className="row">
      <div className="col-md-9 col-sm-7 col-xs-12 no-padding">
            <h2  className="btitle p-2">UI DEVELOPMENT</h2>
        <div className="col-md-6 col-12 p-1">
            <div className="card-row d-flex justify-content-between">
                <div className="cardtile1">
                    <img src={async} alt="Async" style={{ width: "100px", height: "120px" }}/>
                    <div className="card-body">
                        <h5 className="card-title">Promises And Async-Await in Javascript</h5>
                        <p className="card-text">By Admin | August 03, 2022</p>
                    </div>
                </div>
                <div className="cardtile2">
                    <img src={blog2} alt="Front" style={{ width: "100px", height: "120px",margin:"10px" }}/>
                    <div className="card-body">
                        <h5 className="card-title">How to become a FrontEnd Developer in 2022 </h5>
                        <p className="card-text">By Admin | November 06, 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-9 col-sm-7 col-xs-12 no-padding">
            <h2 className="btitle p-2">REACTJS DEVELOPMENT</h2>
        <div className="col-md-6 col-12 p-1">
            <div className="card-row d-flex justify-content-between">
                <div className="cardtile1">
                <img src={breactjs} alt="ReactJS" style={{width: "100px", height: "120px"}}/>
            <div className="card-body">
                        <h5 className="card-title">React Js Development Trianing </h5>
                        <p className="card-text">By Admin | August 03, 2022</p>
                    </div>
            </div>
            <div className="cardtile2">
                    <img src={breact} alt="React-Native" style={{ width: "100px", height: "120px",margin:"10px" }}/>
                    <div className="card-body">
                        <h5 className="card-title">What is React-Native? Pros & Cons of React-Native. </h5>
                        <p className="card-text">By Admin | November 06, 2022</p>
                    </div>

        </div>
            </div>
                </div>
                    </div>
{/* -------------------- */}
<div className="col-md-9 col-sm-7 col-xs-12 no-padding">
            <h2 className="btitle p-2">ANGULAR DEVELOPMENT</h2>
        <div className="col-md-6 col-12 p-1">
            <div className="card-row d-flex justify-content-between">
                <div className="cardtile1">
                <img src={bAngular} alt="ReactJS" style={{width: "130px", height: "130px"}}/>
            <div className="card-body">
                        <h5 className="card-title">Angular Development Trianing </h5>
                        <p className="card-text">By Admin | August 03, 2022</p>
                    </div>
            </div>
            <div className="cardtile2">
                    <img src={bbanglore} alt="bangular" style={{ width: "130px", height: "130px",margin:"10px" }}/>
                    <div className="card-body">
                        <h5 className="card-title">Pros & Cons of Angular. </h5>
                        <p className="card-text">By Admin | November 06, 2022</p>
                    </div>

        </div>
            </div>
                </div>
                    </div>


        
   
   
   
   
   
    </div>
        </div>
            </div>

    </>
  );
}
