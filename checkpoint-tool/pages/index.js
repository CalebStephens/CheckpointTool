import SideBar from '@/components/SideBar'
import LabsCompleted from '@/components/LabsCompleted'
import ShowTables from '@/components/ShowTables'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <ShowTables/>

    </main>
  )
}
