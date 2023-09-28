import "./Skills.css";
import htmlimg from "./skillsImg/html5.png";
import jsimg from "./skillsImg/javascript.svg";
import cssimg from "./skillsImg/css.png";

const Skills = () => {
  return (
    <selection id="skills">
      <span className="skillsTitle"> What I do</span>
      <span className="skillsDesc">ssssssssssssssssssssssss
      sssssssssssssssss
      s
      ssssssss
      sssssssssss
      ssssssss
      ssssssssss
      ssssssss
      s
      ssssssssss{" "}
      </span>

      <div className="skillBars">
        <div className="skillbar">
          <img src={htmlimg} alt="" />
          <div className="skillBarText">
            <h2>HTML</h2>
            <p>dfgsdf  drgse degsd drg dsfgeg rfgsdf</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={cssimg} alt="" />
          <div className="skillBarText">
            <h2>CSS</h2>
            <p>cshjksdhf ksehfkhs sldjv msldf, sdof ,sdfls f,sd`</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={jsimg} alt="" />
          <div className="skillBarText">
            <h2>javascript</h2>
            <p>sssssssg dffgdfsdf sdfsdfsd dfsdsdfsd sedfsdf sed</p>
          </div>
        </div>
      </div>
    </selection>
  );
};
export default Skills;
