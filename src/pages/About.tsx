import { useEffect, useState } from "react";
import "./styles.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function About({ theme }: any) {
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
    <div className="mainContainer">
      <main>
        <div className="displayGridAbout">
          <div className="gridHomeItem1 gridAboutIt1">
            <p className="gridIt1Hello gridAboutHello">Hello! My name is</p>
            <span className="gradientName">Piotr Bednarski</span>
            <p className="gridIt1About gridAboutAbout">
              I'm a self-taught front-end developer with 5 months of experience
              <span className="basedInCracow"> based in Cracow</span>. If you're
              looking for a
              <span className="gridIt1Grad"> frontend developer </span>for a
              position or need someone to build a website, let's stay in touch
              and collaborate!
            </p>
            <p className="gridIt1About gridAboutAbout">
              I am a true lover of box and climbing especially bouldering. In addition,
              the gym is an integral part of my life, and as a personal trainer
              I am happy that I can share my passion and help others achieve
              their fitness goals.
            </p>
            <p className="gridIt1About gridAboutAbout">
              Also look at other technologies which I work with, maybe I will be
              able to offer more than just web technologies related to React
            </p>
            <div className="navGradient gridIt1Btn gridAboutContact">
              <a className="navA-Contact" href="#">
                <span className="navContact ">Contact</span>
              </a>
            </div>
          </div>
          <div
            className={`gridHomeItem2 ${
              theme === "light" ? "" : "dark"
            } mapAbout`}
          ></div>
          {/* where am I map */}
          <div className="gridHomeItem3 gridAboutItem3">
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
            <button onClick={prevSlide} className="slider-btn slider-btn-left">
              <GrFormPrevious />
            </button>
            <button onClick={nextSlide} className="slider-btn slider-btn-right">
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
          <div className="gridHomeItem6 spotifyAbout">
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
          <div className="gridAboutItem1 gridAboutIns">
            <div className="wrapper">
              <div className="item item2">
                <img src="src\assets\css-icon.png" alt="css" />
              </div>
              <div className="item item1">
                <img src="src\assets\html-icon.png" alt="html" />
              </div>
              <div className="item item3">
                <img src="src\assets\react-js-icon.png" alt="react" />
              </div>
              <div className="item item4">
                <img src="src\assets\c-sharp.png" alt="c#" />
              </div>
              <div className="item item5">
                <img
                  src="src\assets\typescript-programming-language-icon.png"
                  alt="ts"
                />
              </div>
              <div className="item item6">
                <img src="src\assets\Blazor.png" alt="blazor" />
              </div>
              <div className="item item7">
                <img src="src\assets\git-icon.png" alt="git" />
              </div>
              <div className="item item8">
                <img src="src\assets\bootstrap-5-logo-icon.png" alt="bs5" />
              </div>
            </div>
            {/* technologie w ktorych pisze na codzien (nie tylko webowe) */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
