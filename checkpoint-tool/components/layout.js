import SideBar from './SideBar'
 
export default function Layout({ children }) {
  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  )
}