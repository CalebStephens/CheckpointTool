import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBriefcase, faSquareCheck, faLock, faChartSimple, faToolbox,  faDatabase, faTable, faBars, faTriangleExclamation, faHouse } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <h1>Staff Tool</h1>
            <li>
              <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faHouse} />

                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
            <li>
              <Link href="./admin/labsCompletedPage" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faSquareCheck} />

                <span className="flex-1 ml-3 whitespace-nowrap">Labs Completed</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/dangerZone" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTriangleExclamation} />

                <span className="flex-1 ml-3 whitespace-nowrap">Danger Zone</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/addLabs" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faBriefcase} />

                <span class="flex-1 ml-3 whitespace-nowrap">Labs</span>
              </Link>
            </li>
            <li>
              <a href="/admin/paperSetup" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faLock} />
                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faChartSimple} />
                <span className="flex-1 ml-3 whitespace-nowrap">Graphs</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faDatabase} />
                <span className="flex-1 ml-3 whitespace-nowrap">Database</span>
              </a>
            </li>
            <li>
              <a href="/admin/showtables" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTable} />
                <span className="flex-1 ml-3 whitespace-nowrap">Show Tables</span>
              </a>
            </li>
            <li>
              <a href="/admin/updateTools" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faToolbox} />
                <span className="flex-1 ml-3 whitespace-nowrap">Update Tool</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
