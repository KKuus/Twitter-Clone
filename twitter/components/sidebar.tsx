import React from "react";

const Sidebar = () => {
    return (
        <div className="hidden md:block w-1/4 h-screen bg-white border-r border-gray-300">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-bold">Sidebar</h1>
                <p className="text-gray-500">This is the sidebar content.</p>
            </div>
        </div>
    );
}  

export default Sidebar;