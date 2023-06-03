import './App.css';
import { NavBar } from './components/navabar/NavBar';
import { Home } from './components/hero/Home'
import SocialCards from './components/hero/SocialCards';
import { Seperate } from './components/Seperate';
import { Projects } from './components/projects/Projects';
import TimeLine from './components/TimeLine/TimeLine';
import Joke from './components/Joke/Joke';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App container main-div">
      <NavBar />
      <Seperate />
      <Home />
      <SocialCards />
      <Seperate />
      <Projects />
      <TimeLine />
      <Footer />
      <Joke />
    </div>
  );
}

export default App;
