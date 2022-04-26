import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Group6 from "../Group6";
import Group9 from "../Group9";
import Group10 from "../Group10";
import Group3 from "../Group3";
import "./Subscriptions.css";
import { useSelector, useDispatch } from "react-redux";
import { addInterest, getKeywordsSynonyms, getUsersInterests, removeInterest } from "../../state/actions";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { niceBlue, SAMPLE_USER_ID } from "../../static/constants";
import { isUserInterestedInTheTopic } from "../../static/helpers";
import { TextField } from "@mui/material";
import { execFileSync } from "child_process";
import { set } from "core-js/core/dict";

function Subscriptions(props) {
  const {
    spanText1,
    spanText2,
    path2,
    profile,
    community,
    updates,
    subscriptions,
    line10,
    line11,
    line12,
    line14,
    line17,
    line19,
    line20,
    path161,
    currentlySubsciptedTo,
    path35,
    number1,
    number2,
    line5,
    line6,
    overlapGroup,
    path37,
    line7,
    line8,
    line9,
    number3,
    path38,
    searchWithinSubscriptions,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    path39,
    path40,
    path41,
    path42,
    path43,
    path44,
    spanText7,
    spanText8,
    path45,
    path46,
    path47,
    path48,
    path49,
    path50,
    path51,
    path52,
    path53,
    biomarkers,
    group9Props,
    group10Props,
    group3Props,
  } = props;

  const keywords = useSelector((state)=>state.keywords);
  const userInterests = useSelector((state)=>state.userInterests);
  const [triggerRefresh, setTriggerRefresh] = useState(true);
  

  const dispatch = useDispatch();

  useEffect(()=>{
    if(triggerRefresh){
      dispatch(getUsersInterests())
      dispatch(getKeywordsSynonyms());
      setTriggerRefresh(false);
    }
  },[triggerRefresh])

  
  console.log(userInterests);

  return (
    <div className="container-center-horizontal">
      <div className="subscriptions-2 screen">
        <div className="overlap-group6-1">
          <div className="overlap-group7">
            <div className="rectangle-45"></div>
            <div className="rectangle-2-1"></div>
            <div className="onconnect-2 oswald-normal-cerulean-55px">
              <span className="oswald-normal-tangaroa-55px">{spanText1}</span>
              <span className="oswald-normal-cerulean-55px">{spanText2}</span>
            </div>
            <Group6 />
            <img className="path-2-1" src={path2} />
            <div className="profile-2 sourcesanspro-semi-bold-tangaroa-25px">{profile}</div>
            <Group9 src={group9Props.src} />
            <div className="community-2 sourcesanspro-semi-bold-tangaroa-25px">{community}</div>
            <Group10 className={group10Props.className} />
              <Link to="/home">
                <div className="updates-2 sourcesanspro-semi-bold-tangaroa-25px">{updates}</div>
              </Link>
            <div className="overlap-group5-1">
              <Link to="/subscriptions">
                <div className="subscriptions-3 sourcesanspro-semi-bold-tangaroa-25px">{subscriptions}</div>
              </Link>
              <div className="rectangle-31-2"></div>
            </div>
            <img className="line-1-1" src={line10} />
            <img className="line-11-1" src={line11} />
            <img className="line-1-1" src={line12} />
            <img className="line-14-1" src={line14} />
            <img className="line-17-1" src={line17} />
            <img className="line-19-1" src={line19} />
            <img className="line-20-1" src={line20} />
          </div>
          <div className="flex-row-1">
            <Link to="/home">
              <img className="path-161" src={path161} />
            </Link>
            <div className="overlap-group8">
              <div className="group-50"></div>
              <div className="rectangle-42"></div>
              <div className="currently-subscipted-to sourcesanspro-semi-bold-white-34px">{currentlySubsciptedTo}</div>
              <Group3 className={group3Props.className} />
              <div className="overlap-group1-2">
                <div className="rectangle"></div>
                <div className="overlap-group-8">
                  <img className="path-35" src={path35} />
                  <div className="ellipse-14 border-2px-whisper"></div>
                </div>
                <div className="number sourcesanspro-semi-bold-white-34px">{number1}</div>
              </div>
              <div className="overlap-group2-2">
                <div className="rectangle"></div>
                <div className="number sourcesanspro-semi-bold-white-34px">{number2}</div>
                <div className="line-container border-2px-whisper">
                  <img className="line-5-1" src={line5} />
                  <img className="line-6" src={line6} />
                </div>
              </div>
              <div className="overlap-group3-1">
                <div className="rectangle"></div>
                <div className="overlap-group-9" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <img className="path-37" src={path37} />
                  <img className="line-7" src={line7} />
                  <img className="line" src={line8} />
                  <img className="line" src={line9} />
                </div>
                <div className="number-1 sourcesanspro-semi-bold-white-34px">{number3}</div>
              </div>
              <div className="overlap-group4-1">
                <div className="rectangle-51"></div>
                <div className="group-70">
                  <div className="group-69">
                    <div className="overlap-group-10">
                      <div className="group-68">
                        <div className="ellipse-15 border-2px-tangaroa"></div>
                      </div>
                      <img className="path-38" src={path38} />
                    </div>
                  </div>
                </div>
                <div className="search-within-subscriptions sourcesanspro-normal-blue-bayoux-20px">
                  {searchWithinSubscriptions}
                </div>
              </div>
              <div className="rectangle-66"></div>
              <div className="topics sourcesanspro-semi-bold-blue-bayoux-25px">
                <span className="sourcesanspro-semi-bold-tangaroa-25px">{spanText5}</span>
                <span className="sourcesanspro-normal-blue-bayoux-20px">{spanText6}</span>
              </div>
              <div className="biomarkers">
              <FormGroup style={{maxHeight: "270px", maxWidth: "95%", overflow: "auto", direction: "ltr"}}>
                {keywords.map((keyword)=>{
                  const userInterested = isUserInterestedInTheTopic(keyword.name, userInterests)
                  return (
                    <>
                      <FormControlLabel 
                      control={
                        <Checkbox checked={userInterested} onClick={(event)=>{
                          if(userInterested)
                            dispatch(removeInterest(keyword));
                          else
                            dispatch(addInterest(keyword));
                          setTriggerRefresh(true);
                        }} sx={{
                          color: niceBlue,
                          '&.Mui-checked': {
                            color: niceBlue,
                          },
                        }}/>
                      } label={<label className="sourcesanspro-normal-blue-bayoux-20px">{keyword.name}</label>} />
                    </>
                  )
                })}
              </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
