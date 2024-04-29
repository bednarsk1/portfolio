import { useState } from "react";
import "./styles.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Home() {
  const [imgIndex, setImgIndex] = useState(0);

  function nextSlide() {
    if (imgIndex >= 4) return setImgIndex(0);
    else setImgIndex(imgIndex + 1);
  }
  function prevSlide() {
    if (imgIndex <= 0) return setImgIndex(4);
    else setImgIndex(imgIndex - 1);
  }

  function dotImg0() {
    setImgIndex(0);
  }
  function dotImg1() {
    setImgIndex(1);
  }
  function dotImg2() {
    setImgIndex(2);
  }
  function dotImg3() {
    setImgIndex(3);
  }
  function dotImg4() {
    setImgIndex(4);
  }

  return (
    <>
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
                I'm a self-taught front-end developer with 3 months of
                experience. If you're looking for a
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
            <div className="gridHomeItem2"></div> {/* where am I map */}
            <div className="gridHomeItem3">
              <div className="gridIt3slider">
                <img
                  className="gridIt3photo"
                  src="src\assets\me.png"
                  alt="ph1"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\coding.png"
                  alt="ph2"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\smile.png"
                  alt="ph3"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\like.png"
                  alt="ph4"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\meWdog.png"
                  alt="ph4"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
              </div>
              <button
                onClick={prevSlide}
                className="slider-btn slider-btn-left"
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={nextSlide}
                className="slider-btn slider-btn-right"
              >
                <GrFormNext />
              </button>
              <div className="gridIt3dots">
                <button
                  onClick={dotImg0}
                  className={`gridIt3dot ${imgIndex === 0 ? "active" : ""}`}
                ></button>
                <button
                  onClick={dotImg1}
                  className={`gridIt3dot ${imgIndex === 1 ? "active" : ""}`}
                ></button>
                <button
                  onClick={dotImg2}
                  className={`gridIt3dot ${imgIndex === 2 ? "active" : ""}`}
                ></button>
                <button
                  onClick={dotImg3}
                  className={`gridIt3dot ${imgIndex === 3 ? "active" : ""}`}
                ></button>
                <button
                  onClick={dotImg4}
                  className={`gridIt3dot ${imgIndex === 4 ? "active" : ""}`}
                ></button>
              </div>
            </div>
            <div className="gridHomeItem4">
              <span className="gridIt4title">Learning Path</span>
            </div>
            <div className="gridHomeItem5">??</div>
            <div className="gridHomeItem6">6</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
