import SideBar from './SideBar'
 
const Layout = ({ children }) => {
  return (
    <div className='flex flex-row'>
    <div>
      <SideBar />
      </div>
      <div className='ml-64 w-1/2 flex justify-center items-center w-full'>
      <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout;