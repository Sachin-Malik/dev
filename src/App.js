import './App.css';
import React from 'react';

const Home = React.lazy(() => import('./components/hero/Home'));
const SocialCards = React.lazy(() => import('./components/hero/SocialCards'));
const Seperate = React.lazy(() => import('./components/Seperate'));
const Projects = React.lazy(() => import('./components/projects/Projects'));
const TimeLine = React.lazy(() => import('./components/TimeLine/TimeLine'));
const Joke = React.lazy(() => import('./components/Joke/Joke'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
const NavBar = React.lazy(() => import('./components/navabar/NavBar'));

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
