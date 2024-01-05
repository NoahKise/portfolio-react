import '../App.css';
import 'animate.css';
import { Header } from './Header';

function App() {

  return (
    <>
      <Header />
      <div className="animate__animated animate__backInUp">
        <hr className='line'></hr>
        <p id='aboutMe'>I'm a junior web developer and musician based in Portland, Oregon. Ready to apply my foundation of soft skills, multitasking, and quick thinking to a new career in tech. Seeking a junior developer role that encourages continued growth to widen the breadth of my experience.
        </p>
        <hr className='line'></hr>
      </div>
    </>
  );
}

export default App;
