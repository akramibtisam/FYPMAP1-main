import React from 'react'
import {useLocation} from 'react-router-dom';
import data from '../Area_detail.json'
import '../Style/Area_details.css'

function Area_details(props) {
  const {search} =useLocation();
  const parms=new URLSearchParams(search);
  const title=parms.get('title1');

  const info=data.Data;
  const obj=info.filter(item=>item.location==title);
  const desc=obj[0];
  console.log(desc);
    return (
        <div>
        <div className="container">
          <h2 className="PicText text-center">{desc.location}</h2>
          <hr className="hrclass" />
          <h2 className="Highlight">
            <i className="bi bi-list green">Highlights</i>{" "}
          </h2>
          <h1>Heloo</h1>
          <hr className="hr-17" />
          <div className="container">
            <h3 className="Title">{desc.aboutTitle}</h3>
            <p className="desc">{desc.discriptionAboutP1}</p>
            <p className="desc">{desc.discriptionAboutP2}</p>
            <h2 className="PicText2 text-center"></h2>
            <p className="desc">{desc.discriptionAboutP3}</p>
            <h3 className="Title">{desc.PlaningAndDeployementTitle}</h3>
            <p className="desc">{desc.PlanningDiscriptionP1}</p>
            <h2 className="PicText3 text-center"></h2>
            <p className="desc">{desc.PlanningDiscriptionP2}</p>
            <h2 className="PicText4 text-center"></h2>
            <p className="desc">{desc.PlanningDiscriptionP3}</p>
            <p className="desc">{desc.PlanningDiscriptionP4}</p>
            <h3 className="Title">{desc.AtGlance}</h3>
            <ul className="list">
              <li>{desc.G1}{desc.G1}</li>
              <li>{desc.G2}</li>
              <li>{desc.G3}</li>
              <li>{desc.G4}</li>
              <li>{desc.G5}</li>
              <li>{desc.G6}</li>
              <li>{desc.G7}</li>
              <li>{desc.G8}</li>
              <li>{desc.G9}</li>
            </ul>
          </div>
          <hr className="hrclass" />
          <h2 className="Highlight">
            <i className="bi bi-house-door-fill green">NieghbourHood</i>
          </h2>
          <hr className="hr-17" />
          <div className="container">
            <h3 className="Title">{desc.Facility1}</h3>
            <h3 className="Title">{desc.Facility2}</h3>
            <p className="desc">{desc.transportP1}</p>
            <h3 className="Title">{desc.MarketNear}</h3>
            <p className="desc">{desc.MarketP1}</p>
            <h3 className="Title">{desc.Mosque}</h3>
            <h2 className="PicText5 text-center"></h2>
            <p className="desc">{desc.MosqueP1}</p>
            <h3 className="Title">{desc.Education}</h3>
            <p className="desc">{desc.eduP1}</p>
            <h3 className="Title">{desc.Banks}</h3>
            <p className="desc">{desc.BankP1}</p>
            <h3 className="Title">{desc.Electricity}</h3>
            <p className="desc">{desc.ElecP1}</p>
            <h3 className="Title">{desc.Hospitals}</h3>
            <p className="desc">{desc.HospitalP1}</p>
            <p className="desc">{desc.HospitalP2}</p>
            <h3 className="Title">{desc.Property}</h3>
            <h3 className="Title">{desc.SalePrice}</h3>
            <h4 className="Title">{desc.ForSale}</h4>
            <p className="desc">{desc.ForSaleP1}</p>
            <p className="desc">{desc.ForSaleP2}</p>
            <h3 className="Title">{desc.Popular}</h3>
            <p className="desc">{desc.PopularP1}</p>
          </div>
          <hr className="hrclass" />
          <h2 className="Highlight">
            <i className="bi bi-building green">LifeStyle</i>
          </h2>
          <hr className="hr-17" />
          <div className="container">
            <h3 className="Title">{desc.Lifestyle}</h3>
            <h3 className="Title">{desc.Malls}</h3>
            <p className="desc">{desc.MallP1}</p>
            <h3 className="Title">{desc.Restaurant}</h3>
            <p className="desc">{desc.RestaurantP1}</p>
            <h3 className="Title">{desc.NearBy}</h3>
            <p className="desc">{desc.NearByP2}</p>
            <p className="desc">{desc.NearByP3}</p>
          </div>
          <hr className="hrclass" />
          <h2 className="Highlight">
            <i class="bi bi-geo-alt-fill green">Location</i>
          </h2>
          <hr className="hr-17" />
          <div className="container">
            <h3 className="Title">{desc.LocationNearBy}</h3>
            <ul className="list">
              <li>{desc.L1}</li>
              <li>{desc.L2}</li>
              <li>{desc.L3}</li>
              <li>{desc.L4}</li>
              <li>{desc.L5}</li>
              <li>{desc.L6}</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Area_details
