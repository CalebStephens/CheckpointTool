import SideBar from './SideBar'
 
const Layout = ({ children }) => {
  return (
    <div>
    <div>
      <SideBar />
      </div>
      <div>
      <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout;