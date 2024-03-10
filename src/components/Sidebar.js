import React from "react";

const Sidebar = () => {
  const sidebarMenu = ['Boards','Members','Workspace Settings','Table','Calendar']
  return <div className={`p-3 w-[300px] border-t  sidebar `}>
    {sidebarMenu.map((item)=><div key={item} className="mt-2">{item}</div>)}
  </div>;
};

export default Sidebar;
