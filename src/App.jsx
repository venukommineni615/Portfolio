
import './App.css'
import Navbar from "./components/Navbar.jsx"
import MainSection from './components/MainSection.jsx';
import Projects from './components/projects.jsx';
import SocialMedia from "./components/SocialMedia.jsx"

export default function App(){
  return (
    <>
      <Navbar/>
      <MainSection/>
      <Projects/>
      <SocialMedia/>
    </>
   
  );
}
