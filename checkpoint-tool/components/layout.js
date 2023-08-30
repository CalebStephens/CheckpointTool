import SideBar from './SideBar'
 
const Layout = ({ children }) => {
  return (
    <div className='flex flex-row'>
    <div>
      <SideBar />
      </div>
      <div className='ml-64 w-1/2 bg-neutral-400'>
      <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout;