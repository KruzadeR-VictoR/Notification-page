import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App min-h-screen bg-gray-100 md:flex md:justify-center md:items-center">
        <div className="App-body min-h-screen md:min-h-fit w-[90%] max-w-[40rem] bg-White mx-auto py-5 md:pb-0 px-4 md:rounded-lg">
          <div className="header flex justify-between items-center mb-5">
            <div className="notification-heading flex items-center gap-x-3">
              <h1 className="text-xl font-extra-bold">Notifications</h1>
              <span className="bg-Blue px-3 py-0 rounded-md text-White">3</span>
            </div>
            <span className="text-[.9rem] font-medium text-darkGrayishBlue cursor-pointer hover:text-Blue">
              Mark all as read
            </span>
          </div>
          <div className="notifications flex flex-col gap-3">
            {/* notification-1 Mark  */}
            <div className="Mark bg-verylgBlue flex items-center gap-x-5 p-3 rounded-lg">
              <img
                className="self-start"
                src="../src/assets/avatar-mark-webber.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Mark Webber</span> reacted to
                  your recent post
                  <span className="text-darkGrayishBlue font-bold ml-1 cursor-pointer hover:text-Blue">
                    My tournament today!
                  </span>
                  <span className="ol bg-Red inline-block w-[8px] aspect-square rounded-full ml-1"></span>
                </p>
                <span className="text-sm text-gray-400">1m ago</span>
              </div>
            </div>
            {/* notification-2 Angela  */}
            <div className="Angela bg-verylgBlue flex items-center gap-x-5 p-3 rounded-lg">
              <img
                className="self-start"
                src="../src/assets/avatar-angela-gray.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Angela Gray </span>followed you
                  <span className="ol bg-Red inline-block w-[8px] aspect-square rounded-full ml-1"></span>
                </p>
                <span className="text-sm text-gray-400">5m ago</span>
              </div>
            </div>
            {/* notification-3  */}
            <div className="Jacob bg-verylgBlue flex items-center gap-x-5 p-3 rounded-lg">
              <img
                className="self-start"
                src="../src/assets/avatar-jacob-thompson.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Jacob Thompson</span> has joined
                  your group
                  <span className="text-Blue font-bold ml-1 cursor-pointer">
                   Chess Club
                  </span>
                  <span className="ol bg-Red inline-block w-[8px] aspect-square rounded-full ml-1"></span>
                </p>
                <span className="text-sm text-gray-400">1 day ago</span>
              </div>
            </div>
            {/* notification-4 Rizky */}
            <div className="Rizky bg-White flex items-center gap-x-5 p-3 rounded-lg">
              <img
                className="self-start"
                src="../src/assets/avatar-rizky-hasanuddin.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Rizky Hasanuddin</span> sent you a private message
                  <span className="block text-sm text-gray-400">5 day ago</span>
                  <p className="border p-4 mt-3 rounded-md cursor-pointer hover:bg-lightGrayishBlue1">hello, thanks for setting up the Chess Club.I've been a member for a week now and I'm already having lots of fun and improving my game.</p>
                </p>                
              </div>
            </div>
            {/* notification-5 Kimberly */}
            <div className="Kimberly bg-White flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-x-5">
              <img
                className="self-start"
                src="../src/assets/avatar-kimberly-smith.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Kimberly Smith</span> commented on your picture
                </p>
                <span className="text-sm text-gray-400">1 week ago</span>
              </div>
              </div>
              <img className="self-start cursor-pointer" src="../src/assets/image-chess.webp" alt="" />
            </div>
            {/* notification-6 Nathan */}
            <div className="Natha bg-White flex items-center gap-x-5 p-3 rounded-lg">
              <img
                className="self-start"
                src="../src/assets/avatar-nathan-peterson.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Nathan Peterson</span> reacted to your recent post
                  <span className="text-darkGrayishBlue font-bold ml-1 cursor-pointer hover:text-Blue">
                   5 end-game strategies to increase your win rate
                  </span>
                </p>
                <span className="text-sm text-gray-400">2 weeks ago</span>
              </div>
            </div>
            {/* notification-7 Anna */}
            <div className="Anna bg-White flex items-center gap-x-5 p-3 rounded-lg">
              <img
                className="self-start"
                src="../src/assets/avatar-anna-kim.webp"
                alt=""
              />
              <div className="notification">
                <p className="text-sm text-darkGrayishBlue">
                  <span className="text-darkBlue mr-1 cursor-pointer hover:text-Blue">Anna Kim</span> has left
                  the group
                  <span className="text-darkGrayishBlue font-bold ml-1 cursor-pointer hover:text-Blue">
                   Chess Club
                  </span>
                </p>
                <span className="text-sm text-gray-400">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
