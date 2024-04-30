import { useEffect, useState } from "react";
import "./styles.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Home() {
  const [imgIndex, setImgIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);

  interface Song {
    id: number;
    title: string;
    artist: string;
    cover: string;
  }

  const song: Song[] = [
    {
      id: 0,
      title: "Ridin",
      artist: "Yung Bans",
      cover: "src/assets/Ridin-YungBans.png",
    },
    {
      id: 1,
      title: "Relax, Take It Easy",
      artist: "MIKA",
      cover: "src/assets/Relax-MIKA.jpg",
    },
    {
      id: 2,
      title: "Because the Night",
      artist: "Bruce Springsteen",
      cover: "src/assets/becauseTheNight-BruceSpringsteen.jpg",
    },
    {
      id: 3,
      title: "A Sky Full of Stars",
      artist: "Coldplay",
      cover: "src/assets/ASkyFullOfStars-Coldplay.jpg",
    },
    {
      id: 4,
      title: "Wish I Knew You",
      artist: "The Revivalists",
      cover: "src/assets/WishIKnewYou-TheRevivalists.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update songIndex to rotate through songs array
      setSongIndex((prevIndex) => (prevIndex + 1) % song.length);
    }, 220000);

    return () => clearInterval(interval);
  }, [song.length]);

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
                  src="src\assets\ja22.png"
                  alt="ph1"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\ja11.jpg"
                  alt="ph2"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\like.png"
                  alt="ph3"
                  style={{ translate: `${-100 * imgIndex}%` }}
                />
                <img
                  className="gridIt3photo"
                  src="src\assets\me.png"
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
              <div className="gridIt4learningItem">
                <div className="gridIt4learningHeader">
                  <div className="gridIt4icon">
                    <img
                      className="gridIt4logo2 gI4moreIcons"
                      src="src\assets\html-icon.png"
                      alt="htmlIcon"
                    />
                    <img
                      className="gridIt4logo2"
                      src="src\assets\css-icon.png"
                      alt="htmlIcon"
                    />
                  </div>
                  <div className="gridIt4text">
                    HTML5 & CSS3 - Responsive and organized designs
                  </div>
                </div>
                <div className="learning-status">Completed</div>
              </div>
              <div className="gridIt4learningItem">
                <div className="gridIt4learningHeader">
                  <div className="gridIt4icon">
                    <img
                      className="gridIt4logo3 gI4moreIcons"
                      src="src\assets\bootstrap-5-logo-icon.png"
                      alt="htmlIcon"
                    />
                    <img
                      className="gridIt4logo"
                      src="src\assets\git-icon.png"
                      alt="htmlIcon"
                    />
                  </div>
                  <div className="gridIt4text">
                    Bootstrap & Git - Tools you need to know
                  </div>
                </div>
                <div className="learning-status">Completed</div>
              </div>
              <div className="gridIt4learningItem">
                <div className="gridIt4learningHeader">
                  <div className="gridIt4icon">
                    <img
                      className="gridIt4logo2 gI4moreIcons"
                      src="src\assets\javascript-programming-language-icon.png"
                      alt="htmlIcon"
                    />
                  </div>
                  <div className="gridIt4text">
                    JAVASCRIPT - Make pages interactive
                  </div>
                </div>
                <div className="learning-status">In progress.. 70%</div>
              </div>
              <div className="gridIt4learningItem gridIt4lastItem">
                <div className="gridIt4learningHeader">
                  <div className="gridIt4icon">
                    <img
                      className="gridIt4logo3 gI4moreIcons"
                      src="src\assets\react-js-icon.png"
                      alt="htmlIcon"
                    />
                    <img
                      className="gridIt4logo"
                      src="src\assets\typescript-programming-language-icon.png"
                      alt="htmlIcon"
                    />
                  </div>
                  <div className="gridIt4text">
                    React & TypeScript - Step into advanced technologies
                  </div>
                </div>
                <div className="learning-status">In progress.. 40%</div>
              </div>
            </div>
            <div className="gridHomeItem5">Gym & fitness</div>
            <div className="gridHomeItem6">
              <img
                className="gridIt6songImg"
                src={song[songIndex].cover}
                alt={`Cover for ${song[songIndex].title}`}
              />
              <div>
                <img
                  className="spotifyLogo"
                  src="src\assets\spotify-icon.png"
                  alt="spotifyLogo"
                />
                <div className="animation-container">
                  <div className="spotify-animation-1"></div>
                  <div className="spotify-animation-2"></div>
                  <div className="spotify-animation-3"></div>
                  <span className="gridIt6nP">Now Playing</span>
                </div>
                <p className="gridIt6title">{song[songIndex].title}</p>
                <p className="gridIt6artist">{song[songIndex].artist}</p>
              </div>
            </div>
            <div className="gridHomeItem7">future technologies</div>
            <div className="gridHomeItem8">project 1</div>
            <div className="gridHomeItem9">project 2</div>
            <div className="gridHomeItem10">GitHub</div>
            <div className="gridHomeItem11">LinkedIn</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
