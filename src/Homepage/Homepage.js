import React from "react";
import "./Homepage.css";
import imgMe from "./../Assets/Images/me.png";
import imgMe2 from "./../Assets/Images/me2.png";
import square from "./../Assets/Images/square.png";

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
    </>
  );
}

export default Homepage;
