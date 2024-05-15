import { useEffect, useState } from "react";
import "./styles.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Media() {
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
        <div className="displayGridMedia">
          <div className="gridHomeItem10 gridMediaGitHub">
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
          <div className="gridHomeItem11 gridMediaLinkedIn">
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
          <div className="gridHomeItem6 gridMediaSpotify">
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
          <div className="gridHomeItem3 gridMediaSlider">
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
          <div className="gridMediaItem1">instagram</div>
        </div>
      </main>
    </div>
  );
}

export default Media;
