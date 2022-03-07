import bath from '../images/bathroom.png'
import bed from '../images/bedroom.png'
import area from '../images/area.png'
import kitchen from '../images/kitchen.png'

function House_icons() {
    return (
        <div className='house_icons_container'>
            <div className='house_icons_img'><img src={bath} alt="bath imag"/><p>6 bathrooms</p></div>
            <div className='house_icons_img'><img src={bed} alt="bath imag"/><p>6 bedrooms</p></div>
            <div className='house_icons_img'><img src={area} alt="bath imag"/><p>10 Marla</p></div>
            <div className='house_icons_img'><img src={kitchen} alt="bath imag"/><p>Big Kitchen</p></div>
        </div>
    )
}

export default House_icons
