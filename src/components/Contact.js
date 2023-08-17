import cinemaSearch from '../assets/images/cinema-search-screenshot.png';
import bdsm from '../assets/images/screenshot.jpg';
import homez from '../assets/images/homez.jpg';


export default function Portfolio() {
    return (
        <>
        <div className="myPortfolio">
            <h2>My Portfolio</h2>
            <h3><strong>B</strong>urgers <strong>D</strong>elivered <strong>B</strong>y <strong>S</strong>pace <strong>M</strong>onkeys (<strong>BDSM</strong>)</h3>
            <img src={bdsm} alt="BDSM" className="projectImg" />
            <p>
                <a href="https://polar-cove-07937.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
            </p>
            <p>
                <a href="https://github.com/dustinii/BDSM.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
            </p>
            <br />

            <h3>HOMEZ</h3>
            <img src={homez} alt="HOMEZ" className="projectImg" />
            <p>
                <a href="https://homez-a7bb0a2adb47.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
            </p>
            <p>
                <a href="https://github.com/dustinii/HOMEZ.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
            </p>
            <br />

            <h3>Cinema Search</h3>
            <img src={cinemaSearch} alt="Cinema Search" className="projectImg" />
            <p>
                <a href="https://pk50sshowa.github.io/cinema-search/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
            </p>
            <p>
                <a href="https://github.com/pk50sshowa/cinema-search.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
            </p>
        </div>
        </>
    );
}