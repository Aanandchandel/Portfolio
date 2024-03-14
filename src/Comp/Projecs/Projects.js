import "./Projects.css";

import cal from "./cal.png";
import e_comm from "./e-comm.png"
const data = [
  {
    img: cal,
    name: "Calculator",
    durl: "https://aanandchandel.github.io/Calculator/",
    cdurl: "https://github.com/Aanandchandel/Calculator.git",
  },
  {
    img: e_comm,
    name: "E-com Web using MERN",
    durl: "https://github.com/Aanandchandel/web_mern",
    cdurl: "https://github.com/Aanandchandel/web_mern",
  }
];



const Project = (props) => {
  return (
    <div id="project">
      <div>
        <a href={props.data.durl} target="_blank" rel="noreferrer">
          <img className="proimg" src={props.data.img} alt="projectimg" />
        </a>
      </div>
      <div className="prodetail" >
        <h1 className="proname" >{props.data.name}</h1>
        <a className="play" href={props.data.durl}>
          Play
        </a>
      </div>
      <a className="projectcode" href={props.data.cdurl}>
        View code
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      {data.map((item) => {
        return <Project data={item} />;
      })}
    </div>
  );
};

export default Projects;
