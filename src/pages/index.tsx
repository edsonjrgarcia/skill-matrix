import { Header } from '@/components/header'
import { Inter } from 'next/font/google'
//import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //const [session, loading] = useSession();


  return (
    <>
      <Header>
      </Header>
    </>
  )
}
