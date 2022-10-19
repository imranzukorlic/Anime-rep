import "./About.css";
// import Tarikimg from "../../img/Tarik.png";
// import Farisimg from "../../img/Faris.png";
// import Ademimg from "../../img/Adem.png";
// import Amirimg from "../../img/Amir.png";

function About() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://avatars.githubusercontent.com/u/100434307?v=4"
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Imran Zukorlic</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Lorem, ipsum dolor. Lorem, ipsum dolor.
          </span>
          <ul className="uList">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
