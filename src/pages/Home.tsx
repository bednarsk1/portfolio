import { useEffect, useState } from "react";
import "./styles.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

function Home({ theme }: any) {
  const [imgIndex, setImgIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [yearIndex, setYearIndex] = useState(4);

  function pressed1() {
    setYearIndex(1);
  }
  function pressed2() {
    setYearIndex(2);
  }
  function pressed3() {
    setYearIndex(3);
  }
  function pressed4() {
    setYearIndex(4);
  }

  interface Song {
    id: number;
    title: string;
    artist: string;
    cover: string;
  }

  const song: Song[] = [
    {
      id: 0,
      title: "Relax, Take It Easy",
      artist: "MIKA",
      cover: "src/assets/Relax-MIKA.jpg",
    },
    {
      id: 1,
      title: "Ridin",
      artist: "Yung Bans",
      cover: "src/assets/Ridin-YungBans.png",
    },
    {
      id: 2,
      title: "A Sky Full of Stars",
      artist: "Coldplay",
      cover: "src/assets/ASkyFullOfStars-Coldplay.jpg",
    },
    {
      id: 3,
      title: "Because the Night",
      artist: "Bruce Springsteen",
      cover: "src/assets/becauseTheNight-BruceSpringsteen.jpg",
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
    }, 200000);

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
                I'm a self-taught front-end developer with 5 months of
                experience
                <span className="basedInCracow"> based in Cracow</span>. If
                you're looking for a
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
            <div
              className={`gridHomeItem2 ${theme === "light" ? "" : "dark"}`}
            ></div>
            {/* where am I map */}
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
                  src="src\assets\ja8.jpg"
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
            <div className="gridHomeItem5">
              <div className="gridIt5title">Gym & Keeping Fit</div>
              <div>
                <div className="gridIt5txt">
                  For the last <strong>three years</strong>, I have been going
                  to the <strong>gym</strong> regularly and even work as a
                  <strong> personal trainer</strong>. <br />
                  <br />
                  <p>
                    Since childhood, I have been <strong>passionate </strong>
                    about sports such as climbing, boxing and swimming.
                  </p>
                </div>
                <div className="gridIt5plateCover">
                  <img
                    className="gridIt5plate"
                    src="src\assets\blue plate.png"
                    alt="plate"
                  />
                </div>
              </div>
            </div>
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
            <div className="gridHomeItem7">
              <span className="gridIt7title">
                Technologies for learning in the future
              </span>
              <div className="gridIt7imgs">
                <p>
                  After learning React, I want to delve into backend
                  technologies, for example Node.js, Express, MongoDB or Python
                </p>
                <div className="iconContainer">
                  <img
                    className="gridIt7img"
                    src="src\assets\node-js-icon.png"
                    alt=""
                  />
                  <img
                    className="gridIt7img2"
                    src="src\assets\mongodb-icon.png"
                    alt=""
                  />
                  <img
                    className="gridIt7img"
                    src="src\assets\python-programming-language-icon.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="gridHomeItem8">
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
                  <a
                    target="blank"
                    href="https://bednarsk1.github.io/GetFitWithPit/"
                  >
                    <button className="projectGridButton1">View project</button>
                  </a>
                  <button className="projectGridButton2">
                    <Link
                      to="/projects/getfitwithpit"
                      className="textDecorNone"
                    >
                      About project
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="gridHomeItem9 ">
              <div>
                <div className="projectGridSubHeading">PROJECT</div>
                <div className="projectGridHeading">My Portfolio</div>
                <div className="projectGridSubHeading">Built with</div>
                <div className="projectGridIcons">
                  <img
                    className="projectGridIcon1"
                    src="src\assets\react-js-icon.png"
                    alt=""
                  />
                  <img
                    className="projectGridIcon1"
                    src="src\assets\typescript-programming-language-icon.png"
                    alt=""
                  />
                  <img
                    className="projectGridIcon1"
                    src="src\assets\css-icon.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="projectGridImg"
                    src="src\assets\portfolioo.png"
                    alt=""
                  />
                </div>
                <div className="projectGridButtons">
                  <button className="projectGridButton1">View project</button>
                  <button className="projectGridButton2">
                    <Link to="/projects/portfolio" className="textDecorNone">
                      About project
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="gridHomeItem12">
              <div className="gridItTitleBox">
                <div className="gridIt12">My sports results over the years</div>
                <div className="gridIt12navDiv0">
                  <div className="gridIt12navDiv">
                    <ul>
                      <li
                        className={`gridIt12liItem ${
                          yearIndex === 1 ? "active" : ""
                        }`}
                        onClick={pressed1}
                      >
                        21
                      </li>
                      <li
                        className={`gridIt12liItem ${
                          yearIndex === 2 ? "active" : ""
                        }`}
                        onClick={pressed2}
                      >
                        22
                      </li>
                      <li
                        className={`gridIt12liItem ${
                          yearIndex === 3 ? "active" : ""
                        }`}
                        onClick={pressed3}
                      >
                        23
                      </li>
                      <li
                        className={`gridIt12liItem ${
                          yearIndex === 4 ? "active" : ""
                        }`}
                        onClick={pressed4}
                      >
                        2024
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                {yearIndex === 4 ? (
                  <>
                    <div className="gridItBOX1">
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">bench press</div>
                        <div className="gridItActivity">125 kg</div>
                      </div>
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">dead lift</div>
                        <div className="gridItActivity">170 kg</div>
                      </div>
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">barbell squat</div>
                        <div className="gridItActivity">130 kg</div>
                      </div>
                    </div>
                    <div className="gridItBOX1">
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">
                          times at the gym
                        </div>
                        <div className="gridItActivity">44</div>
                      </div>
                      <div className="gridItBOX4">
                        <div className="gridItActivityTitle">time</div>
                        <div className="gridItActivity">61:27:33</div>
                      </div>
                      <div className="gridItBOXlast">
                        <div className="gridItActivityTitle">achievement</div>
                        <div className="gridItActivity">first clients</div>
                      </div>
                    </div>
                  </>
                ) : yearIndex === 3 ? (
                  <>
                    <div className="gridItBOX1">
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">bench press</div>
                        <div className="gridItActivity">115 kg</div>
                      </div>
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">dead lift</div>
                        <div className="gridItActivity">160 kg</div>
                      </div>
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">barbell squat</div>
                        <div className="gridItActivity">110 kg</div>
                      </div>
                    </div>
                    <div className="gridItBOX1">
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">
                          times at the gym
                        </div>
                        <div className="gridItActivity">157</div>
                      </div>
                      <div className="gridItBOX5">
                        <div className="gridItActivityTitle">time</div>
                        <div className="gridItActivity">232:36:28</div>
                      </div>
                      <div className="gridItBOXlast">
                        <div className="gridItActivityTitle">achievement</div>
                        <div className="gridItActivity">trainer cert.</div>
                      </div>
                    </div>
                  </>
                ) : yearIndex === 2 ? (
                  <>
                    <div className="gridItBOX1">
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">bench press</div>
                        <div className="gridItActivity">95 kg</div>
                      </div>
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">dead lift</div>
                        <div className="gridItActivity">120 kg</div>
                      </div>
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">barbell squat</div>
                        <div className="gridItActivity">90 kg</div>
                      </div>
                    </div>
                    <div className="gridItBOX1">
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">
                          times at the gym
                        </div>
                        <div className="gridItActivity">124</div>
                      </div>
                      <div className="gridItBOX5">
                        <div className="gridItActivityTitle">time</div>
                        <div className="gridItActivity">205:84:21</div>
                      </div>
                      <div className="gridItBOXlast">
                        <div className="gridItActivityTitle">achievement</div>
                        <div className="gridItActivity">---</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="gridItBOX1">
                      <div className="gridItBOX2">
                        <div className="gridItActivityTitle">bench press</div>
                        <div className="gridItActivity">70 kg</div>
                      </div>
                      <div className="gridItBOX6">
                        <div className="gridItActivityTitle">dead lift</div>
                        <div className="gridItActivity">90 kg</div>
                      </div>
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">barbell squat</div>
                        <div className="gridItActivity">80 kg</div>
                      </div>
                    </div>
                    <div className="gridItBOX1">
                      <div className="gridItBOX3">
                        <div className="gridItActivityTitle">
                          times at the gym
                        </div>
                        <div className="gridItActivity">48</div>
                      </div>
                      <div className="gridItBOX4">
                        <div className="gridItActivityTitle">time</div>
                        <div className="gridItActivity">61:34:58</div>
                      </div>
                      <div className="gridItBOXlast">
                        <div className="gridItActivityTitle">achievement</div>
                        <div className="gridItActivity">start of gym</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="gridHomeItem10">
              <a target="blank" href="https://github.com/bednarsk1">
                <div className="gridLinks">
                  <img
                    className="social-media-logo"
                    src="src\assets\github1.png"
                    alt="git1"
                  />
                </div>
              </a>
            </div>
            <div className="gridHomeItem11">
              <a target="blank" href="#">
                <div className="gridLinks">
                  <img
                    className="social-media-logo"
                    src="src\assets\linkedin-app-white-icon.jpg"
                    alt="link1"
                  />
                </div>
              </a>
            </div>
            <div className="gridHomeItem13">
              <img
                className="social-media-logo"
                src="src\assets\instagram-white-icon.png"
                alt="link1"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
