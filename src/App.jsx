import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ProblemPage from "./pages/ProblemPage.jsx";
import { Toaster } from "react-hot-toast";


  

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/problem" element={<ProblemPage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
//ingest is used to connect mongodb with clerk //
