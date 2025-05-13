import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ClipboardList, Search, FileText, BarChart2, Sun, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-[#1f2937] text-white p-10 flex flex-wrap md:flex-nowrap items-center justify-between shadow overflow-x-auto">
      
      {/* Left Section - Logo and Portal Name (Clickable) */}
      <Link to="" className="flex items-center gap-2 mb-2 md:mb-0 min-w-fit">
        <Shield className="text-blue-500" />
        <h1 className="text-lg font-semibold whitespace-nowrap">Absconders Portal</h1>
      </Link>

      {/* Middle Section - Navigation Links (Scrollable on small screens) */}
      <nav className="flex flex-wrap md:flex-nowrap gap-3 justify-center md:justify-start overflow-x-auto py-1 px-1">
        <Link to="/viewcases" className="flex items-center gap-1 bg-[#374151] px-3 py-1 rounded-md text-sm hover:bg-[#4b5563] whitespace-nowrap">
          <ClipboardList size={16} /> View Cases
        </Link>
        <Link to="/searchrecord" className="flex items-center gap-1 bg-[#374151] px-3 py-1 rounded-md text-sm hover:bg-[#4b5563] whitespace-nowrap">
          <Search size={16} /> Search Records
        </Link>
        <Link to="/generatereport" className="flex items-center gap-1 bg-[#374151] px-3 py-1 rounded-md text-sm hover:bg-[#4b5563] whitespace-nowrap">
          <FileText size={16} /> Generate Report
        </Link>
        <Link to="/viewanalytics" className="flex items-center gap-1 bg-[#374151] px-3 py-1 rounded-md text-sm hover:bg-[#4b5563] whitespace-nowrap">
          <BarChart2 size={16} /> View Analytics
        </Link>
      </nav>

      {/* Right Section - Theme Toggle and User Info */}
      <div className="flex items-center gap-3 mt-2 md:mt-0 min-w-fit">
        <button className="p-2 rounded-md hover:bg-[#4b5563]">
          <Sun size={18} />
        </button>
        <Link to="/adminuser" className="flex items-center gap-2 bg-[#374151] px-3 py-1 rounded-md">
          <User size={16} />
          <span className="text-sm">Admin User</span>
          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Admin</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
