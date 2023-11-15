import React from 'react'
import './intro.css'
import bg from '../../assets/image2.jpg'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Manuroop</span><br />React Developer</span>
            <p className="introPara">I am a skilled website developer and programmer <br/> with experience in creating apps on JS and Python.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Me" className="bg" />
    </section>
  )
}

export default Intro