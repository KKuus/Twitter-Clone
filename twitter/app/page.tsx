import logo from "./images/twitter.png";
import home from "./images/home.png";
import bell from "./images/bell.png";
import profile from "./images/profile.png";


export default function Home() {
  return (
    <div className="flex">
      <div className="bg-black h-screen w-1/3">
        <div className="contents">
            <img src={logo.src} alt="twitter" width={50} height={50} />
          <ul>
            
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
          </ul>
        </div>
      </div>
      <div className="feed h-screen w-1/3 bg-blue-700"></div>
      <div className="trending h-screen w-1/3 bg-black"></div>
    </div>
  );
}

