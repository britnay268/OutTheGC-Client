/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-white pb-0 pt-0 h-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link className="p-1" href="/trips" passHref>
                Trips
              </Link>
              <Link className="p-1" href="/community" passHref>
                Community
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img className="w-15 h-20" alt="OutTheGC logo" src="/images/FullLogo_Transparent.png" />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex items-center">
              <div className="w-8 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/profile" passHref>
                  Profile
                </Link>
              </li>
              <li>
                <button type="button" onClick={signOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <a className="mr-2 text-black">Username</a>
        </div>
      </div>
      <hr className="border-b-4 border-customTeal mx-2" />
    </>
  );
}
