import React from "react";
import { Link } from "react-router-dom";
import Group6 from "../Group6";
import Group9 from "../Group9";
import Group10 from "../Group10";
import "./UpdatesResearch.css";

function UpdatesResearch(props) {
  const {
    path30,
    group49,
    group48,
    path31,
    spanText1,
    spanText2,
    path2,
    profile,
    subscriptions,
    community,
    updates,
    line10,
    line11,
    line12,
    line14,
    line17,
    line19,
    line20,
    group9Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="updates-research screen">
        <div className="overlap-group2-3">
          <div className="rectangle-32"></div>
          <Link to="/home">
            <img className="path-30" src={path30} />
          </Link>
          <div className="rectangle-35"></div>
          <div className="group-49" style={{ backgroundImage: `url(${group49})` }}>
            <div className="group-48" style={{ backgroundImage: `url(${group48})` }}></div>
          </div>
          <img className="path-31" src={path31} />
          <div className="rectangle-2-2"></div>
          <div className="onconnect-3 oswald-normal-cerulean-55px">
            <span className="oswald-normal-tangaroa-55px">{spanText1}</span>
            <span className="oswald-normal-cerulean-55px">{spanText2}</span>
          </div>
          <Group6 />
          <img className="path-2-2" src={path2} />
          <div className="profile-3 sourcesanspro-semi-bold-tangaroa-25px">{profile}</div>
          <Group9 src={group9Props.src} />
          <div className="subscriptions-4 sourcesanspro-semi-bold-tangaroa-25px">{subscriptions}</div>
          <div className="community-3 sourcesanspro-semi-bold-tangaroa-25px">{community}</div>
          <Group10 className={group10Props.className} />
          <div className="overlap-group1-3">
            <div className="updates-3 sourcesanspro-semi-bold-tangaroa-25px">{updates}</div>
            <div className="rectangle-31-3"></div>
          </div>
          <img className="line-1-2" src={line10} />
          <img className="line-11-2" src={line11} />
          <img className="line-1-2" src={line12} />
          <img className="line-14-2" src={line14} />
          <img className="line-17-2" src={line17} />
          <img className="line-19-2" src={line19} />
          <img className="line-20-2" src={line20} />
        </div>
      </div>
    </div>
  );
}

export default UpdatesResearch;
