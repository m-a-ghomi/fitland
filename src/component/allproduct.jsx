import React, { useState } from "react"
import { Link } from "react-router-dom";
import Layout from "./layout";
import Isnow from "./isnow";
import Bestsel from "./isbestsler";



const Allproducts = ({datapro,user})=>{
    const [state,setstate]=useState("i")
    const takhfif = ()=>{
        setstate("b")
    }
    const all = ()=>{
        setstate("i")
    }
    const bestsel = ()=>{
        setstate("c")
    }
    const man = ()=>{
        setstate("d")
    }
    const woman = ()=>{
        setstate("w")
    }
    if(!datapro){
        return <h1>is not difind</h1>
    }
    else{
        if(state == "i"){

            return(
                <section>
                <Layout filter={setstate} user={user}>
        
                   <div className="w-[1524px] flex justify-between m-auto">
                        <div className="w-[100]">
                            <div className="flex w-[100%] justify-between m-5 p-2">
                                <div className="text-[16px] text-[#ADADAD]">20 کالا</div>
                                 <nav className="w-[600px] flex justify-end text-[#404040]">
                                  <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={woman}>زنانه</button> 
                                  <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={man}>مردانه</button> 
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={bestsel}>پرفروش ترین ها</button>
                                    <button className="w-[140px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={takhfif}>نخفیفات ویژه</button>
                                    <button className="w-[160px] text-[20px] text-[#FA541C] text-center block flex font-[homa] items-center gap-1 border-b  justify-center" onClick={all}>همه محصولات</button>                       
                                </nav>
                            </div>
                             <div className="h-full flex justify-evenly m-auto gap-[20px] transition-transform flex-wrap" id="secnow">
                            {  datapro.map((pro)=>{
                                    return(
                                            <Link key={pro.id} to={`/pro/${pro.id}`}>
                                             <div className="w-[288px] h-[467px] overflow-hidden rounded-[16px] border-[1px] shadow-sm border-[#CBCBCB]">
                                                <img className="w-full h-[280px] border-b-[1px] border-[#CBCBCB] object-cover" src={pro.image}/>
                                                <div className="p-3 text-right bg-white h-[187px] flex flex-col gap-4">
                                                <h3 className="right-4 text-[16px]">{pro.title}</h3>
                                                <h5 className="right-4 text-[14px]">{pro.price} تومان</h5>
                                                <h5 className="right-4 text-[12px] text-[#404040]">{pro.size}</h5>
                                                </div>
                                            </div>
                                            </Link>
                                    )
                                 })}
                        </div>
                        </div>
                        {/* <div className="w-[288px] h-[215px] m-2 rounded-2xl border border-[#CBCBCB] p-3">
                             <div className="flex justify-center items-center">
                                <h4 className="text-[16px] text-[#000306]">فیلترها</h4>
                            </div>
                            <div className="w-[252px] m-auto">
                              <div className="py-7">
                                <div className="flex justify-between">
                                    <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                    </label>
                                    <label>محصولات موجود</label>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                    </label>
                                    <label>محصولات تخفیف دار</label>
                                </div>
                              </div>
                               <div className="flex justify-between mt-2 items-center">
                                   <input className="w-[180px] h-[30px] border border-[#Adadad] rounded-2xl bg-[#F9F9F9] px-1 outline-0 placeholder:text-center text-[black]" placeholder="از این قیمت به پایین" type="number"/>
                                    <label>قیمت</label>
                                </div>
                            </div>
                        </div> */}
                   </div>
                </Layout>
                </section>
            )
        }
        else if(state == "b"){
            return(
                <Layout filter={setstate} user={user}>
                            <div className="flex w-[1524px] justify-end m-5 p-2 mx-auto">
                                 <nav className="w-[600px] flex justify-end text-[#404040]">
                                 <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={woman}>زنانه</button>
                                  <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={man}>مردانه</button> 
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={bestsel}>پرفروش ترین ها</button>
                                    <button className="w-[140px] text-[20px] text-[#FA541C] text-center block flex font-[homa] items-center gap-1 border-b  justify-center" onClick={takhfif}>نخفیفات ویژه</button>
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={all}>همه محصولات</button>                       
                                                            
                                </nav>
                            </div>
                            <div className="w-[1520px] flex flex-wrap m-auto gap-2">
                            {  datapro.map((pro)=>{
                                    if(pro.isNew == true){
                                                return(
                                                        <Link key={pro.id} to={`/pro/${pro.id}`}>
                                                         <div className="w-[366px] h-[467px] overflow-hidden rounded-[16px]  border-[1px] shadow-sm border-[#CBCBCB]">
                                                            <img className="w-full h-[280px] border-b-[1px] border-[#CBCBCB] object-cover" src={pro.image}/>
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
                </Layout>
            )
        }
        else if(state == "c"){
            return(
                <Layout filter={setstate} user={user}>
                            <div className="flex w-[1524px] justify-end m-5 p-2 mx-auto">
                                 <nav className="w-[600px] flex justify-end text-[#404040]">
                                 <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={woman}>زنانه</button>
                                  <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={man}>مردانه</button> 
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center text-[#FA541C] gap-1 border-b  justify-center" onClick={bestsel}>پرفروش ترین ها</button>
                                    <button className="w-[140px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={takhfif}>نخفیفات ویژه</button>
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={all}>همه محصولات</button>                       
                                                            
                                </nav>
                            </div>
                    <div className="w-[1520px] flex flex-wrap m-auto gap-2">
                            {  datapro.map((pro)=>{
                                    if(pro.isBestSeller == true){
                                                return(
                                                        <Link key={pro.id} to={`/pro/${pro.id}`}>
                                                         <div className="w-[366px] h-[467px] overflow-hidden rounded-[16px]  border-[1px] shadow-sm border-[#CBCBCB]">
                                                            <img className="w-full h-[280px] border-b-[1px] border-[#CBCBCB] object-cover" src={pro.image}/>
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
                </Layout>
            )
        }
        else if(state == "d"){
            return(
                <Layout filter={setstate} user={user}>
                            <div className="flex w-[1524px] justify-end m-5 p-2 mx-auto">
                                 <nav className="w-[600px] flex justify-end text-[#404040]">
                                 <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={woman}>زنانه</button>
                                    <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center text-[#FA541C] gap-1 border-b  justify-center" onClick={man}>مردانه</button>                                              
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={bestsel}>پرفروش ترین ها</button>
                                    <button className="w-[140px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={takhfif}>نخفیفات ویژه</button>
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={all}>همه محصولات</button>                       
                                </nav>
                            </div>
                    <div className="w-[1520px] flex flex-wrap m-auto gap-2">
                            {  datapro.map((pro)=>{
                                    if(pro.title.includes("مردانه")){
                                                return(
                                                        <Link key={pro.id} to={`/pro/${pro.id}`}>
                                                         <div className="w-[366px] h-[467px] overflow-hidden rounded-[16px]  border-[1px] shadow-sm border-[#CBCBCB]">
                                                            <img className="w-full h-[280px] border-b-[1px] border-[#CBCBCB] object-cover" src={pro.image}/>
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
                </Layout>
            )
        }
        else if(state == "w"){
            return(
                <Layout filter={setstate} user={user}>
                            <div className="flex w-[1524px] justify-end m-5 p-2 mx-auto">
                                 <nav className="w-[600px] flex justify-end text-[#404040]">
                                 <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center text-[#FA541C] border-b  justify-center gap-1" onClick={woman}>زنانه</button>
                                    <button className="w-[100px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={man}>مردانه</button>                                              
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={bestsel}>پرفروش ترین ها</button>
                                    <button className="w-[140px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={takhfif}>نخفیفات ویژه</button>
                                    <button className="w-[160px] text-[20px] text-center block flex font-[homa] items-center gap-1 justify-center" onClick={all}>همه محصولات</button>                       
                                </nav>
                            </div>
                    <div className="w-[1520px] flex flex-wrap m-auto gap-2">
                            {  datapro.map((pro)=>{
                                    if(pro.title.includes("زنانه")){
                                                return(
                                                        <Link key={pro.id} to={`/pro/${pro.id}`}>
                                                         <div className="w-[366px] h-[467px] overflow-hidden rounded-[16px]  border-[1px] shadow-sm border-[#CBCBCB]">
                                                            <img className="w-full h-[280px] border-b-[1px] border-[#CBCBCB] object-cover" src={pro.image}/>
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
                </Layout>
            )
        }
    }
}
export default Allproducts;