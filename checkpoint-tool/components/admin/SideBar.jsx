// Navigation for the admin site

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faLock, faChartSimple, faDatabase, faBars, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <h1>Staff Tool</h1>
            <li>
              <Link href="/admin/labsCompletedPage" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <FontAwesomeIcon icon={faSquareCheck} />

                <span className="flex-1 ml-3 whitespace-nowrap">Labs Completed</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/dangerZone" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <FontAwesomeIcon icon={faTriangleExclamation} />

                <span className="flex-1 ml-3 whitespace-nowrap">Danger Zone</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/paperAdmin" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <FontAwesomeIcon icon={faLock} />
                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </Link>
            </li>
            <li>
              <a href="/admin/graphs" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <FontAwesomeIcon icon={faChartSimple} />
                <span className="flex-1 ml-3 whitespace-nowrap">Graphs</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <FontAwesomeIcon icon={faDatabase} />
                <span className="flex-1 ml-3 whitespace-nowrap">Database</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
