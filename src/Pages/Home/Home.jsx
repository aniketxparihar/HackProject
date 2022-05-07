import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Home.css"
const Home = () => {
  return (
    <div className="home__container flex flex-col">
      <div className="home__wrapper  rounded-3xl">
        <Navbar />
        <div className="main__container flex m-8">
          <Sidebar />
          <div className="app__container bg-gray-400 rounded-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home