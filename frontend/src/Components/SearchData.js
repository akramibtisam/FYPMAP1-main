import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import '../Style/searchdata.css';
import SearchDataContent from './SearchDataContent';
function SearchData() {
    const [City,Setcity]=useState();
    const [Sector,Setsector]=useState();
    const [Type,Settype]=useState();
    const [Size,Setsize]=useState();
    const [Price,Setprice]=useState();

    const {search}=useLocation();
    const parms=new URLSearchParams(search);
    const city=parms.get('city');
    // const area=parms.get('area');
    // const location=parms.get('location');
    const sector=parms.get('sector');
    const type=parms.get('type');
    const size=parms.get('size');
    const price=parms.get('price');
    // const id=parms.get('area');
    console.log(city,sector,size,type,price);

    return (
        <div className='SeachData_main'>
            {/* <h1>Search Data</h1> */}
            <div className='Search_header'>
                <form className='Search_header_form'>
                    <div>
                        <select className='select_city' onChange={e=>Setcity(e.target.value)}>
                            <option value='' disabled selected>Select City</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                        </select>
                        <input type='text' disabled placeholder='Bahria Town' />
                        <select className='select_sector'onChange={e=>Setsector(e.target.value)}>
                            <option value='' disabled selected>Select Sector</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div>
                        <select className='select_type'onChange={e=>Settype(e.target.value)}>
                            <option value='' disabled selected>Select Type</option>
                            <option value="House">House</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Plot">Plot</option>
                        </select>
                        <select className='select_size'onChange={e=>Setsize(e.target.value)}>
                            <option value='' disabled selected>Select Size</option>
                            <option value="5 ">5 marla</option>
                            <option value="10">10 marla</option>
                            <option value="15">15 marla</option>
                            <option value="1">1 kanal</option>
                            <option value="1.5">1.5 kanal</option>
                        </select>
                        <select className='select_price'onChange={e=>Setprice(e.target.value)}>
                        <option value='' disabled selected>Select Price</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                        </select>
                    </div>
                    <a href={`/searchdata?city=${City}&sector=${Sector}&type=${Type}&size=${Size}&price=${Price}`}>Find</a>
                </form>
               
            </div>
           <SearchDataContent/>
           <SearchDataContent/>
           <SearchDataContent/>
        </div>
    )
}

export default SearchData