import React from "react";
import { Menu } from "lucide-react";

const PlaylistHeader = () => {
  return (
    <div className="flex justify-end items-center h-12 w-full px-6">
      <button className=" hover:cursor-pointer rounded-full">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PlaylistHeader;
