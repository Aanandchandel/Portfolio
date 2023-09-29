import "./About.css";
const About = () => {
  return (
    <section id="aboutMe">
      <h1 className="aboutMeTitle">About Me</h1>
      <span className="aboutMeDesc">
        To work with maximum potential in a challenging and dynamic environment,
        <br /> with an opportunity of working with diverse group of people and
        enhancing <br />
        my professional skills with learning and experience for career growth.
      </span>
      <div className="aboutinfo">

        
             <ul className="aboutInfo1">
                <li> <i class="fa fa-chevron-right" aria-hidden="true"></i> Name:Aanand Chandel</li>
                <li> <i class="fa fa-chevron-right" aria-hidden="true"></i> City:Indore </li>
                <li><i class="fa fa-chevron-right" aria-hidden="true"></i> Freelance:Available </li>

             </ul>
        

             <ul className="aboutInfo2">
                <li> <i class="fa fa-chevron-right" aria-hidden="true"></i> Contact:+917247226533</li>
                <li> <i class="fa fa-chevron-right" aria-hidden="true"></i> Whatsapp:+917247226533</li>
                <li><i class="fa fa-chevron-right" aria-hidden="true"></i> Email:aanandchandel20@gmail.com</li>

             </ul>
      
      
      </div>
    </section>
  );
};
export default About;
