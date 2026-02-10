import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
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
          <img
            className="w-12 h-12"
            alt="userIcon"
            src="https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTtzfQn_TnlmI0dXn5jkfRFxmK1cjkW0zvz_qkvE4MT05lZLOhPuyHXGLF4EaOKu7aYlkrYf3X_a_af3ubt2_hek8y0rYcVBbw.png?r=181"
          />
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
