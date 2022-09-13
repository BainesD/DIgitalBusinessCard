import React from "react";
import "../index.css";
import headshot from "../images/HeadshotFormal.jpg"
import About from "./About"
import Interests from "./Interests.js";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

export default function Container()
{
    return(
        <>
        <div className="container">
            <div>
            <img className="headshot" src={headshot}/>
            </div>
            <Contact/>
            <About/>
            <Interests/>
            <SocialMedia/>
        </div>
        </>
    )
}