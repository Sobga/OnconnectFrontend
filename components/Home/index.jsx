import React from "react";
import { Link } from "react-router-dom";
import Group6 from "../Group6";
import Group9 from "../Group9";
import Group10 from "../Group10";
import "./Home.css";

function Home(props) {
  const {
    spanText1,
    spanText2,
    path64,
    profile,
    subscriptions1,
    community1,
    updates1,
    line21,
    line22,
    line23,
    line24,
    line25,
    line26,
    line27,
    group104,
    group108,
    spanText3,
    spanText4,
    helpingLungOncolog,
    schedule,
    updates2,
    subscriptions2,
    community2,
    group6Props,
    group9Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="overlap-group1-6">
          <div className="rectangle-139"></div>
          <div className="rectangle-140"></div>
          <Link to="/home">
          <div className="onconnect-5 oswald-normal-cerulean-55px">
            <span className="oswald-normal-tangaroa-55px">{spanText1}</span>
            <span className="oswald-normal-cerulean-55px">{spanText2}</span>
          </div>
          </Link>
          <Group6 className={group6Props.className} />
          <img className="path-64" src={path64} />
          <div className="profile-5 sourcesanspro-semi-bold-tangaroa-25px">{profile}</div>
          <Group9 src={group9Props.src} className={group9Props.className} />
          <Link to="/subscriptions">
          <div className="subscriptions-6 sourcesanspro-semi-bold-tangaroa-25px">{subscriptions1}</div>
          </Link>
          <div className="community-5 sourcesanspro-semi-bold-tangaroa-25px">{community1}</div>
          <Link to="/scheduling">
          <Group10 className={group10Props.className} />
          </Link>
          <div className="rectangle-141"></div>
          <div className="group-95">
            <Link to="/updates-frame">
            <div className="updates-5 sourcesanspro-semi-bold-tangaroa-25px">{updates1}</div>
            </Link>
          </div>
          <img className="line-2" src={line21} />
          <img className="line-22" src={line22} />
          <img className="line-2" src={line23} />
          <img className="line-24" src={line24} />
          <img className="line-25" src={line25} />
          <img className="line-26" src={line26} />
          <img className="line-27" src={line27} />
          <div className="group-104" style={{ backgroundImage: `url(${group104})` }}></div>
          <div className="group-108" style={{ backgroundImage: `url(${group108})` }}></div>
          <h1 className="title oswald-normal-cerulean-155px">
            <span className="span0-1">{spanText3}</span>
            <span className="oswald-normal-cerulean-155px">{spanText4}</span>
          </h1>
          <div className="helping-lung-oncolog">{helpingLungOncolog}</div>
          <Link to="/scheduling">
            <div className="rectangle-179"></div>
          </Link>
          <div className="schedule-6 sourcesanspro-semi-bold-white-35px">{schedule}</div>
          <Link to="/update-main">
            <div className="rectangle-180"></div>
          </Link>
          <div className="rectangle-181"></div>
          <div className="rectangle-182"></div>
          <Link to="/updates-frame">
          <div className="updates-6 sourcesanspro-semi-bold-white-35px">{updates2}</div>
          </Link>
          <Link to="/subscriptions">
            <div className="subscriptions-7 sourcesanspro-semi-bold-white-35px">{subscriptions2}</div>
          </Link>
          <div className="community-6 sourcesanspro-semi-bold-white-35px">{community2}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
