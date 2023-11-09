import SideBar from './SideBar'
 
const Layout = ({ children }) => {
  return (
    <div className='flex flex-row'>
    <div>
      <SideBar />
      </div>
      <div className='ml-48 flex justify-center items-center w-full'>
      <main className='w-full pl-2 pr-2'>
        {children}</main>
      </div>
    </div>
  )
}

export default Layout;