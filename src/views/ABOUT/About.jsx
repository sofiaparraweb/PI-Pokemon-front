import React from 'react';
import './About.css';
import { NavBar } from '../../components/index';

const About = () => {
  return (
    <div className='About'>
      <aside className="profile-card">
        <header>
          <div className="avatar-container">
            <img src="https://static.vecteezy.com/system/resources/previews/011/675/380/original/female-avatar-images-png.png" className="imgAvatar" alt="Avatar" />
          </div>
          <h1>SOFIA PARRA</h1>
          <h2>Full Stack Developer</h2>
        </header>

        <div className="profile-bio">
          <p>
            I'm a 22-year-old woman from Tucuman, Argentina.
          </p>
          <p>
            I love giving tools to those who need them in the IT world
          </p>
        </div>

        <ul className="profile-social-links">
          <li>
            <a href="https://www.linkedin.com/in/sof%C3%ADa-parra-5a36b0205/" rel="noopener noreferrer" target="_blank">
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href='https://github.com/sofiaparraweb' rel="noopener noreferrer" target="_blank">
              <img
                src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                alt="GitHub"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/sofii.parra.792/" rel="noopener noreferrer" target="_blank">
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png'
                alt="Facebook"
              />
            </a>
          </li>
        </ul>
      </aside>
      <NavBar />
    </div>
  );
}

export default About;
