import React, { useRef, useState } from "react"
import { Link } from "react-router"
import Home from "./home"




const Login =({setuser})=>{
    const valuser = useRef()
    const valotp = useRef()
    const [status,setstatus]=useState(false)
    const [otp,setotp]=useState()
    const [masage,setmasage]=useState(false)
    const [storg,setstorg]=useState()
    const gotopage =()=>{
        if(valuser.current.value != 0){
            setotp(Math.floor(Math.random() * 9999)+1000)
            setstatus(true)
            setstorg(valuser.current.value)
        }
    }
    if(status == false){
        return(
            <div className="flex w-full h-[100vh]">
                    <div className="w-[50%] h-full flex justify-center items-center bg-[#010A13]">
                    <img className="w-full h-full relative opacity-[8%]" src="/public/pi/82774be60c539d0ad5584cbb1778488786384a2a.png"/>
                        <div className="w-[259px] h-[109px] absolute">
                        <img className=" h-full w-full object-contain" src="/src/img/logo/logo.png" alt="logo"/>
                        <Link to={`/`}>
                        <button className="w-full h-[24px] text-[14px] bg-transparent rounded-sm text-white flex justify-center items-center gap-2">برگشت به خانه<img className="w-[21px] h-[21px]" src="/public/shop-svgrepo-com.png"/></button>
                        </Link>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center">
                         <div className="w-[456px] h-[289px] p-[32px] text-right border-[1px] border-[#EDEDED] rounded-[8px]">
                         <h2 className="text-right text-[28px] mb-[32px]">ورود|ثبت نام</h2>
                         <label className="text-[#606060]">لطفا شماره موبایل یا ایمیل خود را وارد کنید</label>
                         <input type="text" placeholder="*********09 یا Example@gmail.com" className="w-full h-[48px] rounded-sm mb-[32px] border-[1px] border-[#EDEDED] text-right text-[15px] p-2" ref={valuser} />
                        <button className="w-full h-[48px] text-[14px] bg-[#FA541C] rounded-sm text-white flex justify-center items-center gap-2" onClick={gotopage}>ادامه</button>
                        </div>
                    </div>
            </div>
        )
        
    } else{
        console.log(otp);
        
         const finalotp =()=>{
        if(valotp.current.value == otp){
            setmasage(true)
            setuser(storg)
        }
        else{
            setmasage(false)
            alert("کد را اشتباه وارد کردی")
            console.log("no");
            console.log(valotp.current.value);    
        }
    }
        return(
            <>
                 <div className="flex w-full h-[100vh]">
                    <div className="w-[50%] h-full flex justify-center items-center bg-[#010A13]">
                    <img className="w-full h-full relative opacity-[8%]" src="/public/pi/82774be60c539d0ad5584cbb1778488786384a2a.png"/>
                        <div className="w-[259px] h-[109px] absolute">
                        <img className=" h-full w-full object-contain" src="/src/img/logo/logo.png" alt="logo"/>
                        <Link to={`/`}>
                        <button className="w-full h-[24px] text-[14px] bg-transparent rounded-sm text-white flex justify-center items-center gap-2">برگشت به خانه<img className="w-[21px] h-[21px]" src="/public/shop-svgrepo-com.png"/></button>
                        </Link>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center">
                         <div className="w-[456px] h-[289px] p-[32px] border-[1px] border-[#EDEDED] rounded-[8px] text-center">
                         <h2 className="text-right text-[28px] mb-[32px]">کد تایید را وارد کنید</h2>
                         <input type="text" placeholder="...." className="w-[270px] h-[48px] mx-auto rounded-sm mb-[32px] border-[1px] border-[#EDEDED] text-right text-[15px] p-2" id="valotp" ref={valotp}/>
                         <h2 className="text-center text-green-600 text-[18px] ">{masage ? "با موفقیت وارد شدید" : "کد را وارد کنید"}</h2>
                         <div className="flex justify-between text-[#606060] m-2">
                         <span>ارسال دوباره</span>
                         <span>کد برای شما ارسال شد</span>
                         </div>
                        {!masage ? <button className="w-full h-[48px] text-[14px] bg-[#FA541C] rounded-sm text-white flex justify-center items-center gap-2" onClick={finalotp}>ادامه</button> : <Link to={"/"}><button className="w-full h-[48px] text-[14px] bg-[#FA541C] rounded-sm text-white flex justify-center items-center gap-2">ورود به صفحه اصلی</button></Link> }
                        </div>
                    </div>
            </div>
            </>
        )
    }
}
export default Login