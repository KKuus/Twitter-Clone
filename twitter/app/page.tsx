import logo from "./images/Twitter.jpg";
import home from "./images/home.png";
import bell from "./images/bell.png";
import profile from "./images/profile.png";
import settings from "./images/settings.png";


export default function Home() {
  return (
    <div className="flex">
      <div className="bg-black h-screen w-1/3 border border-neutral-500">
        <div className="contents">
            <img src={logo.src} alt="twitter" width={50} height={50} />
          <ul className="float-right">
            
              <li>
              <button className="bg-transparent hover:bg-highlight text-2xl text-white py-2 px-5 hover:border-transparent rounded-full flex items-center" style={{ fontFamily: 'Helvetica' }}>
                <img src={home.src} alt="home" className="mr-2" />
                Home
              </button>
              </li>
              <li>
              <button className="bg-transparent hover:bg-highlight text-2xl text-white py-2 px-5 hover:border-transparent rounded-full flex items-center" style={{ fontFamily: 'Helvetica' }}>
                <img src={bell.src} alt="home" className="mr-2" />
                Notifications
              </button>
              </li>
              <li>
              <button className="bg-transparent hover:bg-highlight text-2xl text-white py-2 px-5 hover:border-transparent rounded-full flex items-center" style={{ fontFamily: 'Helvetica' }}>
                <img src={profile.src} alt="home" className="mr-2" />
                Profile
              </button>
              </li>
              <li>
              <button className="bg-transparent hover:bg-highlight text-2xl text-white py-2 px-5 hover:border-transparent rounded-full flex items-center" style={{ fontFamily: 'Helvetica' }}>
                <img src={settings.src} alt="settings" className="mr-2" />
                Settings
              </button>
              </li>
              <li>
              <button className="h-10 w-40 bg-white rounded-full " style={{ fontFamily: 'Helvetica' }}>
                Post
                </button>
              </li>
          </ul>
        </div>
      </div>
      <div className="feed h-screen w-1/3 bg-black border border-neutral-500">
      <div className="h-20 w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-neutral-500">
        <p className="text-white text-center mt-6">Following</p>
      </div>
      </div>
      <div className="trending h-screen w-1/3 bg-black">
      <div className="border border-neutral-500 rounded-md h-40 w-80 ml-6 mt-10">
        <p className="text-white font-bold text-left mt-2 ml-2">Who to follow</p>
      </div>
      <div className="border border-neutral-500 rounded-md h-80 w-80 ml-6 mt-10">
      <p className="text-white font-bold text-left mt-2 ml-2">What's happening?</p>
      </div>
      </div>
    </div>
  );
}

