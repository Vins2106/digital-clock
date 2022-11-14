import Head from "next/head";
import { useState } from "react";
import css from "../styles/Default.module.scss";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const Index = () => {
  const [dark, setDark] = useState(true);
  const [curtime, setCurtime] = useState('Loading');

  setInterval(() => {
    setCurtime(formatAMPM(new Date))
  }, 1000)

  return (
    <div className={dark ? css.dark : css.light}>
      <Head>
        <title>Digital Clock</title>

        {/* Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={css.settings}>
        <ul>
          <li>
            <input
              type="checkbox"
              checked={dark}
              onClick={(e) => {
                setDark(e.currentTarget.checked);
              }}
            />
            <span>
                {dark ? "Switch to light" : "Switch to dark"}
            </span>
          </li>
        </ul>
      </div>

      <div className={css.clock}>
        <h1>{curtime}</h1>
      </div>
    </div>
  );
};

export default Index;
