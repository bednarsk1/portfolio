import "./styles.css";

function Home() {
  return (
    <div className="mainContainer">
      <main>
        <div className="displayGrid">
          <div className="gridHomeItem1">
            <img
              className="gridIt1Img"
              src="src\assets\coder.png"
              alt="photo1"
            />
            <p className="gridIt1Hello">Hello! My name is</p>
            <span className="gradientName">Piotr Bednarski</span>
            <p className="gridIt1About">
              I'm a self-taught front-end developer with 3 months of experience.
              If you're looking for a
              <span className="gridIt1Grad"> frontend developer </span>for a
              position or need someone to build a website, let's stay in touch
              and collaborate!
            </p>
            <div className="navGradient gridIt1Btn">
              <a className="navA-Contact" href="#">
                <span className="navContact">Contact</span>
              </a>
            </div>
          </div>
          <div className="gridHomeItem2">map</div>
          <div className="gridHomeItem3">photo carousel</div>
          <div className="gridHomeItem4">dwasdfsadfsdf</div>
          <div className="gridHomeItem5">5</div>
          <div className="gridHomeItem6">6</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
