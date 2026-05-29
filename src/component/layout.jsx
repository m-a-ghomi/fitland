
import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Isnow from "./isnow"
import Searchpro from "./search"

const Layout = (prop)=>{
    const allpanel = document.querySelectorAll('#panel')
    const [data,setdata]=useState()
    const valinput = useRef()
    function handelclick (e){
        const panel = e.target.innerHTML
        prop.serch(panel)
    }
    const vall = ()=>{
        setdata(valinput.current.value)
        prop.serch(data)
    }
    const best = ()=>{
        prop.filter("c")
    }
    const des = ()=>{
        prop.filter("b")
        
    }
    return(
        <>
            <header className="w-[1524px] h-[200px] m-auto">
                <section className="w-[1524px] mx-auto">
                    <div className="flex justify-evenly items-center w-[100%] h-[133px] gap-9" id="top">
                        <div className="w-[300px] flex items-center">
                            <Link to={'/basket'}><button className="w-[48px] h-[48px] bg-[#FA541C] rounded-[12px] m-4 relative"><img className="w-6 h-6 m-auto" src="/shop-svgrepo-com.svg"/></button></Link>
                            {prop.user ? <button className="h-[48px] px-[30px] shadow-sm rounded-[12px] text-[16px] flex items-center justify-center"><img className="w-6 h-6" src="/user-svgrepo-com.svg"/>{prop.user}</button> : <Link to={`/login`}>
                            <button className="w-[142px] h-[48px] px-[15px] shadow-sm rounded-[12px] text-[16px] flex items-center justify-between"><img className="w-6 h-6" src="/user-svgrepo-com.svg"/>ثبت نام | ورود</button>
                            </Link>}
                        </div>
                        <div className="w-[662px] m-auto">
                            <Link to={"/serch"}>
                            <div className="w-[637px] flex items-center h-[48px] bg-[#F9F9F9] rounded-[16px] border border-[#CBCBCB] px-3">
                            <input className="w-[567px] h-[100%] outline-0" ref={valinput} onKeyUp={vall}/>
                            <i className="w-[70px] h-[100%] flex items-center justify-between text-gray-400 text-[12px]">جستجو<img className="w-6 h-6" src="/search-alt-svgrepo-com (1).svg"/></i>
                            </div>
                            </Link>
                        </div>
                        <div className="w-[274px]">
                        <div className="w-[100px] h-[60px] float-right"> <img className=" h-full w-full object-contain" src="/src/img/logo/logo.png" alt="logo"/></div>
                           
                        </div>
                    </div>
                <div className="h-[64px] flex justify-between bg-[#F9F9F9] items-center rounded-[16px]" id="botom">
                    <div className="w-[50%]">
                        <nav className="w-[480px] m-auto flex">
                          <Link to={"/allproduct"} className="flex">
                            <div className="w-[150px] text-[16px] text-center block flex font-[homa] items-center gap-1" onClick={best} to="/allproduct">پرفروش ترین ها<img className="w-[18px] h-[18px]" src="/medal-star-svgrepo-com.svg"/></div>
                            <div className="w-[150px] text-[16px] text-center block flex font-[homa] items-center gap-1" onClick={des} to="/allproduct">نخفیفات ویژه<img className="w-[18px] h-[18px]" src="/spark-svgrepo-com.svg"/></div>
                            <div className="w-[155px] text-[16px] text-center block flex font-[homa] items-center gap-1" to="/allproduct">جدیدترین محصولات<img className="w-[18px] h-[18px]" src="/star-sharp-svgrepo-com.svg"/></div>    
                          </Link>
                        </nav>
                    </div>
                    <div className="w-[50%]">
                         <Link className="w-[428px] flex float-right" to={"/serch"}>
                            <div className="p-5 text-[18px] text-center block flex font-[homa] items-center gap-1" onClick={handelclick}>یوگا</div>
                            <div className="p-5 text-[18px] text-center block flex font-[homa] items-center gap-1" onClick={handelclick}>ورزشی</div>
                            <div className="p-5 text-[18px] text-center block flex font-[homa] items-center gap-1" onClick={handelclick}>کفش</div>
                            <div className="p-5 text-[18px] text-center block flex font-[homa] items-center gap-1" onClick={handelclick}>زنانه</div>
                            <div className="p-5 text-[18px] text-center block flex font-[homa] items-center gap-1" onClick={handelclick}>مردانه</div>
                        </Link>
                    </div>
                </div>
                </section>
            </header>
            {prop.children}
            <footer>
                <section className="w-[1524px] h-[558px] bg-[#021526] m-auto mt-20 flex justify-evenly">
                    <div className="w-[330px] flex-col justify-evenly">
                        <div className="w-[330px] h-[177px] text-right my-20">
                            <h4 className="text-[14px] text-white">برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h4>
                            <div className="flex justify-end gap-2 m-6">
                                <img className="w-[40px] h-[40px]" src="/whatsapp.png"/>
                                <img className="w-[40px] h-[40px]" src="/telegram.png"/>
                                <img className="w-[40px] h-[40px]" src="/youtube.png"/>
                                <img className="w-[40px] h-[40px]" src="/instagram.png"/>
                            </div>
                        </div>
                        <div className="w-[251px] h-[177px] text-right">
                            <div className="flex justify-end gap-6 my-5">
                                <img className="w-[68px] h-[80px] object-cover" src="/a721e7e0d4599ac39f689fccfc571f0bb6e83ddb.jpg"/>
                                <img className="w-[68px] h-[80px] object-cover" src="/e488e9fb2220878a4f48ab0f0794fdbba2546eb1.jpg"/>
                                <img className="w-[68px] h-[80px] object-cover" src="/5be28e1fb7579a123e3c54bc614ed2b83758f086.jpg"/>
                            </div>
                            <h4 className="text-[14px] text-white text-center">یک هفته زمانت بازگشت</h4>
                        </div>
                    </div>
                    <div className="w-[760px] flex-col flex justify-evenly">
                         <div className="w-full h-[198px] flex">
                        <div className="w-full h-[198px] flex items-end flex-col text-white gap-6">
                            <h4>اطلاعات تماس</h4>
                            <h4>نشانی قم</h4>
                            <h4>شماره تماس:09995085398</h4>
                            <h4>پست الکترونیک</h4>
                            <h4>mohammadalighomi223@gmail.com</h4>
                        </div>
                        <div className="w-full h-[198px] flex items-end flex-col text-white">
                            <h4 className="">خدمات مشتریان</h4>
                            <Link className="p-4 text-[14px] block flex font-[homa] items-center gap-1" to="/">سوالات متداول</Link>
                            <Link className="p-4 text-[14px] block flex font-[homa] items-center gap-1" to="/">حریم خصوصی</Link>
                            <Link className="p-4 text-[14px] block flex font-[homa] items-center gap-1" to="/">گزارش ایراد در سایت</Link>
                            <Link className="p-4 text-[14px] block flex font-[homa] items-center gap-1" to="/">شرایط بازگرداندن محصول</Link>
                        </div>
                        <div className="w-full h-[198px] flex items-end flex-col text-white">
                            <h4>محبوب ترین ها</h4>
                            <Link className="p-3 text-[14px] text-center block flex font-[homa] items-center gap-1" to="/serch" onClick={handelclick}>یوگا</Link>
                            <Link className="p-3 text-[14px] text-center block flex font-[homa] items-center gap-1" to="/serch" onClick={handelclick}>ورزشی</Link>
                            <Link className="p-3 text-[14px] text-center block flex font-[homa] items-center gap-1" to="/serch" onClick={handelclick}>کفش</Link>
                            <Link className="p-3 text-[14px] text-center block flex font-[homa] items-center gap-1" to="/serch" onClick={handelclick}>زنانه</Link>
                            <Link className="p-3 text-[14px] text-center block flex font-[homa] items-center gap-1" to="/serch" onClick={handelclick}>مردانه</Link>
                        </div>
                         </div>
                        <div className="w-full h-[80px] text-right text-white">
                            <h1 className="mb-4  text-[14px]">فروشگاه اینترنتی فیت لند</h1>
                            <p className="text-[12px]">فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.</p>
                        </div>
                <hr className="text-white"></hr>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Layout