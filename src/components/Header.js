const Header = () => {
  return (
    <div className="absolute py-2 bg-gradient-to-b from-black z-10">
      {/* <img className="w-40" alt="Netflix Logo" src={logo} /> */}
      <h1
        className="w-40 text-red-600 font-bold text-3xl tracking-tighter uppercase italic"
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          transform: "scaleY(1.4) scaleX(0.9)", // Mimics the stretched Netflix look
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Movieflex<span className="text-white">GPT</span>
      </h1>
    </div>
  );
};

export default Header;
