import { useEffect, useState } from "react";
import "./styles.css";

function Gym() {
  const [yearIndex, setYearIndex] = useState(4);
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

  return (
    <div className="mainContainer">
      <main>
        <div className="displayGridGym">
          <div className="gridHomeItem5 gymGridItem1">
            <div className="gridIt5title">Gym & Keeping Fit</div>
            <div>
              <div className="gridIt5txt">
                For the last <strong>three years</strong>, I have been going to
                the <strong>gym</strong> regularly and even work as a
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
          <div className="gridHomeItem12 gymGridItem2">
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
          <div className="gridHomeItem6 gymGridItem3">
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
          <div className="gymGridItem6">
            <p>I train boxing</p> with great determination every day. This
            <b> dedication</b> has led me to start running to <b> improve</b> my
            fitness and results. Each session motivates me to enhance my skills
            and <b> push my limits</b>.
          </div>
          <div className="gymGridItem5">
            <img
              src="src\assets\gloves.png"
              alt="gloves"
              className="gymGloves"
            />
          </div>
          {/* <div className="gridHomeItem13 gymGridItem4">
            <img
              className="social-media-logo"
              src="src\assets\instagram-white-icon.png"
              alt="link1"
            />
          </div> */}
          <div className="gymGridItem9">
            <p>I love trying new things </p>and constantly seek out new sports
            hobbies to explore. This passion for discovery keeps me active and
            engaged, always looking for the next exciting challenge.
          </div>
          <div className="gymGridItem7">
            <img src="src\assets\bag.png" alt="schoes" className="gymBag" />
          </div>
          <div className="gymGridItem8">
            <img
              src="src\assets\boxingSchoes.png"
              alt="schoes"
              className="gymGloves"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gym;
