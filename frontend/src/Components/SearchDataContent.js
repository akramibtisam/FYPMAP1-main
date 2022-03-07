import React from 'react'
import '../Style/searchdata.css';
import img1 from '../images/bahria.jpg';
import bed from '../images/bedroom.png';
import bath from '../images/bathroom.png';
import kit from '../images/kitchen.png';
import arrow from '../images/right-arrow.png';
function SearchDataContent() {
  return (
    <div className='search_data_container'>
    <div className='seacrh_data_box'>
        <div className='seacrh_data_box_content'>
            <img src={img1} />
        </div>
        <div className='seacrh_data_box_content1'>
            <span className='pkr'>PKR</span><span className='price'>1.73 Crore</span>
            <h3>DHA 9 Town, DHA Defence</h3>
            <div className='seacrh_data_box_content1_logos'>
                <div>
                <img src={bed}/>
                <p>3 bed</p>
                </div>
                <div>
                <img src={bath}/>
                <p>3 bath</p>
                </div>
                <div>
                <img src={kit}/>
                <p>1 kitchen</p>
                </div>
               
            </div>
            <p className='seacrh_data_box_content1_disc'>Marla Luxurious Bungalow for Sale in DHA Lahore
                Property Overview
                3 Master Bedrooms with branded attached bathrooms.
                Designed walls and ceiling.
                All baths are equipped with imported Grohe fitting. </p>
            <img src={arrow} className='arrow'/>
        </div>
    </div>
</div>
  )
}

export default SearchDataContent