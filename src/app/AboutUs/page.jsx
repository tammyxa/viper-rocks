import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-content">
        <h2>Welcome to Our Story</h2>
        <p>
          At Viper Rocks, we are passionate about exploring the wonders of the universe.
          Our mission is to bring the excitement of space exploration to everyone.
        </p>
      
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="Team Member 1" />
          <p>
            Member Of The Team
            <br />
            Their Role
          </p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Team Member 2" />
          <p>
            Member Of The Team
            <br />
            Their Role
          </p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Curiosity</li>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Education</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
