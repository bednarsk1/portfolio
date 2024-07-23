import "./styles.css";
import "./projectPages.css";

function Portfolio() {
  return (
    <div className="mainContainer">
      <main>
        <h1 className="ppTitle">My Personal Webside</h1>
        <h2 className="ppSubTitle">Piotr Bednarski's portfolio</h2>
        <div className="ppImgBox">
          <img src="\src\assets\portfoliobig.png" alt="" className="ppImg" />
        </div>
        <div className="ppBuildWith">Build and deployed with</div>
        <div className="ppLogoBox">
          <img src="\src\assets\react-js-icon.png" alt="" className="ppLogo" />
          <img
            src="\src\assets\typescript-programming-language-icon.png"
            alt=""
            className="ppLogo"
          />
          <img src="\src\assets\css-icon.png" alt="" className="ppLogo" />
          <img src="\src\assets\git-icon.png" alt="" className="ppLogo" />
          <img src="\src\assets\figma-icon.png" alt="" className="ppLogo" />
        </div>
        <p className="ppDiscription">
          My portfolio website was built using advanced technologies such as
          React, TypeScript, CSS, and Figma, which allow for a modern and
          interactive experience for visitors. React, with its component-based
          architecture, enables dynamic and fast content updates, making the
          website extremely responsive. TypeScript adds static typing to
          JavaScript, increasing code reliability and maintainability. CSS
          provides an attractive look to the site, introducing consistent and
          stylish layouts and animations that catch the eye. The graphic design
          was created in Figma, allowing for precise planning of the user
          interface and effective collaboration on the site's appearance.
          Additionally, using the Git version control system enabled efficient
          project management, change tracking and ensuring high quality and
          stability of the application.
        </p>
        <p className="ppDiscription ppBottom">
          My portfolio not only showcases my skills and projects but also
          demonstrates my proficiency in modern technologies and attention to
          detail, reflecting my professionalism and dedication in every project
          I undertake.
        </p>
      </main>
    </div>
  );
}

export default Portfolio;
