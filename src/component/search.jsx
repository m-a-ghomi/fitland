import React from "react";
import Layout from "./layout";
import { Link } from "react-router-dom";



const Searchpro =({datapro,data,setdata,user})=>{
    if(!datapro){
         return(
        <>
        <Layout serch={setdata} user={user}>

            <div className="w-[1524px] m-auto">
                <img src="./public/pi/notdifind.png" className="w-100 h-100 m-auto"/>
            </div>
        </Layout>
        </>
    )
    }
    
    return(
        <>
        <Layout serch={setdata} user={user}>
            
        <div className="w-[1120px] flex flex-wrap m-auto gap-2">
                            {  datapro.map((pro)=>{
                                    if(pro.title.includes(data)){
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
                                                else{
                                                     
                                                }
                                             })}
                                    
                                {}
                            </div>
        </Layout>

        </>
    )
}
export default Searchpro