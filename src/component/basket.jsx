import React from "react"
import { useState } from "react";
import { data, Link } from "react-router-dom";
import Layout from "./layout";


const Basket = (prop)=>{
    const dat =prop.data
    const removeitem=(id,price)=>{
        console.log("click");
        const newdata = dat.filter((item,index) => index !== id);
        prop.basketdata(newdata)
        prop.setprice(prev=>prev-price)
    }
    if(dat.length == 0){
        return(
            <Layout user={prop.user}>
                <div className="w-[500px] m-auto">
                    <img src="/cartzero.png" />
                    <h4 className="text-[18px] text-[#404040] text-center">به نظر می رسد هنوز محصولی به سبد خرید خود اضافه نکردید</h4>
                    <Link to={'/allproduct'} className="w-[80px] h-[30px] py-1 text-center bg-black rounded-2xl text-white block mx-auto my-5" >ادامه خرید</Link>
                </div>
            </Layout>
        )
    }
    
    return(
        <Layout user={prop.user}>
        <div className="w-[1524px] flex m-auto">
            <div className="w-[489px] my-3" id="left">
                <div className="w-[90%] m-auto border rounded-xl border-[#ADADAD] rounded-[8px] p-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-[14px] text-[#404040] my-1 justify-end"><span className="mx-2">تومان</span><h2>{prop.sumprice}</h2></div>
                        <h4 className="text-[14px] text-[#404040]">قیمت کالا ها</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-[14px] text-[#FA541C] my-1 justify-end"><span className="mx-2">تومان</span><h2>0</h2></div>
                        <h4 className="text-[14px] text-[#FA541C]">سود شما از خرید</h4>
                    </div>
                     <div className="flex justify-between items-center border-b-2 border-[#ADADAD] ">
                        <div className="flex items-center text-[14px] text-[#404040] my-1 justify-end"><span className="mx-2">تومان</span><h2>50000</h2></div>
                        <h4 className="text-[14px] text-[#404040]">هزینه ارسال</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-[14px] text-[#404040] my-1 justify-end"><span className="mx-2">تومان</span><h2>{prop.sumprice+50000}</h2></div>
                        <h4 className="text-[14px] text-[#404040]">مبلغ قابل پرداخت</h4>
                    </div>
                </div>
            </div>
            <div id="right" className="w-[904px]">
                    {prop.data.map((item,index)=>{
                        return(
                            <>
                        <div className="flex w-[1000px] h-[300px] border rounded-xl border-[#ADADAD] overflow-hidden my-3" key={index}>
                            <div className="w-[60%] p-3">
                                <div className="w-[100%] flex justify-between items-center text-right">
                                     <button className="w-[18px] h-[18px] bg-[#FFF7F4] text-[12px] text-center border border-[#032340] rounded-2xl flex items-center justify-center" onClick={()=>{removeitem(index,item.price)}}><span className="text-[#032340]">x</span></button>
                                    <h1 className="text-[18px]">{item.title}</h1>
                                </div>
                                <h3 className="text-[14px] text-[#868686] my-4 text-right">{item.category}</h3>
                                <div className="flex items-center text-[24px] text-[#032340] my-1 justify-end"><span className="mx-2">تومان</span><h2>{item.price}</h2></div>
                                <h3 className="text-[16px] text-[#000306] mt-4 mb-1 text-right">سایز {item.size}</h3>
                            </div>
                            <div className="w-[391px] h-[300px]">
                                <img className="w-full object-cover h-[300px] w-[391px] m-auto" src={item.image}/>
                            </div>
                        </div>
                            </>
                        )
                    })}
            </div>
        </div>
         </Layout>
    )
}
export default Basket