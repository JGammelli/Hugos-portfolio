import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="aboutProfile">
        <div className="aboutBread">
          <div className="breadContainer">
            <div className="aboutName">
              <h2>About</h2>
              <h1>Hugo Davidsson</h1>
              <p>Game Designer</p>
            </div>
            <p>Hello, my name is Hugo Davidsson!</p>
            <p>
              Growing up I found a passion for video games at an early age. My
              big brother and I always used to play video games together whereas
              he usually beat me most of the time, but ever since those days, I
              have still had a passion for games in general. I want to share my
              excitement about games with others so they can experience the joy
              I felt growing up. My strengths are that I am a hard-working,
              ambitious, and positive person that likes to make any project
              always move forward. I am currently studying my last semester at
              Högskolan i Skövde where I have learned a lot about game design!
              At this time, I am looking for a place where I can learn the in
              and outs of the game industry, gain as much experience as possible
              and grow as a person.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
