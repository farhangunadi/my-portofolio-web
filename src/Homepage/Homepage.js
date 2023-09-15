import React from "react";
import "./Homepage.css";
import imgMe from "./../Assets/Images/farhan_halfbody_nobg.png";
import imgMe2 from "./../Assets/Images/potrait_me.jpeg";
import design from "./../Assets/Images/design.png";
import camera from "./../Assets/Images/camera.png";
import code from "./../Assets/Images/code.png";
import imgMe3 from "./../Assets/Images/me3.png";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas, PerspectiveCamera } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "../Homepage/Model";
import * as THREE from "three";

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="grid-content">
          <div className="content">
            <h3 className="t1">Hello, I'm</h3>
            <h2 className="t2">Farhan Gunadi</h2>
            <hr />
            <p className="desc">
              Fresh graduate computer science student that interest to learning
              and working in data analyst, UI/UX design, web developer, and
              product researcher.
            </p>
            <div className="button-wrap">
              <button className="btn">Let's Talk</button>
            </div>
          </div>
          <div className="img-wrap">
            <img src={imgMe} alt="" />
            {/* <Canvas camera={{ near: 0.5 }}>
              <Suspense fallback={null}>
                <Model />
                <Environment preset="sunset" />
              </Suspense>
            </Canvas> */}
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
      <div className="get-in-touch">
        <h1 className="title">GET IN TOUCH</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi a
          egestas quam eros.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Facilisi a egestas quam eros.
        </p>
        <div className="grid-get-in-touch">
          <div className="img-wrap-getInTouch">
            <img src={imgMe3} alt="" />
          </div>
          <form action="">
            <input placeholder="Title" type="text" className="title-input" />
            <textarea
              placeholder="Message..."
              name="message"
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <div className="btn-message-wrap">
              <button className="btn-message">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
