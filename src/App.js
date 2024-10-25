import React from 'react';
import { Link } from 'react-scroll';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Info from './components/Info';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="aboutme" smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="info" smooth={true} duration={500}>Info</Link></li>
                </ul>
            </nav>
            <div id="home"><Home /></div>
            <div id="aboutme"><AboutMe /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="info"><Info /></div>
        </div>
    );
}

export default App;
