import "./styles.css";

function Projects() {
  return (
    <div className="mainContainer">
      <main>
        <div className="displayGridProjects">
          <div className="gridHomeItem8 gridProjectsIt1">
            <div>
              <div className="projectGridSubHeading">PROJECT</div>
              <div className="projectGridHeading">Get fit with Pit</div>
              <div className="projectGridSubHeading">Built with</div>
              <div className="projectGridIcons">
                <img
                  className="projectGridIcon1"
                  src="src\assets\html-icon.png"
                  alt=""
                />
                <img
                  className="projectGridIcon1"
                  src="src\assets\css-icon.png"
                  alt=""
                />
                <img
                  className="projectGridIcon1"
                  src="src\assets\javascript-programming-language-icon.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="projectGridImg"
                  src="src\assets\GFWP1.png"
                  alt=""
                />
              </div>
              <div className="projectGridButtons">
                <button className="projectGridButton1">View project</button>
                <button className="projectGridButton2">About project</button>
              </div>
            </div>
          </div>
          <div className="gridHomeItem9 gridProjectsIt2">
            <div>
              <div className="projectGridSubHeading">PROJECT</div>
              <div className="projectGridHeading">Project Name</div>
              <div className="projectGridSubHeading">Built with</div>
              <div className="projectGridIcons">
                <img
                  className="projectGridIcon1"
                  src="src\assets\react-js-icon.png"
                  alt=""
                />
                <img
                  className="projectGridIcon1"
                  src="src\assets\html-icon.png"
                  alt=""
                />
                <img
                  className="projectGridIcon1"
                  src="src\assets\node-js-icon.png"
                  alt=""
                />
                <img
                  className="projectGridIcon1"
                  src="src\assets\typescript-programming-language-icon.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="projectGridImg"
                  src="src\assets\white.jpg"
                  alt=""
                />
              </div>
              <div className="projectGridButtons">
                <button className="projectGridButton1">View project</button>
                <button className="projectGridButton2">About project</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
