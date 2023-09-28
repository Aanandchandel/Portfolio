import {Link} from 'react-scroll'
import './intro.css';
import bg from './bg.avif'
import imgbtn from './hireme.png';

const Intro=()=>{
    return(<section id='intro' className="intro">
        <img src={bg} alt="bg" className='bg' />
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'am <span  className='introName'>Anand</span> <br /> 
            Web Developer</span> 
            <p className="introPera"> I am a software engineer Graduate with the passion of coding</p>
            <Link><button className='btn' > <img src={imgbtn} alt=""  className='imgbtn'/> Hire Me</button></Link>

        </div>
        {/* <img src={bg} alt="bg" className='bg' /> */}

        </section>)

}
export default Intro