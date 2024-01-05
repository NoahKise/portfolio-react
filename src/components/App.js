import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css';
import headshot from '../assets/images/Screen Shot 2024-01-05 at 9.47.02 AM.png'

function App() {
  return (
    <>
      <div id='header'>
        <div id='nameAndLinks'>
          <h1 id='name'>NoAH KISE</h1>
          <div id='links'>
            <div className='linkWithText'>
              <a href='https://gumtooth.bandcamp.com/album/your-still-life' className='icon'>
                <LibraryMusicIcon />
                <p>MUSIC</p>
              </a>
            </div>
            <div className='linkWithText'>
              <a href='' className='icon'>
                <KeyboardIcon />
                <p>CODE</p>
              </a>
            </div>
            <a href='https://www.linkedin.com/in/noahkise/' className='icon'>
              <LinkedInIcon />
            </a>
            <a href='https://github.com/NoahKise' className='icon'>
              <GitHubIcon />
            </a>
            <a href='' className='icon'>
              <EmailIcon />
            </a>
          </div>
        </div>
        <img id='headshot' src={headshot} alt='head shot' />
      </div >
      <hr className='line'></hr>
      <p id='aboutMe'>Service industry professional stepping out from behind the bar into the dynamic world of web development.
        Ready to apply a strong foundation of soft skills, multitasking, and quick thinking to a new career in tech.
        Seeking a junior developer role that fosters continued growth to widen the breadth of my skills.</p>
      <hr className='line'></hr>
    </>
  );
}

export default App;
