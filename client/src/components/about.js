import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="container about-section">
      <h2>About Job Search Task Tracker</h2>
      <p>An exciting piece of Flatiron's Full-Stack Web Development Program is that it is a Job-Offer Guarantee Qualifying Program.
      This means that, after completion of the program, if you do not receive a Qualifying Job Offer within 6 months, you are eligible for a full refund.
      Read a detailed explanation about this guarantee<a target="_blank" rel="noopener noreferrer" href="https://learn.co/tos">here</a>.</p>

      <p>While this is an exciting offer, Flatiron grads are still responsible to engage in a rigorous job search.
      In order to remain eligible for the full tuition refund, you must meet all of the job search related requirements during the 180 day period of their job search.
      This includes: correspondences with prospective employers, networking with members of the programming community, weekly GitHub commits and blog posts, and more.
      </p>
      <p>
      This app was built for fellow students to track the progress of their job search.
      <Link to='/types'>Click here</Link> for a detailed explanation each of the job search related task types.</p>
      <p>Happy Hunting!!!
      </p>
      <img alt="" src='https://media.giphy.com/media/fQZX2aoRC1Tqw/giphy.gif' />

    </div>
  )

}

export default About;
