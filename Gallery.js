import React from 'react';
import './Gallery.css';


const AstroImage=()=>{
    let data=[
    {
        id:1, 
        img:'img/supernova0.jpg',
        image:'What is a supernova?',
        About:'Star reaches the end line and explodes.',
        Creator:'Andrea Thompson',
    },
    
    {
        id:2, 
        img:'img/fermiParadox0.jpg',
        image:'Where Are All the Aliens?',
        About:'That very question is the Fermi paradox which sparked numerous explanations. ',
        Creator:'Kate Lohnes',
    },{
        id:3, 
        img:'img/pioneerAnamoly0.jpg',
        image:'Pioneer anomaly was solved',
        About:'A discrepacy in the trajectory of Pioneer.',
        Creator:'Doug Adler',
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