import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-gradient">
      <div className="flex items-center justify-center min-h-screen px-5 container ">
        <div className="w-full max-w-md text-white">
          <div className="flex flex-col items-center mb-8 gap-4">
            <h1 className="font-semibold text-2xl mb-4">Profile</h1>
            <img
              src="avatar.png"
              alt="Avatar"
              className="rounded-full w-32 h-32 object-cover"
            />
            <p className="underline underline-offset-2 cursor-pointer">
              Edit profile picture
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-5">
            {/* Profile Info */}
            <div className="grid grid-cols-2 gap-2 border-b border-gray-500 pb-6">
              <div className="text-gray-300">Name</div>
              <div className="font-semibold text-end">
                Ratu Faradiba Adiazahra
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-gray-500 pb-6">
              <div className="text-gray-300">Email</div>
              <div className="font-semibold text-end">
                faradibaratu12@gmail.com
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-gray-500 pb-6">
              <div className="text-gray-300">Phone</div>
              <div className="font-semibold text-end">+62 82183124677</div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-gray-500 pb-6">
              <div className="text-gray-300">Date of Birth</div>
              <div className="font-semibold text-end">21 Juni 2004</div>
            </div>

            {/* Change Password */}
            <div className="text-center">
              <a
                href="#"
                className="text-sm underline underline-offset-2 cursor-pointer"
              >
                Change Password
              </a>
            </div>

            {/* Logout Button */}
            <NavLink to="/login">
              <button className="w-full py-3 bg-primary  text-white font-semibold rounded-xl mt-4 mb-8">
                Logout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
