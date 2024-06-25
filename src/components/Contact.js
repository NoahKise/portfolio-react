import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contact = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <hr className='line'></hr>
      <div id='contactRows'>
        <div className='contactRow'>
          <EmailIcon className='contactIcon' />
          <p>noah@kisefamily.com</p>
        </div>
        <div className='contactRow'>
          <a href='https://www.instagram.com/gumtoothnoah/'>
            <InstagramIcon className='contactIcon' />
            <p>gumtoothnoah</p>
          </a>
        </div>
      </div>
      <hr className='line'></hr>
    </div>
  )
}