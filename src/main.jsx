import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Avatar from "./components/share/qwest/Avatar.jsx";
import Fire from "./components/share/qwest/Fire.jsx";
import LastScene from "./components/mahtot/qwest/LastScene.jsx";

import {
  Login,
  Signup,
  Reset,
  Header,
  Settings,
  Rewards,
  Myprofile,
  HomePage,
  Profile,
  Survey,
  Research,
  SettingsRes,
  Draft,
  PreviewSurvey,
  NewResearch,
  ScheduledResearch,
  Create,
  Insights,
  Verify,
  Qwest,
  QwestSec
} from "./routes/Index.jsx";
import SurveyProviders from "./context/Survey/SurveyProviders";
import Providers from "./context/Provider/Providers.jsx";
// import QwestSec from "./routes/Index.jsx";

function App() {
  return (
    <ThemeProvider>
      <Providers>
      <SurveyProviders>      
        <React.StrictMode>
        <BrowserRouter>
          <Routes>
            
            {/* Route for homepage */}
            <Route path="/" element={<Header />} />

            {/* Route for authentication */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path='/verify' element={<Verify/>} />
            {/* Route for Researcher's page */}
            <Route path="/researcher/home" element={<HomePage />} />
            <Route path="/researcher/settings" element={<SettingsRes />} />
            <Route path="/researcher/research" element={<Research />} />
            <Route path="/researcher/draft" element={<Draft />} />
            <Route path="/researcher/profile" element={<Profile />} />
            <Route path="/researcher/survey" element={<Survey />} />
            <Route path="/researcher/preview-survey" element={<PreviewSurvey/>} />
            <Route path="/researcher/new-research" element={<NewResearch/>} />
            <Route path="researcher/Scheduled-researches" element={<ScheduledResearch/>} />
            <Route path='researcher/create' element={<Create/>} />
            <Route path='researcher/insight/:parameter' element={<Insights/>} />

            
            {/* Route for Participant's page */}
            <Route path="/signedUp/Settings" element={<Settings />} />
            <Route path="/signedUp/rewards" element={<Rewards />} />
            <Route path="/signedUp/my-profile" element={<Myprofile />} />
            <Route path="/signedUp/qwest-game" element={< Qwest/>}/>
            <Route path="/signedUp/qwest-game-sec" element={< QwestSec/>}/>
            <Route path="/fire" element={<Fire/>}/>
            <Route path="/avatar" element={<Avatar/>}/>
            <Route path="/last" element={<LastScene/>}/>

          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      </SurveyProviders>
      </Providers>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
