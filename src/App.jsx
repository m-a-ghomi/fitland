import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter, data, Route, Routes } from 'react-router-dom'
import Home from './component/home'
import Layout from './component/layout'
import Isnow from './component/isnow'
import Bestsel from './component/isbestsler'
import Login from './component/login'
import Product from './component/product'
import Basket from './component/basket'
import Allproducts from './component/allproduct'
import Searchpro from './component/search'

function App() {
   const [datapro,setdatapro]=useState([])
   const [basket,setbasket]=useState([])
   const [sumprice,setsumprice]=useState(0)
   const [serch,setserch]=useState("")
   const [user,setuser]=useState()
   
   
    useEffect(()=>{
      try{
        fetch('/db.json')
                .then(res => res.json())
                .then(data => setdatapro(data.products))
            .finally(()=>{
                
                    
                  })
      }
      catch{
        console.log("eror");
        
      }
            },[])
  return (
    <>
     <BrowserRouter basename={import.meta.env.DEV ? "/" : "/fitland"}>
      <Routes>
        <Route path='/' element={<Home datapro={datapro} user={user}/>}/>
        <Route path='/serch' element={<Searchpro datapro={datapro} data={serch} setdata={setserch} user={user}/>}/>
        <Route path='/allproduct' element={<Allproducts datapro={datapro} user={user}/>}/>
        <Route path='/isnow' element={<Isnow datapro={datapro}/>}/>
        <Route path='/bestsel' element={<Bestsel datapro={datapro}/>}/>
        <Route path='/login' element={<Login setuser={setuser}/>}/>
        <Route path='/basket' element={<Basket data={basket} sumprice={sumprice} basketdata={setbasket} setprice={setsumprice} user={user}/>}/>
        <Route path='/pro/:id' element={<Product basketdata={setbasket} sumprice={setsumprice} user={user}/>}/>
        <Route path='/lay' element={<Layout user={user} datapro={datapro}/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
