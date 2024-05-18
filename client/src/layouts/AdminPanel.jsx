import Sidebar from '../components/admin-panel/Sidebar.jsx'
import { Outlet } from 'react-router-dom';
import AdminPanelHeader from '../components/admin-panel/AdminPanelHeader.jsx';

const AdminPanel = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen overflow-hidden">
                {/* <!-- ===== Sidebar Start ===== --> */}
                {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                <div className='w-0 md:w-[266px] transition-all duration-500 ease-in-out'>
                    {<Sidebar />}
                </div>
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-dashboardBg space-y-7">
                    {/* <!-- ===== Header Start ===== --> */}
                    {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                    <AdminPanelHeader/>
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