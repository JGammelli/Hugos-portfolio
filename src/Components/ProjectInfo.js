import React from "react";
import Projects from "./Projects";

const data = [
  {
    title: "Methuselah",
    mp4: require("../Img/methusela.mp4").default,
    img: {
      img1: require("../Img/methusela.jpg").default,
    },
    video: "https://www.youtube.com/embed/QPC3KViLUkI",
    href: (
      <>
        Itch.io:{" "}
        <a
          href="https://felltree-interactive.itch.io/methuselah"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Methuselah
        </a>
      </>
    ),
    information:
      "Methuselah is a project where 11 students at Högskolan i Skövde made a game within 10 weeks. The game was made as a part of a course named “Spelprojekt 2”. Methuselah is a 3D roguelike where you play as the main character who goes by the name of Methuselah. My position during the production of this game was project manager and game designer. I spent most of my time planning, helping all disciplines understand the vision for the project but also general game and level design. I learned to become a team player, cheerleader, and leader during this project. Although the game is flawed I am happy with the results we produced and the learning process I went through. ",
  },

  {
    title: "Shadow Bathing",
    img: {
      img1: require("../Img/shadow.png").default,
      img2: require("../Img/shadow2.png").default,
    },
    mp4: require("../Img/shadow.mp4").default,
    href: (
      <>
        Trailer:{" "}
        <a
          href="https://vimeo.com/403665999"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Shadow Bathing
        </a>
      </>
    ),
    information:
      "Shadow Bathing was my first ever game project that was a part of the course “Spelprojekt 1” during my first year at Högskolan i Skövde. This was a 12-week project where all different disciplines from the school came together to try and make a game. Shadow Bathing is a 2D platformer where you spend most of your time in the dark. You play as a spy infiltrating a secret organizations base and need to stay hidden to complete your mission. Guards and a light are searching for you so you need to be discrete. With the position as a game designer I encountered many problems under the course of the project, but with a lot of teamwork and good communication, we managed to solve most of them. The project ended up decent and I am proud of what we accomplished. As this was my first time working as a team on a game I learned how games are produced, what other disciplines work with, and how game engines function.",
  },
  {
    title: "Unknown",
    img: {
      img1: require("../Img/unknown.jpg").default,
      img2: require("../Img/unknown2.jpg").default,
      img3: require("../Img/unknown3.jpg").default,
    },
    href: (
      <>
        Steam:{" "}
        <a
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=2725002456"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Unknown
        </a>
      </>
    ),
    information:
      "Unknown is a custom map that I made for Call of Duty: Black Ops III or more specifically the zombies-mode in the same game. This was my first time trying the Radiant game engine and during the months it took making this map I improved a lot. Looking at the map with the knowledge I have now there are a few things I would alter but ultimately I believe it’s a good map to showcase where I started and the potential that I have. ",
  },
];

class ProjectInfo extends React.Component {
  render() {
    return data.map((project, index) => (
      <Projects
        key={index}
        title={project.title}
        information={project.information}
        file={project.file}
        image={project.image}
        link={project.link}
        href={project.href}
        other={project.other}
        video={project.video}
        mp4={project.mp4}
        img={project.img}
      />
    ));
  }
}

export default ProjectInfo;
