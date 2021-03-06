import "./App.css";
import React from "react";
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Scheduling from "./components/Scheduling";
import UpdateMain from "./components/UpdateMain";
import Subscriptions from "./components/Subscriptions";
import UpdatesResearch from "./components/UpdatesResearch";
import UpdatesFrame from "./components/UpdatesFrame";
import Home from "./components/Home";
import { mainReducer } from "./state/mainReducer";

import rootSaga from "./state/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/scheduling">
          <Scheduling {...schedulingData} />
        </Route>
        <Route path="/update-main">
          <UpdateMain {...updateMainData} />
        </Route>
        <Route path="/subscriptions">
          <Subscriptions {...subscriptionsData} />
        </Route>
        <Route path="/updates-research">
          <UpdatesResearch {...updatesResearchData} />
        </Route>
        <Route path="/updates-frame">
        <UpdatesFrame {...updatesFrameData} />
        </Route>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
const group91Data = {
    src: "/img/path-3-1@1x.png",
};

const schedulingData = {
    path63: "/img/path-63@1x.png",
    path56: "/img/path-161@1x.png",
    monday4: "Monday	4",
    tuesday5: "Tuesday	5",
    wednesday6: "Wednesday  6",
    thursday7: "Thursday  7",
    friday8: "Friday  8",
    saturday9: "Saturday  9",
    sunday10: "Sunday  10",
    path57: "/img/path-57@1x.png",
    path58: "/img/path-58@1x.png",
    path59: "/img/path-58@1x.png",
    path60: "/img/path-58@1x.png",
    monday4Th1300: "Monday 4th, 13:00-14:00",
    suggestedTimeSlots: "Suggested time slots for research update:",
    thursday7Th1100: "Thursday 7th, 11:00-12:15",
    tuesday5Th1000: "Tuesday 5th, 10:00-10:30",
    text1: <>9:00<br /><br /><br /><br />10:00<br /><br /><br /><br />11:00<br /><br /><br /><br />12:00<br /><br /><br /><br />13:00<br /><br /><br /><br />14:00</>,
    planResearchUpdate: "Plan research update",
    week14404202210042022: <>Week 14<br />4/04/2022   -   10/04/2022</>,
    path61: "/img/path-61@1x.png",
    path62: "/img/path-62@1x.png",
    spanText1: "On",
    spanText2: "connect",
    path2: "/img/path-101@1x.png",
    profile: "Profile",
    subscriptions: "Subscriptions",
    community: "Community",
    updates: "Updates",
    line10: "/img/line-10-1@1x.png",
    line11: "/img/line-10-1@1x.png",
    line12: "/img/line-10-1@1x.png",
    line14: "/img/line-10-1@1x.png",
    line17: "/img/line-10-1@1x.png",
    line19: "/img/line-10-1@1x.png",
    line20: "/img/line-10-1@1x.png",
    group9Props: group91Data,
};

const group92Data = {
    src: "/img/path-3-5@1x.png",
};

const group102Data = {
    className: "group-121",
};

const updateMainData = {
    path67: "/img/path-161@1x.png",
    updateSortBy: "Update										       Sort by",
    path68: "/img/path-68@1x.png",
    spanText1: <>Update 31-03-2022<br /></>,
    spanText2: <>Update 08-02-2022<br />Update 26-01-2022<br />Update 22-01-2022<br />Update 11-01-2022<br />Update 05-01-2022<br />Update 23-12-2021<br />Update 15-12-2021<br />Update 06-12-2021<br />Update 29-11-2021<br />Update 23-11-2021<br />Update 15-11-2021<br />Update 08-11-2021<br />Update 02-11-2021<br />Update 20-10-2021<br />Update 05-10-2021<br /></>,
    spanText3: "",
    line35: "/img/line-35@1x.png",
    line36: "/img/line-35@1x.png",
    line37: "/img/line-35@1x.png",
    line38: "/img/line-35@1x.png",
    line39: "/img/line-35@1x.png",
    line40: "/img/line-35@1x.png",
    line41: "/img/line-35@1x.png",
    line42: "/img/line-35@1x.png",
    line43: "/img/line-35@1x.png",
    line44: "/img/line-35@1x.png",
    line45: "/img/line-35@1x.png",
    line46: "/img/line-35@1x.png",
    line47: "/img/line-35@1x.png",
    line48: "/img/line-35@1x.png",
    line49: "/img/line-35@1x.png",
    line50: "/img/line-35@1x.png",
    line51: "/img/line-35@1x.png",
    path69: "/img/path-69@1x.png",
    path71: "/img/path-71@1x.png",
    path73: "/img/path-73@1x.png",
    path75: "/img/path-69@1x.png",
    path77: "/img/path-73@1x.png",
    path79: "/img/path-69@1x.png",
    path81: "/img/path-81@1x.png",
    path83: "/img/path-71@1x.png",
    path85: "/img/path-71@1x.png",
    path87: "/img/path-69@1x.png",
    path89: "/img/path-71@1x.png",
    path91: "/img/path-91@1x.png",
    path93: "/img/path-81@1x.png",
    path95: "/img/path-71@1x.png",
    path97: "/img/path-71@1x.png",
    path99: "/img/path-69@1x.png",
    path70: "/img/path-100@1x.png",
    path72: "/img/path-72@1x.png",
    path74: "/img/path-74@1x.png",
    path76: "/img/path-100@1x.png",
    path78: "/img/path-74@1x.png",
    path80: "/img/path-80@1x.png",
    path82: "/img/path-100@1x.png",
    path84: "/img/path-100@1x.png",
    path86: "/img/path-100@1x.png",
    path88: "/img/path-100@1x.png",
    path90: "/img/path-100@1x.png",
    path92: "/img/path-80@1x.png",
    path94: "/img/path-100@1x.png",
    path96: "/img/path-100@1x.png",
    path98: "/img/path-100@1x.png",
    path100: "/img/path-100@1x.png",
    spanText4: "On",
    spanText5: "connect",
    path101: "/img/path-101@1x.png",
    profile: "Profile",
    subscriptions: "Subscriptions",
    community: "Community",
    updates: "Updates",
    line52: "/img/line-10-1@1x.png",
    line53: "/img/line-10-1@1x.png",
    line54: "/img/line-10-1@1x.png",
    line55: "/img/line-10-1@1x.png",
    line56: "/img/line-10-1@1x.png",
    line57: "/img/line-10-1@1x.png",
    line58: "/img/line-10-1@1x.png",
    group9Props: group92Data,
    group10Props: group102Data,
};

const group93Data = {
    src: "/img/path-3-1@1x.png",
};

const group103Data = {
    className: "group-10-1",
};

const group32Data = {
    className: "group-53",
};

const subscriptionsData = {
    spanText1: "On",
    spanText2: "connect",
    path2: "/img/path-101@1x.png",
    profile: "Profile",
    community: "Community",
    updates: "Updates",
    subscriptions: "Subscriptions",
    line10: "/img/line-10-1@1x.png",
    line11: "/img/line-10-1@1x.png",
    line12: "/img/line-10-1@1x.png",
    line14: "/img/line-10-1@1x.png",
    line17: "/img/line-10-1@1x.png",
    line19: "/img/line-10-1@1x.png",
    line20: "/img/line-10-1@1x.png",
    path161: "/img/path-161@1x.png",
    currentlySubsciptedTo: "Subscriptions",
    path35: "/img/path-35@1x.png",
    number1: "21",
    number2: "8",
    line5: "/img/line-5@1x.png",
    line6: "/img/line-6@1x.png",
    overlapGroup: "/img/path-36@1x.png",
    path37: "/img/path-37@1x.png",
    line7: "/img/line-7@1x.png",
    line8: "/img/line-7@1x.png",
    line9: "/img/line-7@1x.png",
    number3: "34",
    path38: "/img/path-38@1x.png",
    searchWithinSubscriptions: "Search within subscriptions...",
    spanText3: <>Researchers: <br /></>,
    spanText4: <>         Frederik Andersen  <br />         Christoffer Christensen<br />         Ingeborg Johansen<br />         Patrick Lund<br />         Helena Mortensen<br />         Grete Nielsen<br />         Hans Nisbeth <br />         Adrian Olsen<br />         Edvin Poulsen<br />         Hilmar Rasmussen <br />         Roger Schmidt</>,
    spanText5: <>Topics: <br /></>,
    spanText6: "",
    path39: "/img/path-39@1x.png",
    path40: "/img/path-40@1x.png",
    path41: "/img/path-39@1x.png",
    path42: "/img/path-39@1x.png",
    path43: "/img/path-39@1x.png",
    path44: "/img/path-40@1x.png",
    spanText7: <>Treatments<br /></>,
    spanText8: <>        anti-angiogenics<br />        Biomarkers (NSCLC)<br />                  Actionable biomarkers<br />                  No actionable biomarkers  <br />        Chemoterapy <br />                  Adjuvant<br />                  Neoadjuvant<br />        Diagnostics<br />        Immunotherapy <br />        Radiotherapy <br />        Surgery</>,
    path45: "/img/path-39@1x.png",
    path46: "/img/path-39@1x.png",
    path47: "/img/path-39@1x.png",
    path48: "/img/path-40@1x.png",
    path49: "/img/path-39@1x.png",
    path50: "/img/path-40@1x.png",
    path51: "/img/path-39@1x.png",
    path52: "/img/path-39@1x.png",
    path53: "/img/path-39@1x.png",
    biomarkers: <>Biomarkers <br />          Biomarking testing<br />          Biomarkers   <br />Non-small cell lung cancer (NSCLC)<br />          Non-squamous <br />                  Adenocarcinoma<br />                  Large cell carcinoma<br />          Squamous <br />                  Squamous cell carcinoma<br />Small cell lung cancer (SCLC) <br />          Small cell carcinoma</>,
    group9Props: group93Data,
    group10Props: group103Data,
    group3Props: group32Data,
};

const group94Data = {
    src: "/img/path-3-1@1x.png",
};

const group104Data = {
    className: "group-10-2",
};

const updatesResearchData = {
    path30: "/img/path-161@1x.png",
    group49: "/img/rectangle-37@1x.png",
    group48: "/img/rectangle-38@1x.png",
    path31: "/img/path-31@1x.png",
    spanText1: "On",
    spanText2: "connect",
    path2: "/img/path-101@1x.png",
    profile: "Profile",
    subscriptions: "Subscriptions",
    community: "Community",
    updates: "Updates",
    line10: "/img/line-10-1@1x.png",
    line11: "/img/line-10-1@1x.png",
    line12: "/img/line-10-1@1x.png",
    line14: "/img/line-10-1@1x.png",
    line17: "/img/line-10-1@1x.png",
    line19: "/img/line-10-1@1x.png",
    line20: "/img/line-10-1@1x.png",
    group9Props: group94Data,
    group10Props: group104Data,
};

const group33Data = {
    className: "group-3",
};

const group95Data = {
    src: "/img/path-3-1@1x.png",
};

const group105Data = {
    className: "group-10-3",
};

const updatesFrameData = {
    spanText1: "On",
    spanText2: "connect",
    spanText3: "Welcome back Lars,",
    spanText4: <> <br /></>,
    spanText5: "Update 31-03-2022 is ready for you",
    path2: "/img/path-101@1x.png",
    profile: "Profile",
    subscriptions: "Subscriptions",
    path4: "/img/path-161@1x.png",
    community: "Community",
    updates: "Updates",
    line10: "/img/line-10-1@1x.png",
    line11: "/img/line-10-1@1x.png",
    line12: "/img/line-10-1@1x.png",
    line14: "/img/line-10-1@1x.png",
    line17: "/img/line-10-1@1x.png",
    line19: "/img/line-10-1@1x.png",
    line20: "/img/line-10-1@1x.png",
    group125: "/img/group-123@1x.png",
    spanText6: "neoplasms   |   Molecular ",
    spanText7: "p",
    spanText8: "a",
    spanText9: "tholo",
    spanText10: "g",
    spanText11: "y    |    NSC",
    spanText12: "L",
    spanText13: "C    |    PD-L1",
    group130: "/img/group-126@1x.png",
    path102: "/img/path-102@1x.png",
    group135: "/img/group-131@1x.png",
    path103: "/img/path-103@1x.png",
    spanText14: "The b",
    spanText15: "e",
    spanText16: "t",
    spanText17: "w",
    spanText18: "een N",
    spanText19: "o",
    spanText20: "w and Then ",
    spanText21: "o",
    spanText22: "f ",
    spanText23: "L",
    spanText24: "ung Can",
    spanText25: "c",
    spanText26: "er",
    spanText27: "Chem",
    spanText28: "o",
    spanText29: "the",
    spanText30: "r",
    spanText31: "a",
    spanText32: "p",
    spanText33: "y and Immun",
    spanText34: "o",
    spanText35: "the",
    spanText36: "r",
    spanText37: "a",
    spanText38: "p",
    spanText39: "y    |    11-02-2022",
    spanText40: "R",
    spanText41: "ober",
    spanText42: "t",
    spanText43: "a Vis",
    spanText44: "c",
    spanText45: "onti, ",
    spanText46: "F",
    spanText47: "r",
    spanText48: "an",
    spanText49: "c",
    spanText50: "es",
    spanText51: "c",
    spanText52: "o Mor",
    spanText53: "r",
    spanText54: "a, Gianlu",
    spanText55: "c",
    spanText56: "a Guggin",
    spanText57: "o",
    spanText58: ", An",
    spanText59: "g",
    spanText60: "ela Cel",
    spanText61: "e",
    spanText62: "t",
    spanText63: "ti",
    group139: "/img/group-138@1x.png",
    spanText64: "C",
    spanText65: "CDC6",
    group141: "/img/group-140@1x.png",
    spanText66: "Biomar",
    spanText67: "k",
    spanText68: "e",
    spanText69: "r",
    spanText70: "s",
    group143: "/img/group-142@1x.png",
    spanText71: "L",
    spanText72: "ung neoplasms",
    group145: "/img/group-144@1x.png",
    spanText73: "Antineopla",
    spanText74: "s",
    spanText75: "tic a",
    spanText76: "g",
    spanText77: "en",
    spanText78: "t",
    spanText79: "s",
    spanText80: "L",
    spanText81: "ung ",
    spanText82: "c",
    spanText83: "an",
    spanText84: "c",
    spanText85: "er is the mo",
    spanText86: "s",
    spanText87: "t ",
    spanText88: "c",
    spanText89: "ommon ",
    spanText90: "c",
    spanText91: "an",
    spanText92: "c",
    spanText93: "er ",
    spanText94: "w",
    spanText95: "orldwide. Disappointingl",
    spanText96: "y",
    spanText97: ",",
    spanText98: "despi",
    spanText99: "t",
    spanText100: "e g",
    spanText101: "r",
    spanText102: "e",
    spanText103: "a",
    spanText104: "t e",
    spanText105: "???",
    spanText106: "ort in en",
    spanText107: "c",
    spanText108: "ou",
    spanText109: "r",
    spanText110: "aging sc",
    spanText111: "r",
    spanText112: "eening o",
    spanText113: "r",
    spanText114: ", ",
    spanText115: "a",
    spanText116: "t l",
    spanText117: "e",
    spanText118: "a",
    spanText119: "s",
    spanText120: "t",
    spanText121: ", a close",
    spanText122: "su",
    spanText123: "r",
    spanText124: "v",
    spanText125: "eillan",
    spanText126: "c",
    spanText127: "e of high-risk individuals, mo",
    spanText128: "s",
    spanText129: "t of lung ",
    spanText130: "c",
    spanText131: "an",
    spanText132: "c",
    spanText133: "e",
    spanText134: "r",
    spanText135: "s a",
    spanText136: "r",
    spanText137: "e diagnosed",
    spanText138: "when al",
    spanText139: "r",
    spanText140: "e",
    spanText141: "ady su",
    spanText142: "r",
    spanText143: "gi",
    spanText144: "c",
    spanText145: "ally un",
    spanText146: "r",
    spanText147: "ese",
    spanText148: "c",
    spanText149: "t",
    spanText150: "able be",
    spanText151: "c",
    spanText152: "ause of lo",
    spanText153: "c",
    spanText154: "al ad",
    spanText155: "v",
    spanText156: "an",
    spanText157: "c",
    spanText158: "ement o",
    spanText159: "r",
    spanText160: "...",
    group147: "/img/group-146@1x.png",
    spanText161: "R",
    spanText162: "e",
    spanText163: "ad full article",
    path107: "/img/path-107@1x.png",
    group152: "/img/group-148@1x.png",
    path108: "/img/path-108@1x.png",
    spanText164: "AS",
    spanText165: "C",
    spanText166: "O Guidelines ",
    spanText167: "P",
    spanText168: "od",
    spanText169: "c",
    spanText170: "a",
    spanText171: "s",
    spanText172: "t",
    spanText173: ", The",
    spanText174: "r",
    spanText175: "a",
    spanText176: "p",
    spanText177: "y ",
    spanText178: "f",
    spanText179: "or ",
    spanText180: "S",
    spanText181: "t",
    spanText182: "a",
    spanText183: "g",
    spanText184: "e IV NSC",
    spanText185: "L",
    spanText186: "C",
    spanText187: "Without Dri",
    spanText188: "v",
    spanText189: "er Al",
    spanText190: "t",
    spanText191: "e",
    spanText192: "r",
    spanText193: "a",
    spanText194: "tions Guideline    |    07-01-2022",
    group156: "/img/group-155@1x.png",
    spanText195: "NSC",
    spanText196: "L",
    spanText197: "C",
    group158: "/img/group-157@1x.png",
    pdL1: "PD-L1",
    group160: "/img/group-159@1x.png",
    spanText198: "Sy",
    spanText199: "s",
    spanText200: "t",
    spanText201: "em",
    spanText202: "a",
    spanText203: "tic the",
    spanText204: "r",
    spanText205: "a",
    spanText206: "p",
    spanText207: "y t",
    spanText208: "r",
    spanText209: "e",
    spanText210: "a",
    spanText211: "tment",
    group162: "/img/group-161@1x.png",
    guidelines: "Guidelines",
    spanText212: "An in",
    spanText213: "t",
    spanText214: "e",
    spanText215: "r",
    spanText216: "vi",
    spanText217: "e",
    spanText218: "w with D",
    spanText219: "r",
    spanText220: ". Nasser Hanna f",
    spanText221: "r",
    spanText222: "om Indiana",
    spanText223: "Uni",
    spanText224: "v",
    spanText225: "e",
    spanText226: "r",
    spanText227: "sity Simon Can",
    spanText228: "c",
    spanText229: "er Cen",
    spanText230: "t",
    spanText231: "er and D",
    spanText232: "r",
    spanText233: ". G",
    spanText234: "r",
    spanText235: "e",
    spanText236: "g",
    spanText237: "o",
    spanText238: "r",
    spanText239: "y Ma",
    spanText240: "s",
    spanText241: "t",
    spanText242: "e",
    spanText243: "r",
    spanText244: "s",
    spanText245: "f",
    spanText246: "r",
    spanText247: "om Helen ",
    spanText248: "F",
    spanText249: ". G",
    spanText250: "r",
    spanText251: "aham Can",
    spanText252: "c",
    spanText253: "er Cen",
    spanText254: "t",
    spanText255: "er and ",
    spanText256: "R",
    spanText257: "es",
    spanText258: "e",
    spanText259: "a",
    spanText260: "r",
    spanText261: "ch",
    spanText262: "In",
    spanText263: "s",
    spanText264: "titu",
    spanText265: "t",
    spanText266: `e on "The`,
    spanText267: "r",
    spanText268: "a",
    spanText269: "p",
    spanText270: "y ",
    spanText271: "f",
    spanText272: "or ",
    spanText273: "S",
    spanText274: "t",
    spanText275: "a",
    spanText276: "g",
    spanText277: "e IV Non",
    spanText278: "-",
    spanText279: "Small-Cell ",
    spanText280: "L",
    spanText281: "ung...",
    group164: "/img/group-163@1x.png",
    spanText282: "Li",
    spanText283: "s",
    spanText284: "t",
    spanText285: "en ",
    spanText286: "t",
    spanText287: "o pod",
    spanText288: "c",
    spanText289: "a",
    spanText290: "s",
    spanText291: "t",
    group166: "/img/group-165@1x.png",
    group168: "/img/group-167@1x.png",
    group170: "/img/group-169@1x.png",
    spanText292: "Inciden",
    spanText293: "c",
    spanText294: "e, Clini",
    spanText295: "c",
    spanText296: "al Cha",
    spanText297: "r",
    spanText298: "a",
    spanText299: "c",
    spanText300: "t",
    spanText301: "eri",
    spanText302: "s",
    spanText303: "tics, and P",
    spanText304: "r",
    spanText305: "edi",
    spanText306: "c",
    spanText307: "t",
    spanText308: "o",
    spanText309: "r",
    spanText310: "s ",
    spanText311: "o",
    spanText312: "f",
    spanText313: "Ca",
    spanText314: "r",
    spanText315: "di",
    spanText316: "o",
    spanText317: "v",
    spanText318: "ascular Immun",
    spanText319: "e",
    spanText320: "-",
    spanText321: "R",
    spanText322: "el",
    spanText323: "a",
    spanText324: "t",
    spanText325: "ed Ad",
    spanText326: "v",
    spanText327: "e",
    spanText328: "r",
    spanText329: "se ",
    spanText330: "E",
    spanText331: "v",
    spanText332: "en",
    spanText333: "t",
    spanText334: "s ",
    spanText335: "A",
    spanText336: "ssoci",
    spanText337: "a",
    spanText338: "t",
    spanText339: "ed",
    spanText340: "with Immune Checkpoint Inhibi",
    spanText341: "t",
    spanText342: "o",
    spanText343: "r",
    spanText344: "s",
    phone1: "   |    28-03-2022",
    group172: "/img/group-171@1x.png",
    spanText345: "Immun",
    spanText346: "o",
    spanText347: "the",
    spanText348: "r",
    spanText349: "a",
    spanText350: "p",
    spanText351: "y",
    group174: "/img/group-173@1x.png",
    spanText352: "L",
    spanText353: "ung neoplasms",
    group176: "/img/group-175@1x.png",
    spanText354: "Ca",
    spanText355: "r",
    spanText356: "di",
    spanText357: "o",
    spanText358: "t",
    spanText359: "o",
    spanText360: "xity",
    group178: "/img/group-177@1x.png",
    spanText361: "On",
    spanText362: "c",
    spanText363: "olo",
    spanText364: "g",
    spanText365: "y",
    overlapGroup: "/img/path-116@1x.png",
    path117: "/img/path-117@1x.png",
    path118: "/img/path-117@1x.png",
    path119: "/img/path-119@1x.png",
    path120: "/img/path-120@1x.png",
    path121: "/img/path-121@1x.png",
    path122: "/img/path-122@1x.png",
    path123: "/img/path-120@1x.png",
    path124: "/img/path-121@1x.png",
    path125: "/img/path-125@1x.png",
    path126: "/img/path-126@1x.png",
    path127: "/img/path-127@1x.png",
    path128: "/img/path-119@1x.png",
    path129: "/img/path-129@1x.png",
    path130: "/img/path-130@1x.png",
    path131: "/img/path-122@1x.png",
    path132: "/img/path-132@1x.png",
    path133: "/img/path-129@1x.png",
    path134: "/img/path-127@1x.png",
    path135: "/img/path-135@1x.png",
    path136: "/img/path-136@1x.png",
    group183: "/img/group-179@1x.png",
    path137: "/img/path-137@1x.png",
    spanText366: "Prima",
    spanText367: "r",
    spanText368: "y lung h",
    spanText369: "y",
    spanText370: "alinizing cl",
    spanText371: "e",
    spanText372: "ar ",
    spanText373: "c",
    spanText374: "ell ",
    spanText375: "c",
    spanText376: "a",
    spanText377: "r",
    spanText378: "cinoma: a diagn",
    spanText379: "o",
    spanText380: "s",
    spanText381: "tic",
    spanText382: "challen",
    spanText383: "g",
    spanText384: "e in bio",
    spanText385: "p",
    spanText386: "sy",
    phone2: "   |    27-03-2022",
    group187: "/img/group-186@1x.png",
    spanText387: "Molecular ",
    spanText388: "p",
    spanText389: "a",
    spanText390: "tholo",
    spanText391: "g",
    spanText392: "y",
    group189: "/img/group-188@1x.png",
    spanText393: "E",
    spanText394: "W",
    spanText395: "SR1-",
    spanText396: "A",
    spanText397: "TF1",
    group191: "/img/group-190@1x.png",
    spanText398: "Bio",
    spanText399: "p",
    spanText400: "sy",
    group193: "/img/group-192@1x.png",
    spanText401: "Sali",
    spanText402: "v",
    spanText403: "a",
    spanText404: "r",
    spanText405: "y gland tumo",
    spanText406: "r",
    spanText407: "s",
    group195: "/img/group-194@1x.png",
    spanText408: "H",
    spanText409: "y",
    spanText410: "alinizing cl",
    spanText411: "e",
    spanText412: "ar ",
    spanText413: "c",
    spanText414: "ell ",
    spanText415: "c",
    spanText416: "a",
    spanText417: "r",
    spanText418: "cinoma",
    group197: "/img/group-196@1x.png",
    spanText419: "L",
    spanText420: "ung",
    group199: "/img/group-198-1@1x.png",
    group3Props: group33Data,
    group9Props: group95Data,
    group10Props: group105Data,
};

const group66Data = {
    className: "group-92",
};

const group96Data = {
    src: "/img/path-3-1@1x.png",
    className: "group-93",
};

const group106Data = {
    className: "group-94",
};

const homeData = {
    spanText1: "On",
    spanText2: "connect",
    path64: "/img/path-101@1x.png",
    profile: "Profile",
    subscriptions1: "Subscriptions",
    community1: "Community",
    updates1: "Updates",
    line21: "/img/line-10-1@1x.png",
    line22: "/img/line-10-1@1x.png",
    line23: "/img/line-10-1@1x.png",
    line24: "/img/line-10-1@1x.png",
    line25: "/img/line-10-1@1x.png",
    line26: "/img/line-10-1@1x.png",
    line27: "/img/line-10-1@1x.png",
    group104: "/img/group-96@1x.png",
    group108: "/img/group-105@1x.png",
    spanText3: "On",
    spanText4: "connect",
    helpingLungOncolog: "Helping lung oncologists improve patient treatment",
    schedule: "Schedule",
    updates2: "Updates",
    subscriptions2: "Subscriptions",
    community2: "Community",
    group6Props: group66Data,
    group9Props: group96Data,
    group10Props: group106Data,
};

