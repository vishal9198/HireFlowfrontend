import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import React from "react";
import toast from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function HomePage() {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => toast.success("This is a success toast")}
      >
        Click me
      </button>
      <SignedOut>
        <SignInButton>
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}

export default HomePage;
//todo:react-query aka tanstack
