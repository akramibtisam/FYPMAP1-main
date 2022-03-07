function House_details() {
    return (
        <div className="house_details">
            <div className='house_detail_heading'><h2>Property Deatils</h2></div>
            <div className='house_detail_boxes_container'>
                <div className='house_detail_box1'>
                    <div className='box1'><span>Type</span><span>House</span></div>
                    <div className='box1'><span>Area Sqr</span><span>10 Maral</span></div>
                    <div className='box1'><span>Fully Furnished</span></div>
                </div>
                <div className='box2'>
                    <span>Accessibilities</span>
                    <ul>
                        <li>Water</li>
                        <li>Gas</li>
                        <li>Electricity</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default House_details
