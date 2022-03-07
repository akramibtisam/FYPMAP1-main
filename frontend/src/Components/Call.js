import call from '../images/phone-call.png'
import React, {useEffect } from 'react';
function Call() {
    useEffect(()=>{
        document.getElementById('input1').focus();
    });
    return (
        <div className='call_container'>
            <p className='call_container_price'>PKR 2.8 Crore</p>
            <div className='call_btn'><img src={call} /><span>Call</span></div>
            <form>
                <div className='form_name'>
                    <label>Name</label><br />
                    <input type="text" id='input1'/>
                </div>
                <div className='form_phone'>
                    <label>Phone</label><br />
                    <input type="number" id='input2'/>
                </div>
                <div className='form_text'>
                    <label>Message</label><br />
                    <textarea rows="4" cols="33"id='input3' />
                </div>
                <p className='option_para'>I am a:</p>
                <div className='form_option'>
                    <div className='option'><label for="vehicle1">Buyer</label>
                        <input type="checkbox" /></div>
                    <div className='option'><label for="vehicle1">Agent</label>
                        <input type="checkbox" /></div>
                    <div className='option'><label for="vehicle1">Other</label>
                        <input type="checkbox" /></div>
                </div>
            </form>

        </div>
    )
}

export default Call
