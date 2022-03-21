import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <section id="contactSection">
        <div className="contactWrap">
          <div className="contactBox">
            <p>Get in touch!</p>
            <h1>Contact:</h1>
          </div>
          <div className="contactInfo">
            <p>Email: hugo_davidsson@hotmail.com</p>
            <br />
            <p>Phone: (+46) 763 080 340</p>
            <br />
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/hugo-davidsson-9718031a2/">
                Hugo Davidsson
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
