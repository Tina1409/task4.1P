import React from 'react';
import './Picture.css';


const AstroImage=()=>{
    let data=[
    {
        id:1, 
        img:'img/moon0.jpg',
        image:'The moon is disappearing!',
        About:'Each year, the moon’s orbit moves about four centimeters away.',
        Creator:'Simon Bartman',
    },
    
    {
        id:2, 
        img:'img/galaxy0.jpg',
        image:'Glow of distant galaxy!',
        About:'Hubble Space Telescope captures ghostly glow of distant galaxy.',
        Creator:'Samantha Mathewson',
    },{
        id:3, 
        img:'img/blackHole0.jpg',
        image:'Black hole chews up huge star!',
        About:'Supermassive black hole chews up huge star, spits stellar guts.',
        Creator:'Monisha Ravisetti',
    }
    
];

const elements = data.map((ele)=>{
    return(
        <>
        <div className='Main'>
        <div className='AstroImage'>
            <div className='AstroImage-img' key={ele.id}>
                <img src={ele.img} alt='imgs' />
            </div>
            <div className='AstroImage-make'>
            <h1 className='image'>{ele.image}</h1>
            <p className='About'>{ele.About}</p>
            <h2>{ele.Creator}</h2>
            
            </div>
        </div>
        </div>
        

        </>
    );
})
return (
    <>
     {elements} 
        </>
);
}
export default AstroImage;