import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useTheme } from "../../Context/Theme-Context";
import "./Home.css"
const Home = () => {
    const { themeObject } = useTheme();
  return (
    <div
      className="home__container flex flex-col"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div className="home__wrapper  rounded-3xl">
        <Navbar />
        <div className="main__container flex m-8">
          <Sidebar />
          <div
            className="app__container rounded-xl"
            style={{ backgroundColor: themeObject.secondary }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home