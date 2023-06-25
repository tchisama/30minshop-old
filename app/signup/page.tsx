"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, pagesRef, storesNameRef, storesRef, usersRef } from "@/firebase";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useUser } from "@/store/useUser";
import { useRouter } from 'next/navigation'

const Page = () => {
  const [step,setStep]=useState(0)
  const router = useRouter()
  const {user,setUser}=useUser()

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")


  const [err,setErr]=useState<null|string>(null)


  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")

  const [store,setStore]=useState("")
  const [storeChecked,setStoreChecked]=useState<null|boolean>(null)




  useEffect(() => {
    setErr(null)
  }, [email,password,confirmPassword])
  
  useEffect(() => {
    setStoreChecked(null)
  }, [store])

  const next=()=>{

    if(step==0){
      if(password===confirmPassword){
        createUserWithEmailAndPassword(auth,email,password)
          .then(cred=>{
            console.log(cred.user)
            setStep(p=>p+1)
            setErr(null)
          })
          .catch(err=>{
            setErr("something went wrong")
          })
      }else{
        setErr("passwords must match")
      }
    }else if(step==1){
           setStep(p=>p+1)
    }else if(step==2){
        check()
        if(storeChecked===false){
          addDoc(usersRef,{
              email,
              password,
              firstName,
              lastName,
              phoneNumber,
              store
          }).then(()=>{
            addDoc(storesNameRef,{
              name:store
            }).then(()=>{
              console.log("all good")
              setStoreChecked(null)
              getDocs(query(usersRef,where("store","==",store))).then(screen=>{
                setUser({
                  ...screen.docs[0].data(),id:screen.docs[0].id
                })
                localStorage.setItem("user",JSON.stringify({...screen.docs[0].data(),id:screen.docs[0].id,password:""}))
                console.log({...screen.docs[0].data(),id:screen.docs[0].id})
                router.push("/")
              })

              addDoc(pagesRef,{
                data:[],
                links:[{name:"home",url:"",show:true}],
                name:"home",
                store,
                url:""
              })
              addDoc(storesRef,{
                name:store,
              })
            })
          })
        }
    }

  }

  const check = ()=>{
    const q = query(storesNameRef,where("name","==",store))
    getDocs(q).then(snapshot=>{
      setStoreChecked(snapshot.docs.length != 0)
    })
  }

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <div className="w-full flex flex-col gap-2 bg-white mx-auto max-w-[500px] p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl text-primary font-medium my-4">Sign up</h1>
          <ul className="steps py-4 w-full">
            {
              new Array(3).fill("").map((m,i)=>(
                  <li key={i} className={"step "+(i<=step&&"step-primary") }></li>
              ))
            }
          </ul>


            {
              step==0 &&
              <>
                <input 
                  value={email}
                  onInput={(e)=>setEmail((e.target as any).value)}
                  placeholder="email" className="input input-bordered"></input>
                <input
                  placeholder="password"
                  type="password"
                  value={password}
                  onInput={(e)=>setPassword((e.target as any).value)}
                  className="input input-bordered"
                ></input>
                <input
                  placeholder="confirm password"
                  type="password"
                  value={confirmPassword}
                  onInput={(e)=>setConfirmPassword((e.target as any).value)}
                  className="input input-bordered"
                ></input>
              </>
            }

            {
              step==1 &&
              <>
                <input 
                  value={firstName}
                  onInput={(e)=>setFirstName((e.target as any).value)}
                placeholder="first name" className="input input-bordered"></input>
                <input
                  value={lastName}
                  onInput={(e)=>setLastName((e.target as any).value)}
                  placeholder="last name"
                  type="text"
                  className="input input-bordered"
                ></input>
                <input
                  value={phoneNumber}
                  onInput={(e)=>setPhoneNumber((e.target as any).value)}
                  placeholder="phone number"
                  type="tel"
                  className="input input-bordered"
                ></input>
              </>
            }

            {
              step==2 &&
              <div className="flex gap-2">
                <input value={store} onInput={(e)=>{setStore((e.target as any).value)}} placeholder="name of store" className="input flex-1 input-bordered"></input>
                <button onClick={check} className="btn">check</button>
              </div>
            }

            {
              err && <p className="text-error">{err}</p>
            }
            {
              storeChecked===true && <p className="text-error">store name already token</p>
            }
            {
              storeChecked===false && <p className="text-primary">great choose</p>
            }

        <div className="flex gap-2 mt-2">
        <button onClick={next} className="btn flex-1 btn-primary">next</button>
        </div>
        <p className="pt-2">
          you have already an account{" "}
          <Link href={"/signin"} className="text-primary">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
