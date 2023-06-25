import { useUser } from '@/store/useUser'
import { useRouter } from 'next/navigation';
import React,{useEffect,useMemo, useState} from 'react'

const Security = ({children}:any) => {
    const {user,user:{id},setUser}=useUser();
    const router = useRouter()
    const [show ,setShow]=useState(false)
    useEffect(() => {
        const getLocal = JSON.parse(localStorage?.getItem("user")||"")
        setUser(getLocal)
        console.log(user)
        if(getLocal?.id!=undefined){
            setShow(true)
        }else{
            router.push("/signin")
            setUser({store:""})
        }
    }, [])
    
    useEffect(()=>console.log(user),[user])
  return (
    <div>{show && children}</div>
  )
}

export default Security