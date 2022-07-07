import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "pages/DashboardPage";
import CampaignPage from "pages/CampaignPage";
import StartCampaignPage from "pages/StartCampaignPage";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/start-campaign"
          element={<StartCampaignPage></StartCampaignPage>}
        ></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
