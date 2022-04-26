import React from "react";
import { Link } from "react-router-dom";
import Group6 from "../Group6";
import Group9 from "../Group9";
import Group10 from "../Group10";
import "./UpdateMain.css";

function UpdateMain(props) {
  const {
    path67,
    updateSortBy,
    path68,
    spanText1,
    spanText2,
    spanText3,
    line35,
    line36,
    line37,
    line38,
    line39,
    line40,
    line41,
    line42,
    line43,
    line44,
    line45,
    line46,
    line47,
    line48,
    line49,
    line50,
    line51,
    path69,
    path71,
    path73,
    path75,
    path77,
    path79,
    path81,
    path83,
    path85,
    path87,
    path89,
    path91,
    path93,
    path95,
    path97,
    path99,
    path70,
    path72,
    path74,
    path76,
    path78,
    path80,
    path82,
    path84,
    path86,
    path88,
    path90,
    path92,
    path94,
    path96,
    path98,
    path100,
    spanText4,
    spanText5,
    path101,
    profile,
    subscriptions,
    community,
    updates,
    line52,
    line53,
    line54,
    line55,
    line56,
    line57,
    line58,
    group9Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="update-main screen">
        <div className="overlap-group2-1">
          <div className="layer-1">
            <Link to="/home">
              <img className="path-67" src={path67} />
            </Link>
            <div className="overlap-group-7">
              <div className="rectangle-201"></div>
              <div className="rectangle-202"></div>
              <div className="update-sort-by">{updateSortBy}</div>
              <img className="path-68" src={path68} />
              <div className="update-31-03-2022up sourcesanspro-bold-tangaroa-25px">
                <span className="sourcesanspro-bold-tangaroa-25px">{spanText1}</span>
                <span className="sourcesanspro-normal-tangaroa-25px">{spanText2}</span>
                <span className="sourcesanspro-semi-bold-tangaroa-25px">{spanText3}</span>
              </div>
              <img className="line-35" src={line35} />
              <img className="line-36" src={line36} />
              <img className="line-37" src={line37} />
              <img className="line-38" src={line38} />
              <img className="line-39" src={line39} />
              <img className="line-40" src={line40} />
              <img className="line-41" src={line41} />
              <img className="line-42" src={line42} />
              <img className="line-43" src={line43} />
              <img className="line-44" src={line44} />
              <img className="line-45" src={line45} />
              <img className="line-46" src={line46} />
              <img className="line-47" src={line47} />
              <img className="line-48" src={line48} />
              <img className="line-49" src={line49} />
              <img className="line-50" src={line50} />
              <img className="line-51" src={line51} />
            </div>
          </div>
          <div className="layer-2">
            <div className="flex-row">
              <div className="flex-col">
                <div className="rectangle-203 border-2px-cerulean"></div>
                <div className="rectangle-204"></div>
                <div className="rectangle-205"></div>
                <div className="rectangle-20"></div>
                <div className="rectangle-207"></div>
                <div className="rectangle-20"></div>
                <div className="rectangle-209"></div>
                <div className="rectangle-21"></div>
                <div className="rectangle-21-1"></div>
                <div className="rectangle-21-2"></div>
                <div className="rectangle-213"></div>
                <div className="rectangle-21-2"></div>
                <div className="rectangle-215"></div>
                <div className="rectangle-21"></div>
                <div className="rectangle-21-1"></div>
                <div className="rectangle-21-2"></div>
              </div>
              <div className="path-container">
                <img className="path-69" src={path69} />
                <img className="path-71" src={path71} />
                <img className="path-73" src={path73} />
                <img className="path-7" src={path75} />
                <img className="path-77" src={path77} />
                <img className="path-7" src={path79} />
                <img className="path" src={path81} />
                <img className="path-1" src={path83} />
                <img className="path-4" src={path85} />
                <img className="path-5" src={path87} />
                <img className="path-89" src={path89} />
                <img className="path-91" src={path91} />
                <img className="path" src={path93} />
                <img className="path-1" src={path95} />
                <img className="path-4" src={path97} />
                <img className="path-5" src={path99} />
              </div>
            </div>
            <div className="path-container-1">
              <img className="path-70" src={path70} />
              <img className="path-72" src={path72} />
              <img className="path-74" src={path74} />
              <img className="path-76" src={path76} />
              <img className="path-78" src={path78} />
              <img className="path-80" src={path80} />
              <img className="path-82" src={path82} />
              <img className="path-6" src={path84} />
              <img className="path-8" src={path86} />
              <img className="path-9" src={path88} />
              <img className="path-90" src={path90} />
              <img className="path-92" src={path92} />
              <img className="path-94" src={path94} />
              <img className="path-6" src={path96} />
              <img className="path-8" src={path98} />
              <img className="path-9" src={path100} />
            </div>
          </div>
          <div className="rectangle-219"></div>
          <Link to="/home">
            <div className="onconnect-1 oswald-normal-cerulean-55px">
              <span className="oswald-normal-tangaroa-55px">{spanText4}</span>
              <span className="oswald-normal-cerulean-55px">{spanText5}</span>
            </div>
          </Link>
          <Group6 />
          <img className="path-101" src={path101} />
          <div className="profile-1 sourcesanspro-semi-bold-tangaroa-25px">{profile}</div>
          <Group9 src={group9Props.src} />
          <div className="subscriptions-1 sourcesanspro-semi-bold-tangaroa-25px">{subscriptions}</div>
          <div className="community-1 sourcesanspro-semi-bold-tangaroa-25px">{community}</div>
          <Group10 className={group10Props.className} />
          <div className="overlap-group1-1">
            <div className="updates-1 sourcesanspro-semi-bold-tangaroa-25px">{updates}</div>
            <div className="rectangle-31-1"></div>
          </div>
          <img className="line-5" src={line52} />
          <img className="line-53" src={line53} />
          <img className="line-5" src={line54} />
          <img className="line-55" src={line55} />
          <img className="line-56" src={line56} />
          <img className="line-57" src={line57} />
          <img className="line-58" src={line58} />
        </div>
      </div>
    </div>
  );
}

export default UpdateMain;
