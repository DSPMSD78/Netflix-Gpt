import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    // <div>
    //   <Header />
    //   <main className="absolute p-12 bg-black/70 w-full md:w-4/12 h-fit m-auto inset-0 text-white rounded-lg">
    //     <h1 className="text-4xl font-bold">
    //       Welcome - {user?.displayName || "User"}
    //     </h1>
    //   </main>
    // </div>
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center p-4">
        {/* text-2xl: Base size for mobile
            md:text-5xl: Larger size for tablets/laptops
            whitespace-nowrap: Forces text to stay on one line
            truncate: Adds "..." if the name is way too long for the screen
        */}
        <h1 className="text-2xl md:text-5xl font-bold text-red-600 whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-4">
          {user?.displayName ? `Welcome, ${user.displayName}` : "Loading..."}
        </h1>
      </main>
    </div>
  );
};

export default Browse;
