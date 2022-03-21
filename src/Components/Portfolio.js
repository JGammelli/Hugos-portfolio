import React from "react";
import ProjectInfo from "./ProjectInfo";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="profileSection">
        <div className="portfolieName">
          <h1>Portfolio</h1>
          <p>Game Designer</p>
          <p>Hugo Davidsson</p>
        </div>
        <div id="portfolieSection">
          <ProjectInfo />
        </div>
      </section>
    );
  }
}

export default Portfolio;
