import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Group3 from "../Group3";
import Group6 from "../Group6";
import Group9 from "../Group9";
import Group10 from "../Group10";
import "./UpdatesFrame.css";
import { getUsersInterests, getUsersSuggestions, initializeUser, getKeywordsSynonyms } from "../../state/actions";
import { getKeywordName, getTodaysDate } from "../../static/helpers";
import { Card } from "@material-ui/core";
import { Button, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import { almostBlack, niceBlue } from "../../static/constants";
import LiveTvIcon from '@mui/icons-material/LiveTv';

function UpdatesFrame(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    path2,
    profile,
    subscriptions,
    path4,
    community,
    updates,
    line10,
    line11,
    line12,
    line14,
    line17,
    line19,
    line20,
    group125,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    group130,
    path102,
    group135,
    path103,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    spanText42,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    spanText48,
    spanText49,
    spanText50,
    spanText51,
    spanText52,
    spanText53,
    spanText54,
    spanText55,
    spanText56,
    spanText57,
    spanText58,
    spanText59,
    spanText60,
    spanText61,
    spanText62,
    spanText63,
    group139,
    spanText64,
    spanText65,
    group141,
    spanText66,
    spanText67,
    spanText68,
    spanText69,
    spanText70,
    group143,
    spanText71,
    spanText72,
    group145,
    spanText73,
    spanText74,
    spanText75,
    spanText76,
    spanText77,
    spanText78,
    spanText79,
    spanText80,
    spanText81,
    spanText82,
    spanText83,
    spanText84,
    spanText85,
    spanText86,
    spanText87,
    spanText88,
    spanText89,
    spanText90,
    spanText91,
    spanText92,
    spanText93,
    spanText94,
    spanText95,
    spanText96,
    spanText97,
    spanText98,
    spanText99,
    spanText100,
    spanText101,
    spanText102,
    spanText103,
    spanText104,
    spanText105,
    spanText106,
    spanText107,
    spanText108,
    spanText109,
    spanText110,
    spanText111,
    spanText112,
    spanText113,
    spanText114,
    spanText115,
    spanText116,
    spanText117,
    spanText118,
    spanText119,
    spanText120,
    spanText121,
    spanText122,
    spanText123,
    spanText124,
    spanText125,
    spanText126,
    spanText127,
    spanText128,
    spanText129,
    spanText130,
    spanText131,
    spanText132,
    spanText133,
    spanText134,
    spanText135,
    spanText136,
    spanText137,
    spanText138,
    spanText139,
    spanText140,
    spanText141,
    spanText142,
    spanText143,
    spanText144,
    spanText145,
    spanText146,
    spanText147,
    spanText148,
    spanText149,
    spanText150,
    spanText151,
    spanText152,
    spanText153,
    spanText154,
    spanText155,
    spanText156,
    spanText157,
    spanText158,
    spanText159,
    spanText160,
    group147,
    spanText161,
    spanText162,
    spanText163,
    path107,
    group152,
    path108,
    spanText164,
    spanText165,
    spanText166,
    spanText167,
    spanText168,
    spanText169,
    spanText170,
    spanText171,
    spanText172,
    spanText173,
    spanText174,
    spanText175,
    spanText176,
    spanText177,
    spanText178,
    spanText179,
    spanText180,
    spanText181,
    spanText182,
    spanText183,
    spanText184,
    spanText185,
    spanText186,
    spanText187,
    spanText188,
    spanText189,
    spanText190,
    spanText191,
    spanText192,
    spanText193,
    spanText194,
    group156,
    spanText195,
    spanText196,
    spanText197,
    group158,
    pdL1,
    group160,
    spanText198,
    spanText199,
    spanText200,
    spanText201,
    spanText202,
    spanText203,
    spanText204,
    spanText205,
    spanText206,
    spanText207,
    spanText208,
    spanText209,
    spanText210,
    spanText211,
    group162,
    guidelines,
    spanText212,
    spanText213,
    spanText214,
    spanText215,
    spanText216,
    spanText217,
    spanText218,
    spanText219,
    spanText220,
    spanText221,
    spanText222,
    spanText223,
    spanText224,
    spanText225,
    spanText226,
    spanText227,
    spanText228,
    spanText229,
    spanText230,
    spanText231,
    spanText232,
    spanText233,
    spanText234,
    spanText235,
    spanText236,
    spanText237,
    spanText238,
    spanText239,
    spanText240,
    spanText241,
    spanText242,
    spanText243,
    spanText244,
    spanText245,
    spanText246,
    spanText247,
    spanText248,
    spanText249,
    spanText250,
    spanText251,
    spanText252,
    spanText253,
    spanText254,
    spanText255,
    spanText256,
    spanText257,
    spanText258,
    spanText259,
    spanText260,
    spanText261,
    spanText262,
    spanText263,
    spanText264,
    spanText265,
    spanText266,
    spanText267,
    spanText268,
    spanText269,
    spanText270,
    spanText271,
    spanText272,
    spanText273,
    spanText274,
    spanText275,
    spanText276,
    spanText277,
    spanText278,
    spanText279,
    spanText280,
    spanText281,
    group164,
    spanText282,
    spanText283,
    spanText284,
    spanText285,
    spanText286,
    spanText287,
    spanText288,
    spanText289,
    spanText290,
    spanText291,
    group166,
    group168,
    group170,
    spanText292,
    spanText293,
    spanText294,
    spanText295,
    spanText296,
    spanText297,
    spanText298,
    spanText299,
    spanText300,
    spanText301,
    spanText302,
    spanText303,
    spanText304,
    spanText305,
    spanText306,
    spanText307,
    spanText308,
    spanText309,
    spanText310,
    spanText311,
    spanText312,
    spanText313,
    spanText314,
    spanText315,
    spanText316,
    spanText317,
    spanText318,
    spanText319,
    spanText320,
    spanText321,
    spanText322,
    spanText323,
    spanText324,
    spanText325,
    spanText326,
    spanText327,
    spanText328,
    spanText329,
    spanText330,
    spanText331,
    spanText332,
    spanText333,
    spanText334,
    spanText335,
    spanText336,
    spanText337,
    spanText338,
    spanText339,
    spanText340,
    spanText341,
    spanText342,
    spanText343,
    spanText344,
    phone1,
    group172,
    spanText345,
    spanText346,
    spanText347,
    spanText348,
    spanText349,
    spanText350,
    spanText351,
    group174,
    spanText352,
    spanText353,
    group176,
    spanText354,
    spanText355,
    spanText356,
    spanText357,
    spanText358,
    spanText359,
    spanText360,
    group178,
    spanText361,
    spanText362,
    spanText363,
    spanText364,
    spanText365,
    overlapGroup,
    path117,
    path118,
    path119,
    path120,
    path121,
    path122,
    path123,
    path124,
    path125,
    path126,
    path127,
    path128,
    path129,
    path130,
    path131,
    path132,
    path133,
    path134,
    path135,
    path136,
    group183,
    path137,
    spanText366,
    spanText367,
    spanText368,
    spanText369,
    spanText370,
    spanText371,
    spanText372,
    spanText373,
    spanText374,
    spanText375,
    spanText376,
    spanText377,
    spanText378,
    spanText379,
    spanText380,
    spanText381,
    spanText382,
    spanText383,
    spanText384,
    spanText385,
    spanText386,
    phone2,
    group187,
    spanText387,
    spanText388,
    spanText389,
    spanText390,
    spanText391,
    spanText392,
    group189,
    spanText393,
    spanText394,
    spanText395,
    spanText396,
    spanText397,
    group191,
    spanText398,
    spanText399,
    spanText400,
    group193,
    spanText401,
    spanText402,
    spanText403,
    spanText404,
    spanText405,
    spanText406,
    spanText407,
    group195,
    spanText408,
    spanText409,
    spanText410,
    spanText411,
    spanText412,
    spanText413,
    spanText414,
    spanText415,
    spanText416,
    spanText417,
    spanText418,
    group197,
    spanText419,
    spanText420,
    group199,
    group3Props,
    group9Props,
    group10Props,
  } = props;

  const dispatch = useDispatch();

  const history = useHistory();
  const user = useSelector((state)=> state.user);
  const userInterests = useSelector((state)=>state.userInterests);
  const suggestions = useSelector((state)=>state.selectedSources);
  const userWelcome = `Welcome back, ${user.firstName}!`;
  const todayDate = getTodaysDate();
  const updateMessege = `Update ${todayDate} is ready for you`;
  const podcastKeywords = ["NSCLC", "Histology/EGFR"];
  const videoKeywords = ["Thoracic tumour/Mesothelium", "Treatment/Immunotherapy"];

  useEffect(()=>{
    dispatch(initializeUser());
    dispatch(getUsersInterests());
    dispatch(getUsersSuggestions());
  },[])

  const onClickReadArticle = () => {
    history.push('/updates-research')
  }

  const isUserInterest = (keywordName) => {
    return userInterests.some(interest=> interest.name===keywordName || interest.name.includes(keywordName));
  }

  return (
    <div className="container-center-horizontal">
      <div className="updates-frame screen">
        <div className="overlap-group3-2">
          <div className="rectangle-1-1"></div>
          <div className="rectangle-2-3"></div>
          <div className="rectangle-3-1"></div>
          <Link to="/home">
          <div className="onconnect-4 oswald-normal-cerulean-55px">
            <span className="oswald-normal-tangaroa-55px">{spanText1}</span>
            <span className="oswald-normal-cerulean-55px">{spanText2}</span>
          </div>
          </Link>
          <div className="welcome-back-lars sourcesanspro-semi-bold-white-34px">
            <span className="sourcesanspro-semi-bold-white-34px">{userWelcome}</span>
            <span className="span1">{spanText4}</span>
            <span className="span2">{updateMessege}</span>
          </div>
          <Group3 className={group3Props.className} />
          <Group6 />
          <img className="path-2-3" src={path2} />
          <div className="profile-4 sourcesanspro-semi-bold-tangaroa-25px">{profile}</div>
          <Group9 src={group9Props.src} />
          <Link to="/subscriptions">
          <div className="subscriptions-5 sourcesanspro-semi-bold-tangaroa-25px">{subscriptions}</div>
          </Link>
          <div className="community-4 sourcesanspro-semi-bold-tangaroa-25px">{community}</div>
          
          <Group10 className={group10Props.className} />
          
          <div className="rectangle-30"></div>
          <Link to="/home">
          <div className="overlap-group1-4">
            <div className="updates-4 sourcesanspro-semi-bold-tangaroa-25px">{updates}</div>
            <div className="rectangle-31-4"></div>
          </div>
          </Link>
          <img className="line-1-3" src={line10} />
          <img className="line-11-3" src={line11} />
          <img className="line-1-3" src={line12} />
          <img className="line-14-3" src={line14} />
          <img className="line-17-3" src={line17} />
          <img className="line-19-3" src={line19} />
          <img className="line-20-3" src={line20} />
          <div className="group-125">
            <div className="neoplasms-mole sourcesanspro-normal-tangaroa-25px">
              {
                userInterests.map((interest, index)=>{
                  const lastIndex=userInterests?.length-1;
                  return(
                    <>
                    <span className="sourcesanspro-normal-tangaroa-25px" style={{padding: "0px 10px 0px 10px"}}>{getKeywordName(interest.name)}</span>
                    {index!==lastIndex && <span>|</span>}
                    </>
                  )
                })
              }
            </div>
          </div>
          <Grid container spacing={2} className="group-200" >
          <Grid item xs={6} style={{ maxWidth:"730px"}}>
                <Card style={{backgroundColor: "#ffffff", borderRadius: '16px', padding: "10px"}}>
                  <CardContent>
                    <Box style={{height: "70px", display: "flex", alignItems:"center"}}>
                    <Typography style={{fontWeight: "bold", fontSize: "20px"}}>
                      <span className="sourcesanspro-semi-bold-tangaroa-25px" >
                      Oncology Today with Dr Neil Love: NSCLC with EGFR Exon 20 Insertion Mutations 
                      </span>
                    </Typography>
                    </Box>
                    <Divider style={{marginTop: "15px", marginBottom:"15px",borderBottomWidth: 3 , backgroundColor: almostBlack }}/>
                    <Box sx={{ width: '100%', paddingBottom: "35px"}}>
                      <Stack direction="row" spacing={2}>
                        {podcastKeywords.map((keyword,index)=>{
                          const isUserInterested = isUserInterest(keyword);
                          return (<Box sx={{border: `1px solid ${niceBlue}` }} style={{borderBottomWidth: 1, backgroundColor: isUserInterested ? niceBlue : "white", borderRadius: '16px', padding: "5px"}}>
                            <span className="span0 sourcesanspro-semi-bold-white-20px">
                            <Typography style={{color: isUserInterested ? "white" : niceBlue, fontWeight: "bold"}}>{getKeywordName(keyword)}</Typography></span>
                            </Box>
                          )
                        })}
                      </Stack>
                    </Box>
                    {<Box direction="column" style={{maxHeight: "80px", paddingTop: "10px", paddibgBottom: "100px"}}>
                      <Grid container style={{overflow: "hidden", textOverflow: "ellipsis", width: '100%'}}> 
                      <img style={{maxHeight: "120px"}} src="/img/podcastThumbnail.png" />
                      <Typography style={{maxHeight: "100px", width: "70%", paddingLeft: "20px"}}><span className="sourcesanspro-normal-blue-bayoux-20px">
                      Featuring a discussion on advances in the treatment of patients with NSCLC harboring an EGFR exon 20 insertion mutations with Dr Gregory Riely, moderated by Dr Neil Love.</span>
                      </Typography>
                      </Grid>
                    </Box>}
                    
                    <Box style={{maxHeight: "80px", paddingTop: "70px", marginBottom: "10px"}}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={onClickReadArticle}>
                            {true && <Typography>Listen to podcast</Typography>}
                          </Button>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: "end"}}>
                        {true && <img style={{height: "70%"}} src="/img/podcast.png" />}
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                </Grid>
            <Grid item xs={6} style={{ maxWidth:"730px"}}>
                <Card style={{backgroundColor: "#ffffff", borderRadius: '16px', padding: "10px"}}>
                  <CardContent>
                    <Box style={{height: "70px", display: "flex", alignItems:"center"}}>
                    <Typography className="oswald-normal-tangaroa-55px" style={{fontWeight: "bold", fontSize: "20px"}}>
                    <span className="sourcesanspro-semi-bold-tangaroa-25px" >
                    Prasad S. Adusumilli, MD, on CAR T-Cell Therapy for Mesothelioma
                    </span>
                    </Typography>
                    </Box>
                    <Divider style={{marginTop: "15px", marginBottom:"15px",borderBottomWidth: 3 , backgroundColor: almostBlack }}/>
                    <Box sx={{ width: '100%', paddingBottom: "35px"}}>
                      <Stack direction="row" spacing={2}>
                        {
                        videoKeywords.map((keyword,index)=>{
                          const isUserInterested = isUserInterest(keyword);
                          return (<Box sx={{border: `1px solid ${niceBlue}` }} style={{borderBottomWidth: 1, backgroundColor: isUserInterested ? niceBlue : "white", borderRadius: '16px', padding: "5px"}}>
                            <Typography style={{color: isUserInterested ? "white" : niceBlue, fontWeight: "bold"}}>{getKeywordName(keyword)}</Typography>
                            </Box>
                          )
                        })}
                      </Stack>
                    </Box>
                    {<Box direction="column" style={{maxHeight: "80px", paddingTop: "10px", paddibgBottom: "100px"}}>
                      <Grid container style={{overflow: "hidden", textOverflow: "ellipsis", width: '100%'}}> 
                      <img style={{maxHeight: "120px"}} src="/img/thumbnailVideo.png" />
                      <Typography style={{maxHeight: "100px", width: "70%", paddingLeft: "20px"}}><span className="sourcesanspro-normal-blue-bayoux-20px">
                      Prasad S. Adusumilli, MD, of Memorial Sloan Kettering Cancer Center, discusses phase I/II research he is conducting on CAR T cells delivered intrapleurally in patients with mesothelioma. The treatment is targeting mesothelin, a cancer cell-surface antigen overexpressed in many solid tumors and associated with aggressive disease.</span>
                      </Typography>
                      </Grid>
                    </Box>}
                    
                    <Box style={{maxHeight: "80px", paddingTop: "70px", marginBottom: "10px"}}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={onClickReadArticle}>
                            {true && <Typography>Watch the video</Typography>}
                          </Button>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: "end"}}>
                        <LiveTvIcon style={{color: niceBlue, fontSize: "40"}} size="large" ></LiveTvIcon>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                </Grid>
            {suggestions.map((suggestion,index)=>{
              const suggestionResource = suggestion.resource
              const suggestionKeywords = suggestion.resourceKeywords
              return(
                <Grid item xs={6} style={{ maxWidth:"730px"}}>
                <Card style={{backgroundColor: "#ffffff", borderRadius: '16px', padding: "10px"}}>
                  <CardContent>
                    <Box style={{height: "90px", display: "flex", alignItems:"center"}}>
                    <Typography className="oswald-normal-tangaroa-55px" style={{fontWeight: "bold", fontSize: "20px"}}>
                    <span className="sourcesanspro-semi-bold-tangaroa-25px" >
                      {suggestionResource.title}
                    </span>
                    </Typography>
                    </Box>
                    <Divider style={{marginTop: "15px", marginBottom:"15px",borderBottomWidth: 3 , backgroundColor: almostBlack }}/>
                    <Box sx={{ width: '100%', paddingBottom: "35px"}}>
                      <Stack direction="row" spacing={2}>
                        {suggestionKeywords.map((keyword,index)=>{
                          const isUserInterested = isUserInterest(keyword.name);
                          return (<Box sx={{border: `1px solid ${niceBlue}` }} style={{borderBottomWidth: 1, backgroundColor: isUserInterested ? niceBlue : "white", borderRadius: '16px', padding: "5px"}}>
                            <Typography style={{color: isUserInterested ? "white" : niceBlue, fontWeight: "bold"}}>{getKeywordName(keyword.name)}</Typography>
                            </Box>
                          )
                        })}
                      </Stack>
                    </Box>
                    {suggestionResource.abstract && <Box direction="column" style={{maxHeight: "80px", paddingTop: "10px", paddibgBottom: "100px"}}>
                      <Grid container style={{overflow: "hidden", textOverflow: "ellipsis", width: '100%'}}> 
                      <Typography style={{maxHeight: "118px", width: "100%"}}>
                      <span className="sourcesanspro-normal-blue-bayoux-20px">
                        {suggestionResource.abstract}
                      </span>
                      </Typography>
                      </Grid>
                    </Box>}
                    
                    <Box style={{maxHeight: "80px", paddingTop: "70px", marginBottom: "10px"}}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={onClickReadArticle}>
                            <Typography>Read full article</Typography>
                          </Button>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: "end"}}>
                        <img style={{height: "70%"}} src="/img/artykul.png" />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                </Grid>
              )
            })            }
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default UpdatesFrame;
