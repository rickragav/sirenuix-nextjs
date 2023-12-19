// components/GoogleAuthButton.js

import { useSession, signIn, signOut } from "next-auth/react";

const GoogleAuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
     
        
        <button
          className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <button
      className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
      onClick={() => signIn()}
    >
      Sign in with Google
    </button>
  );
};

export default GoogleAuthButton;
