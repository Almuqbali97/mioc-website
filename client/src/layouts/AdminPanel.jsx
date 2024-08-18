import Sidebar from '../components/admin-panel/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import AdminPanelHeader from '../components/admin-panel/AdminPanelHeader.jsx';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const AdminPanel = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen overflow-hidden">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <div className="relative">
                    {/* Toggle Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 focus:outline-none z-50 relative"
                        onClick={toggleSidebar}
                    >
                        {sidebarOpen ? <FaTimes size={10} /> : <FaBars size={15} />}
                    </button>

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 left-0 h-full bg-white z-40 transition-all duration-500 ease-in-out ${sidebarOpen ? 'w-[266px]' : 'w-0'
                            } md:w-[266px] overflow-y-auto shadow-lg`}
                    >
                        <Sidebar />
                    </div>

                    {/* Main Content */}
                    <div
                        className={`ml-0 md:ml-[266px] transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-[266px]' : ''
                            }`}
                    >
                        {/* Your main content goes here */}
                    </div>
                </div>
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-dashboardBg space-y-7">
                    {/* <!-- ===== Header Start ===== --> */}
                    <AdminPanelHeader />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="m-2 md:ml-3 md:mr-3 max-w-screen-2xl p-1 md:p-6 2xl:p-1">
                            <Outlet />
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
    );
};

export default AdminPanel;
