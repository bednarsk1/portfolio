import "./styles.css";
import "./projectPages.css";

function GetFitWithPit() {
  return (
    <div className="mainContainer">
      <main>
        <h1 className="ppTitle">Get Fit With Pit</h1>
        <h2 className="ppSubTitle">Personal trainer website</h2>
        <div className="ppImgBox">
          <img src="\src\assets\gfwp-big.png" alt="" className="ppImg" />
        </div>
        <div className="ppBuildWith">Build and deployed with</div>
        <div className="ppLogoBox">
          <img src="\src\assets\html-icon.png" alt="" className="ppLogo" />
          <img src="\src\assets\css-icon.png" alt="" className="ppLogo" />
          <img
            src="\src\assets\javascript-programming-language-icon.png"
            alt=""
            className="ppLogo"
          />
          <img src="\src\assets\git-icon.png" alt="" className="ppLogo" />
          <img src="\src\assets\github-mark.png" alt="" className="ppLogo" />
          <img
            src="\src\assets\bootstrap-5-logo-icon.png"
            alt=""
            className="ppLogo"
          />
        </div>
        <p className="ppDiscription">
          My personal trainer website was built using HTML, CSS and JavaScript
          technologies, which ensures its attractive appearance and high
          functionality. HTML allows for a clear structure that makes it easy
          for users to navigate, presenting all relevant information about my
          services, training plans and testimonials. CSS is responsible for the
          aesthetics of the website, introducing stylish layouts, colors and
          typography that create a professional and motivating image. JavaScript
          adds interactivity by enabling dynamic content updates and responsive
          elements such as contact forms and class schedules that increase user
          engagement. The entire project was managed using the Git version
          control system, which allowed for effective tracking of changes, which
          in turn guarantees the high quality and reliability of the website.
        </p>
        <p className="ppDiscription ppBottom">
          My website not only promotes my coaching services, but also reflects
          my passion for modern technologies and attention to every detail,
          which translates into the satisfaction and trust of my clients.
        </p>
      </main>
    </div>
  );
}

export default GetFitWithPit;
