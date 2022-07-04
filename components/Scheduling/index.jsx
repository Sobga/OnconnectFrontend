import React from "react";
import { Link } from "react-router-dom";
import Group3 from "../Group3";
import Group6 from "../Group6";
import Group9 from "../Group9";
import Group10 from "../Group10";
import "./Scheduling.css";

function Scheduling(props) {
  const {
    path63,
    path56,
    monday4,
    tuesday5,
    wednesday6,
    thursday7,
    friday8,
    saturday9,
    sunday10,
    path57,
    path58,
    path59,
    path60,
    monday4Th1300,
    suggestedTimeSlots,
    thursday7Th1100,
    tuesday5Th1000,
    text1,
    planResearchUpdate,
    week14404202210042022,
    path61,
    path62,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="scheduling screen">
        <div className="overlap-group6">
          <img className="path-63" src={path63} />
          <Group3 />
          <Link to="/home">
            <img className="path-56" src={path56} />
          </Link>
          <div className="overlap-group">
            <div className="rectangle-98 border-1px-dove-gray"></div>
            <div className="rectangle-99 border-1px-dove-gray"></div>
            <div className="rectangle-100 border-1px-dove-gray"></div>
            <div className="rectangle-101 border-1px-dove-gray"></div>
            <div className="rectangle-102 border-1px-dove-gray"></div>
            <div className="rectangle-103 border-1px-dove-gray"></div>
            <div className="rectangle-104 border-1px-dove-gray"></div>
          </div>
          <div className="rectangle-107"></div>
          <div className="monday4 sourcesanspro-semi-bold-white-25px">{monday4}</div>
          <div className="tuesday5 sourcesanspro-semi-bold-white-25px">{tuesday5}</div>
          <div className="wednesday-6 sourcesanspro-semi-bold-white-25px">{wednesday6}</div>
          <div className="thursday-7 sourcesanspro-semi-bold-white-25px">{thursday7}</div>
          <div className="friday-8 sourcesanspro-semi-bold-white-25px">{friday8}</div>
          <div className="saturday-9 sourcesanspro-semi-bold-white-25px">{saturday9}</div>
          <div className="sunday-10 sourcesanspro-semi-bold-white-25px">{sunday10}</div>
          <div className="rectangle-108"></div>
          <div className="rectangle-109"></div>
          <div className="rectangle-110"></div>
          <div className="rectangle-111"></div>
          <div className="rectangle-112"></div>
          <div className="rectangle-113"></div>
          <div className="rectangle-114"></div>
          <div className="rectangle-115"></div>
          <div className="rectangle-116"></div>
          <div className="rectangle-117"></div>
          <div className="rectangle-118"></div>
          <img className="path-57" src={path57} />
          <div className="rectangle-119"></div>
          <div className="rectangle-120"></div>
          <div className="rectangle-121"></div>
          <img className="path-58" src={path58} />
          <img className="path-59" src={path59} />
          <img className="path-60" src={path60} />
          <div className="overlap-group1">
            <div className="rectangle-12"></div>
            <div className="th-1 sourcesanspro-semi-bold-white-20px">{monday4Th1300}</div>
          </div>
          <div className="suggested-time-slots sourcesanspro-semi-bold-black-25px">{suggestedTimeSlots}</div>
          <div className="overlap-group2">
            <div className="rectangle-12"></div>
            <div className="th-1 sourcesanspro-semi-bold-white-20px">{thursday7Th1100}</div>
          </div>
          <div className="overlap-group3">
            <div className="rectangle-12"></div>
            <div className="th-1 sourcesanspro-semi-bold-white-20px">{tuesday5Th1000}</div>
          </div>
          <div className="text-1">{text1}</div>
          <div className="overlap-group4">
            <div className="rectangle-125"></div>
            <div className="plan-research-update sourcesanspro-semi-bold-white-20px">{planResearchUpdate}</div>
          </div>
          <div className="rectangle-126 border-2px-cerulean"></div>
          <div className="rectangle-127 border-2px-cerulean"></div>
          <div className="rectangle-128 border-2px-cerulean"></div>
          <div className="week-144042022-10042022 sourcesanspro-semi-bold-black-25px">{week14404202210042022}</div>
          <img className="path-61" src={path61} />
          <img className="path-62" src={path62} />
          <div className="rectangle-2"></div>
          <Link to="/home">
          <div className="onconnect oswald-normal-cerulean-55px">
            <span className="oswald-normal-tangaroa-55px">{spanText1}</span>
            <span className="oswald-normal-cerulean-55px">{spanText2}</span>
          </div>
          </Link>
          <Group6 />
          <img className="path-2" src={path2} />
          <div className="profile sourcesanspro-semi-bold-tangaroa-25px">{profile}</div>
          <Group9 src={group9Props.src} />
          <div className="subscriptions sourcesanspro-semi-bold-tangaroa-25px">{subscriptions}</div>
          <div className="community sourcesanspro-semi-bold-tangaroa-25px">{community}</div>
          <Link to="/updates-frame">
          <div className="updates sourcesanspro-semi-bold-tangaroa-25px">{updates}</div>
          </Link>
          <div className="overlap-group5">
            <Group10 />
            <div className="rectangle-31"></div>
          </div>
          <img className="line-1" src={line10} />
          <img className="line-11" src={line11} />
          <img className="line-1" src={line12} />
          <img className="line-14" src={line14} />
          <img className="line-17" src={line17} />
          <img className="line-19" src={line19} />
          <img className="line-20" src={line20} />
        </div>
      </div>
    </div>
  );
}

export default Scheduling;
