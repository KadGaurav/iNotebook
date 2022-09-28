import { faCss3, faGit, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';

const About = () => {

    const[letterClass , setLetterClass] = useState('text-animate');

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    } ,[]) 

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["A", "b", "o", "u", "t", " ", "m", "e"]} idx={15} />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, father of a beautiful daughter, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGit} color="black" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="green " />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;