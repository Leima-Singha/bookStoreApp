import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from 'axios';

// import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {

  const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
          
                const data = res.data.filter((data)=> data.category === "Free")
                setBook(data);
                console.log(data);
            } catch ( error) {
                console.log(error);
            }
        };
        getBook();
    },[])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md: px-18 px-4'>
        <div>
        <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
        <p>
        Explore the <span className='text-pink-500'>CampusBookStore</span> app to discover a diverse selection of free books across various genres! From thrilling mysteries and heartwarming romances to insightful non-fiction and timeless classics, there’s something for every reader. The app's Free Books section is updated regularly, ensuring you have access to a constantly evolving library of great reads without spending a dime. Whether you’re a passionate bookworm or just looking for your next great read, CampusBookStore makes it easy to find and download books at no cost.
        
        </p>
        </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item ={item} key={item.id}/>
        ))}
      </Slider>
      </div>
    </div>

    </>
  );
}

export default Freebook