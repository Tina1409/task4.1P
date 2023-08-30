import React from 'react';
import './SignUpBox.css';
function SignUpBox(){
    
    return(
        <>   
            <div className='box'>
            <h2 className='Sign'>SIGN UP FOR DAILY INSIDER</h2>
            <input className='user_input' type='Enter your email' placeholder='Enter your email' />
            <button className='subscribeButton'>Subscribe</button>
        </div>
        </>
    )
}
export default SignUpBox;