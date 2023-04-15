import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import CreateSession from "views/admin/createsession";

// import RTLDefault from "views/rtl/default";

// Auth Imports
// import SignIn from "views/auth/SignIn";

// Icon Imports

import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdAddBox
  // MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Create Session",
    layout: "/admin",
    icon: <MdAddBox className="h-6 w-6"/>,
    path: "create-session",
    component: <CreateSession/>,

  },
  {
    name: "Sessions",
    layout: "/admin",
    path: "sessions",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {

    name: "Lecture Title",
    layout: "/admin",
    icon: "",
    path: "current",
    component: "",

  },
  {
    name: "Quiz",
    layout: "/admin",
    icon: "",
    path: "quiz",
    component: "",
    
  },
  {
    name: "Responses",
    layout: "/admin",
    icon: "",
    path: "responses",
    component: "",
    
  },
  {
    name: "Lecture",
    layout: "/admin",
    icon: "",
    path: "lecture",
    component: "",
    
  },
  {
    name: "Summary",
    layout: "/admin",
    icon: "",
    path: "summary",
    component: "",
    
  }

  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
