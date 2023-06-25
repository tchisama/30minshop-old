"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/public/Logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, usersRef } from '@/firebase'
import { getDocs, query, where } from 'firebase/firestore'
import { useUser } from '@/store/useUser'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [ email,setEmail]=useState("")
    const [ password,setPassword]=useState("")
    const [err,setErr]=useState<null|string>(null)
    const router = useRouter()
    const {setUser}=useUser()
    useEffect(()=>setErr(null),[email,password])
    const signIn = ()=>{
        signInWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                getDocs(query(usersRef,where("email","==",email))).then(screen=>{
                    setUser({
                    ...screen.docs[0].data(),id:screen.docs[0].id
                    })
                    console.log({...screen.docs[0].data(),id:screen.docs[0].id})
                    localStorage.setItem("user",JSON.stringify({...screen.docs[0].data(),id:screen.docs[0].id,password:""}))
                    router.push("/")
                })
            })
            .catch(err=>setErr("something went wrong"))
    }
  return (
    <div className='w-full flex  items-center min-h-screen'>
        <div className='w-full flex flex-col gap-2 bg-white mx-auto max-w-[500px] p-8 rounded-xl shadow-xl'>
            <h1 className='text-4xl text-primary font-medium my-4'>Sign In</h1>
            <input value={email} onInput={(e)=>setEmail((e.target as any).value)} placeholder='email' className='input input-bordered'></input>
            <input value={password} onInput={(e)=>setPassword((e.target as any).value)} placeholder='password' type='password' className='input input-bordered'></input>
            {err!=null && <p>something went wrong</p>}
            <Link href={""} className='py-1'>forget your password</Link>
            <button onClick={signIn} className='btn btn-primary'>sing in</button>
            <p className='pt-2'>you don't have an already <Link href={"/signup"} className='text-primary'>sign up</Link></p>
        </div>
    </div>
  )
}

export default Page