import React from "react"

export default function Intro() {
    return (
        <div className="intro">
            <img className="my-photo" src="./images/kari_small.png" alt='kari cheslock' />
            <h2>Kari Cheslock</h2>
            <h3>Web Developer</h3>
            <small><a className="personal-link" href={`https://www.karicheslock.com/`}>www.karicheslock.com</a></small>
            <small><a className="personal-link" href={`https://www.github.com/karicheslock`}>https://www.github.com/karicheslock</a></small>
            <div className="intro-buttons">
                <button className="email-button"><a className="intro-link" href={`mailto:karicheslock1@gmail.com`}>📧 Email</a></button>
                <button className="linkedin-button"><img className="linkedin-icon" src="./images/linkedin_icon.png" alt="LinkedIn Logo" /><a className="intro-link" href={`https://www.linkedin.com/in/karicheslock/`}>LinkedIn</a></button>
            </div>
        </div>
    )
}