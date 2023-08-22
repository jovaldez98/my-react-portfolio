import joceImage from "../assets/images/joceimage.JPG";
import "./style.css";

export default function About() {
    return (
        <>
        <h4 className="aboutMe">About Joceliyn</h4>
        <img src={joceImage} alt="Joceliyn Valdez" className="joceImage" />

        <p className="aboutMeParagraph">
        Joceliyn is a full stack web developer with a unique background. She started her
        career in the Psychology field. After receiving her Bacherlor's degree in Psychology, she worked 
        with children with Autism as a Behavior Therapist for a year. It was a very fulfilling job, but she
        wanted to do more. After making connections with other people in the tech field, she became
        interested in the world of coding. Joceliyn decided to take a leap of faith she never thought she 
        would take and enorolled at the UCLA Extension Full Stack Web Development Bootcamp.
       </p>

       <p className="aboutMeParagraph2">
        Joceliyn is a very hard worker and is always looking for ways to improve herself.
        She is a very fast learner and is always up for a challenge, explaining her zero background
        in coding before enrolling in the bootcamp and now being able to create full stack applications.
        Joceliyn is very excited to start her career in the tech field and is looking forward to 
        learning more and adapting to the ever changing world of technology.
       </p>
        </>
    );
}