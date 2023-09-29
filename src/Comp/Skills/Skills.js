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
            <p>used for describing the presentation and formatting of web documents</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={jsimg}className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>javascript</h2>
            <p> used for adding interactivity and functionality to web pages in web development</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={mysqlimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>MySql</h2>
            <p>allows you to store, manage, and retrieve structured data</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={reactimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>React is an open-source JavaScript library for building user interfaces,</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={nodeimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>Node</h2>
            <p>Node.js is a JavaScript runtime environment</p>
          </div>
        </div><div className="skillbar">
          <img src={expressimg} className='skillBarImg' alt="" />
          <div className="skillBarText">
            <h2>Express</h2>
            <p>Express.js is a minimal and flexible Node.js web application framework</p>
          </div>
        </div>






      </div>
    </selection>
  );
};
export default Skills;
