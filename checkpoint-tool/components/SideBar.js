  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faSquareCheck, faLock, faChartSimple, faDatabase, faTable, faBars } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FontAwesomeIcon icon={faCoffee} />

                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FontAwesomeIcon icon={faSquareCheck} />

                <span class="flex-1 ml-3 whitespace-nowrap">Labs Completed</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FontAwesomeIcon icon={faLock} />
                <span class="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
              <FontAwesomeIcon icon={faChartSimple} />
                <span class="flex-1 ml-3 whitespace-nowrap">Graphs</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
              <FontAwesomeIcon icon={faDatabase} />
                <span class="flex-1 ml-3 whitespace-nowrap">Database</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
              <FontAwesomeIcon icon={faTable} />
                <span class="flex-1 ml-3 whitespace-nowrap">Show Tables</span>
              </a>
            </li>
            
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;