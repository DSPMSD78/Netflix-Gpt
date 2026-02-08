import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute inset-0 h-screen w-screen object-cover"
          alt="Background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_medium.jpg"
        />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 w-full md:w-4/12 h-fit m-auto top-0 bottom-0 right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="p-4 my-4 w-full bg-gray-900 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-900 rounded-lg"
        />
        <button className="bg-red-600 p-4 my-6 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already a user ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
