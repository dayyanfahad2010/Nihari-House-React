import React from 'react'
import ProductCart2 from '../Products/ProductCart2'
import nihari_1 from '../assets/products/nihari.png'
import nihari_2 from '../assets/products/nihari1.png'
import nihari_3 from '../assets/products/nihari2.png'
import nihari_4 from '../assets/products/nihari3.png'
import biryani from '../assets/products/biryani.png'
import cans from '../assets/products/haleem_can.png'
import nan from '../assets/products/naan.png'
import drink1 from '../assets/products/drink2.png'
import drink2 from '../assets/products/drink1.png'
import '../../App.css';
import logo from '../assets/logo/logo.png'
import banner1 from '../assets/banners/banner1.png'
import banner2 from '../assets/banners/banner2.png'
import banner3 from '../assets/banners/banner3.png'
import banner4 from '../assets/banners/banner4.png'
import banner5 from '../assets/banners/banner5.png'
import banner6 from '../assets/banners/banner6.png'
import banner7 from '../assets/banners/banner7.png'
import AutoPlaySlider from '../slider'
import Header from '../Layout/Header'
const Home = () => {
  const NihariArray =[
    {
        url:nihari_4,
        title:"Nihari",
        price:"From Rs 600",
    },
    {
        url:nihari_3,
        title:"Nalli Nihari",
        price:"From Rs 1050",
    },
    {
        url:nihari_1,
        title:"Maghaz Nihari",
        price:"From Rs 1200",
    },
    {
        url:nihari_2,
        title:"Special Nihari",
        price:"From Rs 1450",
    },
  ]
  const haleem =[
    {
        url:logo,
        title:"chicken",
        price:"from Rs. 200"
    }
  ]
  const BiryaniArray=[
    {
        url:biryani,
        title:"Chicken Biryani",
        price:"from Rs. 200"
    },
    {
        url:logo,
        title:"Chicken Pulao",
        price:"Rs. 320"
    }
  ]
  const DrinksArray=[
    {
        url:drink1,
        title:"Can",
        price:"Rs.100"
    },
    {
        url:drink2,
        title:"Mineral Water",
        price:"Rs.60"
    }
  ]
  const NansArray=[
    {
        url:nan,
        title:"Dhoot Wali Roti",
        price:"Rs.50"
    },
    {
        url:nan,
        title:"Roti",
        price:"Rs.30"
    }
  ]
  const CansArray=[
    {
        url:cans,
        title:"Nihari Can",
        price:"Rs. 1400",
        stock:"out of stock"
    },
    {
        url:cans,
        title:"Beef Haleem Can",
        price:"Rs. 1600"
    }
  ]
    return (
        <>
        <AutoPlaySlider/>
        <br />
        <br />
        <br />
        <Header/>
        <div className='container' id='nihari'>
            <img src={banner1} alt="banner" className='banners'/>
            {
                NihariArray.map((element,index)=>{
                    if(element.stock){
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        <div className='container' id='haleem'>
            <img src={banner2} alt="banner" className='banners'/>
            {
                haleem.map((element,index)=>{
                    if(element.stock){                        
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        <div className='container' id='biryani'>
            <img src={banner3} alt="banner" className='banners'/>
            {
                BiryaniArray.map((element,index)=>{
                    if(element.stock){
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        <div className='container'>
            <img src={banner4} alt="banner" className='banners'/>
            {
                NihariArray.map((element,index)=>{
                    if(element.stock){
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        <div className='container' id='nan'>
            <img src={banner5} alt="banner" className='banners'/>
            {
                NansArray.map((element,index)=>{
                    if(element.stock){
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        <div className='container'>
            <img src={banner6} alt="banner" className='banners'/>
            {
                DrinksArray.map((element,index)=>{
                    if(element.stock){
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        <div className='container'>
            <img src={banner7} alt="banner" className='banners'/>
            {
                CansArray.map((element,index)=>{
                    if(element.stock){
                        return(
                        <ProductCart2 key={index} stock={element.stock} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                    else{
                        return(
                            <ProductCart2 key={index} url={element.url} price={element.price} title={element.title}/>
                        )
                    }
                })
            }
        </div>
        </>
  )
}

export default Home