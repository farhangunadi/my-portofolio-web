import React from "react";
import "./Homepage.css";
import imgMe from "./../Assets/Images/me.png";
import imgMe2 from "./../Assets/Images/me2.png";
import square from "./../Assets/Images/square.png";
import design from "./../Assets/Images/design.png";
import camera from "./../Assets/Images/camera.png";
import code from "./../Assets/Images/code.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="grid-content">
          <div className="content">
            <h3 className="t1">I'm</h3>
            <h2 className="t2">Farhan Gunadi</h2>
            <hr />
            <p className="desc">
              Effective Student committed to learning, developing skills in
              design also web app developer and team contribution. Self-directed
              and energetic with superior performance in both autonomous or
              collaborative environments working independently and collaborating
              with others on group projects.
            </p>
            <div className="button-wrap">
              <button className="btn">See my Project</button>
            </div>
          </div>
          <div className="img-wrap">
            <img src={imgMe} alt="" />
          </div>
        </div>
      </div>
      <div className="container-about">
        <div className="grid-about">
          <div className="aboutContent">
            <p className="titleAbout">ABOUT ME</p>
            <p className="desc-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              unde laboriosam ipsam architecto? Porro, quia sed ea quis corporis
              unde delectus repellendus dolores? Itaque assumenda quos sed
              dolores deleniti cupiditate.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi unde laboriosam ipsam architecto?
              Porro, quia sed ea quis corporis unde delectus repellendus
              dolores? Itaque assumenda quos sed dolores deleniti cupiditate.
            </p>
          </div>
          <div className="img-wrap-2">
            <div className="wrap">
              <img src={imgMe2} alt="" className="me" />
            </div>
          </div>
        </div>
      </div>
      <div className="interest">
        <h2 className="title-interest">INTERESTS</h2>
        <div className="grid-interest">
          <div className="item">
            <div className="item-icon">
              <img src={design} alt="" />
            </div>
            <h3 className="title-item">DESIGN</h3>
            <p className="desc-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="item">
            <div className="item-icon">
              <img src={code} alt="" />
            </div>
            <h3 className="title-item">FRONTEND DEV</h3>
            <p className="desc-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="item">
            <div className="item-icon">
              <img className="camera-icon" src={camera} alt="" />
            </div>
            <h3 className="title-item">PHOTOGRAPHY</h3>
            <p className="desc-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h1>WHAT I'VE BEEN UP TO</h1>
        <div className="grid-project">
          <div className="card-project">
            <h2 className="title-project">VIDEO PROJECT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/" className="link-btn">
              <div className="btn-project-wrap">
                <button className="btn-project">See Project</button>
              </div>
            </Link>
          </div>
          <div className="card-project">
            <h2 className="title-project">UI/UX PROJECT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/" className="link-btn">
              <div className="btn-project-wrap">
                <button className="btn-project">See Project</button>
              </div>
            </Link>
          </div>
          <div className="card-project">
            <h2 className="title-project">APP PROJECT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/" className="link-btn">
              <div className="btn-project-wrap">
                <button className="btn-project">See Project</button>
              </div>{" "}
            </Link>
          </div>
          <div className="card-project">
            <h2 className="title-project">PHOTOGRAPHY PROJECT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/" className="link-btn">
              <div className="btn-project-wrap">
                <button className="btn-project">See Project</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
