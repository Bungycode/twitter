import Image from "next/Image";
import { HomeIcon } from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsHorizontalIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline";

import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-12">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
          alt="Twitter Icon"
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" >Tweet</button>

      {/* Mini-Profile */}

    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
      <Image className="h-16 w-16 rounded-full xl:mr-2" width="100" height="100" src="/profile-picture.jpg" alt="User-img" priority></Image>
      <div className="leading-5 hidden xl:inline">
      <h4 className="font-bold">Andrew Bungcayao</h4>
      <p className="text-gray-500">@thedev_andrew</p>
      </div>
      <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
    </div>

    </div>
  );
}
