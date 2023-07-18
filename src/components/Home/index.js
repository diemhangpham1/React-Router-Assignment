import React from 'react';
import { DiGithubAlt } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoDeviantart } from 'react-icons/bi';

function Home() {
  return (
    <>
      <div className='maincontent'>
        <div className='maincontent-box'>
          <img className='avatar' src="/ava.jpg" alt="Hang Pham" />
        </div>
        <div className='maincontent-box'>
          <div>
            <h2>Hi, I'm <span>Hang Pham </span>&#129305;</h2>
            <h3>I'm a Graphic Designer </h3>
          </div>
          <ul>
            <li><h4>&#127865; fueled by bobatea</h4></li>
            <li><h4>&#127857; passion for cooking</h4></li>
            <li><h4>&#128035; nap all day, procrastinate all night</h4></li>
            <li><h4>&#128231; dpham32@myseneca.ca</h4></li>
          </ul>
          <ul className='icon-nav'>
            <li><a href="#"><DiGithubAlt /></a></li>
            <li><a href="#"><AiFillLinkedin /></a></li>
            <li><a href="#"><BiLogoDeviantart /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
