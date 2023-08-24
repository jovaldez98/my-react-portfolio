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
                <p className="aboutProject">
                    Welcome to "Burgers Delivered by Space Monkeys" (BDSM)!
                    This is a whimsical and interactive  <br />
                    web application that
                    allows users to order delicious burgers delivered by our adorable space monkey couriers. <br />
                    Click <a href="https://polar-cove-07937.herokuapp.com/" target="_blank" rel="noopener noreferrer">here for the deployed project</a>  and  <a href="https://github.com/dustinii/BDSM.git" target="_blank" rel="noopener noreferrer">here for the Github Repository</a>.
                </p>
                <br />

                <h3>HOMEZ</h3>
                <img src={homez} alt="HOMEZ" className="projectImg2" />
                < p className="aboutProject2">
                    HOMEZ is a web application that you need in case you need <br />
                    someone to drive you and your car home after a night out. <br />
                    Click <a href="https://homez-a7bb0a2adb47.herokuapp.com/" target="_blank" rel="noopener noreferrer">here for the deployed project</a>  and <a href="https://github.com/dustinii/HOMEZ.git" target="_blank" rel="noopener noreferrer">here for the Github Repository</a>.
                </p>
                <br />

                <h3>Cinema Search</h3>
                <img src={cinemaSearch} alt="Cinema Search" className="projectImg3" />
                <p className="aboutProject3">
                    A webpage where users can see what the latest movies are in theaters and what theaters are nearby. <br />
                    Click <a href="https://pk50sshowa.github.io/cinema-search/" target="_blank" rel="noopener noreferrer">here for the deployed project</a> and <a href="https://github.com/pk50sshowa/cinema-search.git" target="_blank" rel="noopener noreferrer">for the Github Repository</a>.
                </p>
                <br />
            </div>
        </>
    );
}