import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <a className="footer-link" href={`https://twitter.com/home`}><img className="footer-icon" src="./images/twitter.png" alt="Twitter Link" /></a>
            <a className="footer-link"  href={`https://www.facebook.com/`}><img className="footer-icon" src="./images/facebook.png" alt="Facebook Link" /></a>
            <a className="footer-link"  href={`https://www.instagram.com`}><img className="footer-icon" src="./images/instagram-logo-white.png" alt="Instagram Link" /></a>
            <a className="footer-link"  href={`https://www.github.com`}><img className="footer-icon" src="./images/github-logo-white.png" alt="Github Link" /></a>
        </div>
    )
}