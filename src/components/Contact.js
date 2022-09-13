import React from "react";
import "../index.css"
import externalLink from "../images/external-link-16.png"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"


export default function Contact(){
return(
    <>
    <div className="contact-info">
        <h1 className="name">Baines A Deal</h1>
        <h3 className="title">Full-Stack Software Developer</h3>
        <a className="website-link" href="https://bainesdealportfolio.netlify.app/" target="_blank">Portfolio Website <img className="link-icon" src={externalLink} alt="external link icon - click here"/></a>
        <div>
            <br/>
            <a href="mailto: bainesdeal@gmail.com"><button className="btn-email"><img className="email-icon" src={email}/>Email</button></a>
            <a href="https://www.linkedin.com/in/baines-deal/" target="_blank"><button  className="btn-linkedin"><img className="icon-linkedin" src={linkedin} />LinkedIn</button></a>
        </div>
    </div>
    </>
)
}