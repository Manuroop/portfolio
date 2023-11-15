import React, {useRef} from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oplvro4', 'template_daprfa6', form.current, '-4y8Wc23DqRgSEn5p')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert('Email Sent!')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
            <div className="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <span className="clientDesc">I had the opprtunity to work with many great people</span>
                <p>
                    <div className="clientImgs">
                        <img src={Walmart} alt="" className='clientImg' />
                        <img src={Adobe} alt="" className='clientImg' />
                        <img src={Microsoft} alt="" className='clientImg' />
                        <img src={Facebook} alt="" className='clientImg' />
                    </div>
                </p>
            </div>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={InstagramIcon} alt="" className="link" />
                        <img src={FacebookIcon} alt="" className="link" />
                        <img src={YoutubeIcon} alt="" className="link" />
                        <img src={TwitterIcon} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact