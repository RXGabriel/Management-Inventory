"use client";

import { Menu } from "lucide-react";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">GBSTOCK</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
          <Menu className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-grow mt-8">Links</div>

      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Gbstock</p>
      </div>
    </div>
  );
};

export default Sidebar;
