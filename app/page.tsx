"use client"
import { Menu } from '@/components/Menu'
import Security from '@/components/Security'
import { useUser } from '@/store/useUser'

export default function Home() {
  const {user:{store}}=useUser()
  return (
    <Security>
      <div className='min-h-screen w-full flex relative'>
        <Menu/>
        <div>store name :{store}</div>
      </div>
    </Security>
  )
}
