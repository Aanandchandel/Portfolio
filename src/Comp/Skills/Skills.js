import "./Skills.css";
import htmlimg from "./skillsImg/html5.png";
import jsimg from "./skillsImg/javascript.svg";
import cssimg from "./skillsImg/css.png";
import mysqlimg from "./skillsImg/mysql.jpg";
import reactimg from "./skillsImg/react.svg";
import expressimg from "./skillsImg/express.jpg";
import nodeimg from "./skillsImg/Node.svg";


const Skills = () => {
  return (
    <selection id="skills">
      <span className="skillsTitle"> My Skills</span>
      <span className="skillsDesc">I Do All Kind Of Stuff
      </span>

      <div className="skillBars">
        <div className="skillbar">
          <img src={htmlimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>HTML</h2>
            <p>HTML is the standeard markup language for creating WebApp</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={cssimg}className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>CSS</h2>
            <p>cshjksdhf ksehfkhs sldjv msldf, sdof ,sdfls f,sd`</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={jsimg}className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>javascript</h2>
            <p>sssssssg dffgdfsdf sdfsdfsd dfsdsdfsd sedfsdf sed</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={mysqlimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>MySql</h2>
            <p>dfgsdf  drgse degsd drg dsfgeg rfgsdf</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={reactimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>dfgsdf  drgse degsd drg dsfgeg rfgsdf</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={nodeimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>Node</h2>
            <p>dfgsdf  drgse degsd drg dsfgeg rfgsdf</p>
          </div>
        </div><div className="skillbar">
          <img src={expressimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>Express</h2>
            <p>dfgsdf  drgse degsd drg dsfgeg rfgsdf</p>
          </div>
        </div>






      </div>
    </selection>
  );
};
export default Skills;
