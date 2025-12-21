import { useState } from "react";

import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to the HireFlow</h1>

      <SignedOut>
        <SignInButton mode="model" />
        <button>Login</button>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <UserButton />
    </>
  );
}

export default App;
//ingest is used to connect mongodb with clerk //
