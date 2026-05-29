import React, { useEffect, useState } from "react"
import Isnow from "./isnow"
import Bestsel from "./isbestsler"
import Layout from "./layout"
import Product from "./product"
import { Link } from "react-router-dom"
const Home = ({datapro,user})=>{
      
        
    
    return(
        <>
        <Layout user={user}>

        <section className="w-[1521px] m-auto">
        {/* start 1 */}
            <div className="w-[1524px] m-auto flex items-center justify-between relative ">
            {/* left */}
                <div className="w-[300px] h-[375px] flex justify-center">
                    <div className="w-[233px] h-[288px] m-auto">
                        <div className="w-[233px] h-[80px] flex my-[20px]">
                            <div className="text-right  p-[10px]">
                                <h3 className="text-[24px] text-[#194165]">+ ۳۰۰</h3>
                                <span className="text-[16px]">محصولات متنوع </span>
                            </div>
                            <div className="w-[80px] h-[80px] rounded-[16px] p-[20px] bg-[#EBF5FF] text-center"><img className="w-[40px] h-[40px]" src="./public/shop-svgrepo-com.svg"/></div>
                        </div>
                        <div className="w-[233px] h-[80px] flex my-[20px]">
                            <div className="text-right  p-[16px]">
                                <h3 className="text-[24px] text-[#194165]">۹۵%</h3>
                                <span className="text-[16px]">رضایت مشتری</span>
                            </div>
                            <div className="w-[80px] h-[80px] rounded-[16px] p-[20px] bg-[#EBF5FF] text-center"><img className="w-[40px] h-[40px]" src="./public/shop-svgrepo-com.svg"/></div>
                        </div>
                        <div className="w-[233px] h-[80px] flex my-[20px]">
                            <div className="text-right  p-[10px]">
                                <h3 className="text-[24px] text-[#194165]">روز ۴</h3>
                                <span className="text-[16px]">از خرید تا دریافت</span>
                            </div>
                            <div className="w-[80px] h-[80px] rounded-[16px] p-[20px] bg-[#EBF5FF] text-center"><img className="w-[40px] h-[40px]" src="./public/shop-svgrepo-com.svg"/></div>
                        </div>
                    </div>
                </div>
                {/* center */}
                <div className="w-[1222px] h-[375px] absolute pointer-events-none">
                    <img src="./public/pi/1cdb039214ef65d97515fa5547dc3d82e2164bea.png" className="w-full h-full object-contain object-contain pl-[400px]"/>
                </div>
                {/* right */}
                 <div className="w-[435px] h-[300px] text-right flex flex-col gap-1 items-end">
                   <span className="text-[16px] text-[#606060]">راحت و مطمئن خرید کنید!</span>
                    <h3 className="text-[32px] text-[#032340]">همراه تو در مسیر سلامتی</h3>
                    <h3 className="text-[32px] text-[#FA541C]">سهم بزرگ خودتان را امروز بگیرید! </h3>
                    <span className="text-[16px] text-[#606060]">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</span><br/>
                    <Link to="/allproduct">
                    <button className="w-[207px] h-[48px] text-[16px] bg-[#032340] rounded-sm text-white flex justify-center items-center gap-2">مشاهده  محصولات <img className="w-[21px] h-[21px]" src="./public/shop-svgrepo-com.png"/></button>
                    </Link>
                </div>
            </div>
            {/* start2 */}
            <div className="w-[1540px] mx-auto my-20">
            <div className="w-[1140px] h-[462px] m-auto flex items-center justify-evenly gap-5 relative p-3">
             <div className="w-[309px] h-[462px] flex flow-root text-right content-end">
                <h3 className="text-[#032340] bottom-17 right-4 text-[24px]">جدید ترین محصولات</h3>
                <h4 className="p-1 w-[250px] float-right text-[16px] text-[#606060]">جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید</h4>
                <Link to={"/allproduct"}>
                 <button className="w-[309px] h-[48px] m-auto text-[16px] bg-[#FA541C] rounded-sm text-white flex justify-center items-center gap-2 px-[24px] py-[8px]">مشاهده همه محصولات <img className="w-[21px] h-[21px]" src="./public/shop-svgrepo-com.png"/></button>
                </Link>
            </div>
            <div className="w-[392px] h-[462px] relative overflow-hidden rounded-[16px]">
                <img className="w-full absolute" src="./public/pi/82774be60c539d0ad5584cbb1778488786384a2a.png"/>
                <div className="w-[500px] h-[240px] left-[-5px] rond-p rotate-[-15deg] bg-[#021526] absolute bottom-[-100px]"></div>
                <h3 className="absolute text-white bottom-17 right-4 text-[18px]">جدید ترین تخفیفات فصل برند نایک</h3>
                <h3 className="absolute text-white bottom-7 right-4 text-[18px]">۵۰ ٪ تخفیف روی تمام محصولات </h3>
            </div>
            <div className="w-[392px] h-[462px] relative overflow-hidden rounded-[16px]">
                <img className="w-full absolute" src="./public/pi/4023bb80a82a0fd549c548dae6a2067384e281ac.png"/>
                <div className="w-[500px] h-[240px] left-[-5px] rond-p rotate-[-15deg] bg-[#021526] absolute bottom-[-100px]"></div>
                <h3 className="absolute text-white bottom-17 right-4 text-[18px]">جدید ترین تخفیفات فصل برند پوما</h3>
                <h3 className="absolute text-white bottom-7 right-4 text-[18px]">۵۰ ٪ تخفیف روی تمام محصولات </h3>
            </div>
            </div>
            </div>
            {/* start3 */}
            <div className=" px-20 w-[1521px] h-[600px] bg-center mx-auto my-20 bg-no-repeat flex justify-center flex-col items-end gap-2" style={{backgroundImage: "url('./public/pi/be40cb2b10ad4ccd1098fc6a219c06c8d1f4f11c.jpg')"}}>
                 <h3 className=" text-[#01070D] bottom-17 right-4 text-[24px]">برای حال خوب</h3>
                 <h3 className=" text-[#01070D] bottom-17 right-4 text-[24px]">لوازم ایروبیک و تناسب اندام بگیر</h3>
                 <Link to={"/allproduct"}>
                <button className="w-[236px] h-[48px] my-4 text-[16px] bg-[#032340] rounded-sm text-white flex justify-center items-center gap-2">مشاهده  محصولات <img className="w-[21px] h-[21px]" src="./public/shop-svgrepo-com.png"/></button>
                 </Link>
            </div>
            {/* start4 */}
            <Isnow datapro={datapro}/>
            {/* start5 */}
            <Bestsel datapro={datapro}/>
            {/* start6 */}
              <div className=" px-20 w-[1524px] h-[600px] bg-center mx-auto my-20 bg-no-repeat relative gap-2" style={{backgroundImage: "url('./public/pi/d25dbb906e06e3ac7213578c0234646b47c8be41.jpg')"}}>
                 <div className="w-[371px] h-[200px] absolute right-[148px] top-[159px] p-[24px] flex flex-col justify-center items-center">
                 <h3 className=" text-[#01070D] bottom-17 right-4 text-[24px]">برای لذت بردن از مسیر</h3>
                 <h3 className=" text-[#01070D] bottom-17 right-4 text-[30px]">دوچرخه,اسکیت,اسکوتر بگیر</h3>
                 <Link to={"/allproduct"}>
                <button className="w-[236px] h-[48px] my-4 text-[16px] bg-[#032340] rounded-sm text-white flex justify-center items-center gap-2 self-end mr-5">مشاهده  محصولات <img className="w-[21px] h-[21px]" src="./public/shop-svgrepo-com.png"/></button>
                 </Link>
                 </div>
            </div>
            {/* start7 */}
              <div className="w-[1560px] mx-auto my-20">
            <div className="w-[1140px] h-[462px] m-auto flex items-center justify-evenly gap-5 relative p-3">
             <div className="w-[309px] h-[462px] flex flow-root text-right content-end">
                <h3 className="text-[#032340] bottom-17 right-4 text-[24px]">جدید ترین محصولات</h3>
                <h4 className="p-1 w-[250px] float-right text-[16px] text-[#606060]">جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید</h4>
                <Link to={"/allproduct"}>
                 <button className="w-[309px] h-[48px] m-auto text-[16px] bg-[#FA541C] rounded-sm text-white flex justify-center items-center gap-2 px-[24px] py-[8px]">مشاهده همه محصولات <img className="w-[21px] h-[21px]" src="./public/shop-svgrepo-com.png"/></button>
                </Link>
            </div>
            <div className="w-[392px] h-[462px] relative overflow-hidden rounded-[16px]">
                <img className="w-full absolute" src="./public/pi/667fb484c4f93f1801fa632cbb1564f6661fc254.png"/>
                <div className="w-[500px] h-[240px] left-[-5px] rond-p rotate-[-15deg] bg-[#021526] absolute bottom-[-100px]"></div>
                <h3 className="absolute text-white bottom-17 right-4 text-[18px]">جدید ترین تخفیفات فصل برند نایک</h3>
                <h3 className="absolute text-white bottom-7 right-4 text-[18px]">۵۰ ٪ تخفیف روی تمام محصولات </h3>
            </div>
            <div className="w-[392px] h-[462px] relative overflow-hidden rounded-[16px]">
                <img className="w-full absolute" src="./public/pi/cbabfbec70fb9396652a1e542d144dceaa7f3779.png"/>
                <div className="w-[500px] h-[240px] left-[-5px] rond-p rotate-[-15deg] bg-[#021526] absolute bottom-[-100px]"></div>
                <h3 className="absolute text-white bottom-17 right-4 text-[18px]">جدید ترین تخفیفات فصل برند پوما</h3>
                <h3 className="absolute text-white bottom-7 right-4 text-[18px]">۵۰ ٪ تخفیف روی تمام محصولات </h3>
            </div>
            </div>
            </div>
            {/* start8 */}
             <div className=" px-20 w-[1521px] h-[600px] bg-center object-contain mx-auto my-20 bg-no-repeat relative gap-2" style={{backgroundImage: "url('./public/pi/c743d0951557c3c163f15681dfb206b40ac4ea25.jpg')"}}></div>
             {/* start9 */}
             <div className="bg-[#F4FAFF] w-[1521px] h-[241px] m-auto">
                <div className="w-[900px] h-full m-auto flex items-center">
                        <div className="w-[358px]">
                            <h3 className=" bottom-17 right-4 text-[24px] text-right">با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</h3>
                        </div>
                        <div className="w-[542px] flex ml-5 gap-5">
                        <div className="w-[172px] h-[167px] bg-white flex flex-col justify-center items-center gap-3">
                            <img className="w-[48px] h-[48px]" src="./public/carbig.png"/>
                            <h4 className="text-[18px] text-[#032340]">پرداخت درب منزل</h4>
                        </div>
                        <div className="w-[172px] h-[167px] bg-white flex flex-col justify-center items-center gap-3">
                            <img className="w-[48px] h-[48px]" src="./public/pey.png"/>
                            <h4 className="text-[18px] text-[#032340]">پرداخت قسطی</h4>
                        </div>
                        <div className="w-[172px] h-[167px] bg-white flex flex-col justify-center items-center gap-3">
                            <img className="w-[48px] h-[48px]" src="./public/carbig.png"/>
                            <h4 className="text-[18px] text-[#032340]">ارسال سریع</h4>
                        </div>

                        </div>
                </div>
             </div>
        </section>
        </Layout>
        </>
    )
}
export default Home