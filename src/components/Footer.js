import './style.css';
import { VscGithubInverted } from 'react-icons/vsc';

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <h4>Made by Joceliyn Valdez <VscGithubInverted /> </h4>
            <div className="footerLinks">
                <p>
                    <a href="www.linkedin.com/in/joceliyn-valdez-65827827b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:jocevaldez98@gmail.com">Gmail</a>
                    <a href="https://github.com/jovaldez98" target="_blank" rel="noopener noreferrer">Github</a>
                </p>
            </div>
        </footer>
        </>
    )
}