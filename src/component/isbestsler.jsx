import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "./layout"



function Bestsel ({datapro}){
     const [cont,setcont]=useState(100)
        let sec= document.getElementById('secbestsel')
        let i =100
        const handelleft =()=>{
            if(cont<4150){
                setcont(cont+i)  
                setcont1(cont)  
                sec.style.transform = `translateX(-${cont}px)`;
            }
        }
         const [cont1,setcont1]=useState(100)
        const handelright =()=>{
            if(cont1>=0){
                setcont1(cont1-i)  
                setcont(cont1)  
                sec.style.transform = `translateX(-${cont1}px)`;
            }
        }
    return(
        <>

         <div className=" w-[1521px] h-[572px] mx-auto flex justify-center flex-col">
                    <h3 className=" text-[#01070D] text-[32px]  text-center mb-10">پرفروش ترین محصولات</h3>

                <div className="w-[1144px] h-[467px] flex justify-center items-center m-auto overflow-hidden p-0">
                <button className="w-[32px] h-[32px] p-0.5 h-36 text-center text-[40px]" onClick={()=>{handelright()}}>{"<"}</button>
                <div className="w-[1144px] h-[467px] flex justify-evenly m-auto overflow-hidden p-0">
                <div className="h-full flex justify-evenly m-auto gap-[20px] transition-transform" id="secbestsel">
                    {  datapro.map((pro)=>{
                        if(pro.isBestSeller == true){
                            return(
                                    <Link key={pro.id} to={`/pro/${pro.id}`}> 
                                     <div className="w-[366px] h-[467px] overflow-hidden rounded-[16px] border-[1px] border-[#CBCBCB]">
                                        <img className="w-full h-[280px]  border-b-[1px] border-[#CBCBCB] object-contain" src={pro.image}/>
                                        <div className="p-3 text-right bg-white h-[187px] flex flex-col gap-4">
                                        <h3 className="right-4 text-[16px]">{pro.title}</h3>
                                        <h5 className="right-4 text-[14px]">{pro.price} تومان</h5>
                                        <h5 className="right-4 text-[12px] text-[#404040]">{pro.size}</h5>
                                        </div>
                                    </div>
                                    </Link>
                            )
                            }
                         })}
                </div>

                </div>
                <button className="w-[32px] h-[32px] p-0.5 h-36 text-center text-[40px]" onClick={()=>{handelleft()}}>{">"}</button>
                </div>
                </div>
        </>
    )
}
export default Bestsel;