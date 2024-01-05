import headshot from '../assets/images/Screen Shot 2024-01-05 at 9.47.02 AM.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="animate__animated animate__fadeInDown" id='header'>
      <div id='nameAndLinks'>
        <Link to="/">
          <h1 id='name'>N<span id='eye'>o</span>AH KISE</h1>
        </Link>
        <div id='links'>
          <div className='linkWithText'>
            <Link to="/projects" className='icon'>
              <KeyboardIcon />
              <p>CODE</p>
            </Link>
          </div>
          <div className='linkWithText'>
            <Link to="/music" className='icon'>
              <LibraryMusicIcon />
              <p>MUSIC</p>
            </Link>
          </div>
          <a href='https://www.linkedin.com/in/noahkise/' className='icon'>
            <LinkedInIcon />
          </a>
          <a href='https://github.com/NoahKise' className='icon'>
            <GitHubIcon />
          </a>
          <Link to="/contact" className='icon'>
            <ContactMailIcon />
          </Link>
        </div>
      </div>
      <Link to="/">
        <img id='headshot' src={headshot} alt='head shot' />
      </Link>
    </div >
  )
}