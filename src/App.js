import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home'
import SocialCards from './components/SocialCards';
import { Seperate } from './components/Seperate';
import {Projects} from './components/Projects';
import TimeLine from './components/TimeLine';
import Joke from './components/Joke/Joke';
import Footer from './components/Footer';

const projectSectionInfo = {
  sectionInfoHeader:'My Work',
  sectionInfoContent:`Projects I'm most proud of`
}

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
