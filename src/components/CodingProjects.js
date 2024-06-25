import * as React from 'react';
import pig from '../assets/images/pig side.png';
import externalLinkIcon from '../assets/images/externalLinkIcon.png';
import navIcon from '../assets/images/nacIcon.png';
import bandScramble from '../assets/images/bandScramble.png'
import soundCheck from '../assets/images/soundCheck.png'
import beyondTipping from '../assets/images/beyondTipping.png'

export const CodingProjects = () => {
  const projectsRef = React.useRef();

  const scrollRight = () => {
    console.log("Scrolling Right");
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: window.innerWidth * 0.48,
        behavior: "smooth"
      });
    }
  };

  const scrollLeft = () => {
    console.log("Scrolling Left");
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: -(window.innerWidth * 0.48),
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div className='projectCard animate__animated animate__fadeIn'>
        <img id='rightIcon' className='navIcon' src={navIcon} alt='navigation icon' onClick={scrollRight} />
        <img id='leftIcon' className='navIcon' src={navIcon} alt='navigation icon' onClick={scrollLeft} />
        <div id='allProjects' className='allProjects' ref={projectsRef}>
          <div className='projectDetails'>
            <img id='bandScramble' className='projectImage' src={bandScramble} alt='project image' />
            <h1>Band Scramble</h1>
            <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum libero ut finibus pellentesque. Nulla nec tristique metus. In viverra eros dolor. Sed vitae nisl ex. Proin ultrices magna et enim interdum volutpat. Nulla consequat urna sit amet pharetra iaculis. Sed vitae consequat sem.</p>
            <div className='projectLinks'>
              <div className='linkDiv'>
                <img src={externalLinkIcon} alt='external link icon' />
                <a href='https://bandscramble.netlify.app/'>LIVE SITE</a>
              </div>
              <div className='linkDiv'>
                <img src={externalLinkIcon} alt='external link icon' />
                <a href='https://github.com/NoahKise/Band-Scramble'>GITHUB REPO</a>
              </div>
            </div>
          </div>
          <div className='projectDetails'>
            <img className='projectImage' src={soundCheck} alt='project image' />
            <h1>SoundCheck</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum libero ut finibus pellentesque. Nulla nec tristique metus. In viverra eros dolor. Sed vitae nisl ex. Proin ultrices magna et enim interdum volutpat. Nulla consequat urna sit amet pharetra iaculis. Sed vitae consequat sem.</p>
            <div className='projectLinks'>
              <div className='linkDiv'>
                <img src={externalLinkIcon} alt='external link icon' />
                <a href='https://sound-check.netlify.app/'>LIVE SITE</a>
              </div>
              <div className='linkDiv'>
                <img src={externalLinkIcon} alt='external link icon' />
                <a href='https://github.com/NoahKise/soundcheck'>GITHUB REPO</a>
              </div>
            </div>
          </div>
          <div className='projectDetails'>
            <img className='projectImage' src={beyondTipping} alt='project image' />
            <h1>beyondtipping</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum libero ut finibus pellentesque. Nulla nec tristique metus. In viverra eros dolor. Sed vitae nisl ex. Proin ultrices magna et enim interdum volutpat. Nulla consequat urna sit amet pharetra iaculis. Sed vitae consequat sem.</p>
            <div className='projectLinks'>
              <div className='linkDiv'>
                <img src={externalLinkIcon} alt='external link icon' />
                <a href='https://beyondtipping.onrender.com/'>LIVE SITE</a>
              </div>
              <div className='linkDiv'>
                <img src={externalLinkIcon} alt='external link icon' />
                <a href='https://github.com/NoahKise/beyondtipping'>GITHUB REPO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingProjects;