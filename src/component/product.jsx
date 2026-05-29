import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "./layout"
import Bestsel from "./isbestsler"
import Isnow from "./isnow"
import Home from "./home"
import Basket from "./basket"



const Product =(prop)=>{
    const [sprod,setsprod]=useState(null)
    const [stat,setstat]=useState(false)
    const [productcont,setproductcont]=useState(0)
    const numprod = useParams()


    useEffect(() => {
        setstat(false)
         fetch(`http://localhost:3001/products/${numprod.id}`)
            .then(res => res.json())
            .then(data => setsprod(data))
            .catch(err=> console.log(err))
        .finally(()=>{
                setstat(true)
            })
        }, [numprod.id])
        const addtolist = (event)=>{
            event.preventDefault()
            let add = document.getElementById('add')
            add.classList.remove('hidden')
            postive()
            prop.basketdata(prev=>[...prev,sprod])
            prop.sumprice(prev=>prev+sprod.price)
        }
        const postive=()=>{
            setproductcont(prev => prev + 1)
            const tost = document.getElementById('tost')
            const main = document.getElementById('main')
            tost.classList.remove("hidden")
            main.classList.add("blur-sm")
            setTimeout(()=>{
                tost.classList.add("hidden")
                main.classList.remove("blur-sm")
            },500)
        }
        const negtive=()=>{
            let add = document.getElementById('add')
            if(productcont > 1){
                setproductcont(prev => prev - 1)
            }
            else{
                    add.classList.add('hidden')
            }
        }
    if(!sprod){
        return <h1>در حال پیدا کردن محصول</h1>
    }
    return(
        <div className="relative">
        <Layout user={prop.user}>
        <div id="tost" className="z-1 absolute w-[369px] h-[140px] right-[1100px] p-5 top-70 bg-white rounded-3xl shadow-sm shadow-[#FFFFFF] hidden">
            <div className="flex justify-between items-center border-b-2 border-[#ADADAD]">
                        <div className="flex items-center text-[14px] text-[#404040] my-1 justify-end">X</div>
                        <h4 className="text-[16px] text-[#257028]">این کالا به سبد خریدت اضافه شد!</h4>
            </div>
            <div className="flex items-center text-center m-2">
                <div className="w-[247px] p-3">
                    <h1 className="text-[16px]">{sprod.title}</h1>
                </div>
                <div className="w-[82px]">
                    <img className="w-[82px] object-contain h-[80px]" src={sprod.image}/>
                </div>
            </div>
        </div>
        <div className="w-[1524px] m-auto z-0" id="main">
            <div className="w-[100%] flex">
                <div className="w-[50%] text-right p-7">
                    <div className="w-[100%] flex justify-between items-center">
                        <div className="w-[65px] h-[32px] bg-[#FFF7F4] text-[16px] p-1 text-center">3<span className="text-[#FF991F]">***</span></div>
                        <h1 className="text-[28px]">{sprod.title}</h1>
                    </div>
                        <h3 className="text-[14px] text-[#868686] my-4">{sprod.category}</h3>
                        <div className="flex items-center text-[32px] text-[#032340] my-1 justify-end"><span className="mx-2">تومان</span><h2>{sprod.price}</h2></div>
                        {<div className="w-[183px] flex items-center justify-between text-[24px] text-[#ADADAD] float-end"><span className="text-[16px] w-[62px] h-[36px] text-center p-1.5 bg-[#FA541C] rounded-2xl text-white">50%</span><h2>{sprod.price}</h2></div>}
                       <br></br> <h3 className="text-[24px] text-[#000306] mt-7 mb-1">سایز</h3>
                       <div className="flex justify-end gap-2 w-[252px] float-end flex-wrap my-3">
                       {sprod.size?.map((s)=>(
                        <h3 className="w-[78px] h-[24px] bg-[#EDEDED] text-[12px] text-[#000306] rounded-md text-center p-1">{s}</h3>
                        ))
                       }
                       </div>
                       <div>
                       <h3 className="text-[24px] text-[#000306] mt-1 mb-1 float-end w-full">رنگ</h3>
                       <div className="flex justify-end w-full">
                       {sprod.color?.map((s)=>(
                        <div className="w-[24px] h-[24px] text-[12px] text-[#000306] rounded-4xl text-center p-1" style={{backgroundColor : `${s}`}}></div>
                        ))
                       }
                       </div>
                       <div className="w-full flex justify-evenly my-3">
                            <button className="w-[341px] h-[56px] text-[16px] bg-[#FA541C] rounded-sm text-white flex justify-center items-center gap-2" onClick={addtolist}> افزودن به سبد خرید<img className="w-[21px] h-[21px]" src="/public/shop-svgrepo-com.png"/></button>
                            <div className="hidden" id="add">
                            <div className="w-[101px] h-[56px] flex justify-evenly p-2 border border-[#FA541C] rounded-2xl items-center text-[#FA541C]">
                                <button onClick={negtive}>-</button>
                                <span>{productcont}</span>
                                <button onClick={postive}>+</button>
                            </div>
                            </div>
                       </div>
                       </div>
                       
                </div>
                <div className="w-[50%]">
                    <img className="w-full object-contain h-[380px]" src={sprod.image}/>
                </div>
            </div>
        </div>
        </Layout>
        </div>
    )
}
export default Product