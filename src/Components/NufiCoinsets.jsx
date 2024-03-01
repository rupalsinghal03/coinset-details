import React from 'react'
import nufiright from '../images/nufi-right.svg'
import nufi from '../images/NuFi CoinSets.svg'
import nufiImg from '../images/nufii.svg'
import nufibg from '../images/nufibg.svg'
export default function NufiCoinsets() {
    return (
        <div className="container p-4" style={{ borderRadius: "20px", backgroundImage: `url(${nufibg})`, backgroundRepeat: 'no-repeat', backgroundSize:"contain" }} >
            <div className="row">
                <div className="col-12 col-lg-6 col-sm-12 pt-4" >
                    <div>
                        <div className="img_group mb-4">
                            <div className="first_img mb-4">
                                <img src={nufiImg} alt="" className='p-3 bg-light w-sm-auto' style={{ borderRadius: "20px", border: "4px solid white" }} />
                            </div>
                            <img src={nufi} className='img-fluid' alt="" />
                        </div>
                        <h2 className='mb-4'>crypto basket centred around specific theme for coin sets.</h2>
                        <p className='mb-4'>Elementum blandit dignissim cursus
                            pharetra est arcu volutpat arcu. Nibh ut sapien quis id
                            consectetur vestibulum neque placerat. Adipiscing duis nunc .</p>
                        <button className='btn btn-dark rounded-pill'>Explore Coinset</button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-sm-12 ">
                    <div>
                        <img src={nufiright} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>


    )
}
