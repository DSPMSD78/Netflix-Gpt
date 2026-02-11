import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { logoutUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(logoutUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      {/* <img className="w-40" alt="Netflix Logo" src={logo} /> */}
      <div>
        <h1
          className="w-fit m-auto text-red-600 font-bold text-3xl tracking-tighter uppercase italic"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            transform: "scaleY(1.4) scaleX(0.9)", // Mimics the stretched Netflix look
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Movieflex<span className="text-white">GPT</span>
        </h1>
      </div>
      {user && (
        <div className="flex items-center justify-evenly">
          <img className="w-12 h-12" alt="userIcon" src={user.photoURL} />
          <p className="font-bold text-white mx-1 px-1">{user.displayName}</p>
          <button
            onClick={handleSignOut}
            className="font-bold text-white mx-1 px-1 w-full rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
