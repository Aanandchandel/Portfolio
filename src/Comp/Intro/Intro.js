// import {Link} from 'react-scroll'
import {Link} from "react-router-dom"
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
            <Link 
            // to="/https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=aanandchandel20@gmail.com"
             >
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=aanandchandel20@gmail.com" >

                <button className='btn' > <img src={imgbtn} alt=""  className='imgbtn'/> Hire Me</button>
                </a>
                </Link>

        </div>
        {/* <img src={bg} alt="bg" className='bg' /> */}

        </section>)

}
export default Intro