import React from 'react'
import coin1 from '../images/coin1.svg'
import coin2 from '../images/coin2.svg'
import coin3 from '../images/coin3.svg'
import coin4 from '../images/coin4.svg'
import investor from '../images/investor.svg'
import fluentdata from '../images/fluentdata.svg'
import solana from '../images/Solana Coin.svg'
import aptos from '../images/Aptos.svg'
import { Chart as ChartJS } from "chart.js/auto"
import { Line, Bar } from 'react-chartjs-2'
import sourceData from '../data/sourceData.json'
import lineChartData from '../data/lineChart.json'
export default function Hero() {
    return (
        <div className="container pt-4 mb-4">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    <div className="tracker_details">
                        <div className='mb-4'>
                            <div className="pb-2">
                                <h1 className=''>Liquid Staking Derivatives Tracker</h1>
                            </div>
                            <div className="below_details">
                                <div className="details_sub d-flex flex-column flex-md-row pb-2">
                                    <div className="coin_images d-flex" style={{ gap: "10px" }}>
                                        <img src={coin1} alt="" />
                                        <img src={coin2} alt="" />
                                        <img src={coin3} alt="" />
                                        <img src={coin4} alt="" />
                                    </div>
                                    <div className="investor_div d-flex" style={{ gap: "10px" }}>
                                        <img src={investor} alt="" />
                                        <p>100K+ investors</p>
                                    </div>
                                    <div className="investor_div d-flex">
                                        <img src={fluentdata} alt="" />
                                        <p> Market Cap Dominance <span><strong>₹118T (76.26%)</strong></span></p>
                                    </div>
                                </div>

                                <div className="investor_div d-flex text-align-center">
                                    <p style={{ color: "#02DE25" }} className='g-2'> <i class="bi bi-caret-up-fill"></i>10.45%</p>
                                    <p className='text-muted'>Tue Feb 13 2024 at 12:37 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="line_chart p-4" style={{ borderRadius: "20px", border: "3px solid white" }}>
                            <h4 className='mt-4'>Analytics</h4>
                            <Line
                                data={{
                                    labels: lineChartData.map((data) => data.label),
                                    datasets: [
                                        {
                                            label: "Revenue",
                                            data: lineChartData.map((data) => data.revenue),
                                            backgroundColor: "rgba(255, 159, 64, 0.2)",
                                            borderColor: "#FFA500",
                                            fill: {
                                                target: 'origin',
                                                above: 'rgba(255, 159, 64, 0.2)',
                                                below: 'linear-gradient(55deg, rgb(166, 242, 215) 9%, rgb(163, 207, 255) 53%)'
                                            }
                                        },
                                        {
                                            label: "Cost",
                                            data: lineChartData.map((data) => data.cost),
                                            backgroundColor: "rgba(255, 159, 64, 0.2)",
                                            borderColor: "#FFA500",
                                            fill: {
                                                target: 'origin',
                                                above: 'rgba(255, 159, 64, 0.2)',
                                                below: 'linear-gradient(55deg, rgb(166, 242, 215) 9%, rgb(163, 207, 255) 53%)'
                                            }
                                        },
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            grid: {
                                                display: false
                                            }
                                        },
                                        y: {
                                            grid: {
                                                display: true,
                                                borderDash: [2, 4]
                                            }
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    }
                                }}
                            />

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 pt-2 col-lg-4">
                    <div className="amount_section mb-2">
                        <div className="card bg-transparent" style={{ borderRadius: "20px", border: "3px solid white" }}>
                            <div className="card-header p-3 bg-light" style={{ borderRadius: "20px 20px 20px 20px" }}>
                                <strong>ENTER AMOUNT</strong>
                            </div>
                            <form className='p-2'>
                                <div class="mb-3">
                                    <input type="number" class="form-control p-3 text-dark" placeholder='$27,340.00' style={{ borderRadius: "20px " }} />
                                </div>

                                <button type="submit" class="btn btn-dark w-100 p-3" style={{ borderRadius: "20px" }}>Withdraw</button>
                            </form>
                        </div>
                    </div>
                    {/* popular_coin_sets */}
                    <div className="popular_coin_sets">
                        <div className="card p-3 bg-transparent" style={{ borderRadius: "20px", border: "3px solid white" }}>
                            <div className="d-flex mb-2" style={{ borderRadius: "0px 0px 20px 20px" }}>
                                <i class="bi bi-fire mx-2" style={{ color: "#FF8300" }}></i><strong>Popular Coin Sets</strong>
                            </div>
                            <div className="para">
                                <p>Popularity is based on the number of users who are investing in the asset on Mudrex. A higher popularity rank indicates that more users are investing in this asset in the last few days.</p>
                            </div>
                            <div className="tracker_div d-flex flex-row text-align-center align-items-center justify-content-between p-2 bg-transparent rounded-pill text-align-center" style={{ border: "3px solid white" }}>
                                <div className="coin_images">
                                    <img src={coin1} alt="" width={"20px"} />
                                    <img src={coin2} alt="" width={"20px"} />
                                    <img src={coin3} alt="" width={"20px"} />
                                    <img src={coin4} alt="" width={"20px"} />
                                </div>
                                <div className="tracker_text">
                                    <p>Liquid Staking Derivatives Tracker</p>
                                </div>
                                <div className="tracker_id text-right">
                                    <strong>#1</strong>
                                </div>
                            </div>
                            <div className="ai_tracker">
                                <div className="tracker_div d-flex justify-content-between p-2 text-align-center" >
                                    <div className="coin_images">
                                        <img src={solana} alt="" width={"20px"} />
                                        <img src={coin2} alt="" width={"20px"} />
                                        <img src={coin3} alt="" width={"20px"} />
                                        <img src={aptos} alt="" width={"20px"} />
                                    </div>
                                    <div className="tracker_text">
                                        <p><strong>AI Tracker</strong></p>
                                    </div>
                                    <div className="tracker_id text-right">
                                        <strong>#10 <i class="bi bi-chevron-right"></i></strong>
                                    </div>
                                </div>
                                <div className="tracker_div d-flex justify-content-between p-2 text-align-center" >
                                    <div className="coin_images">
                                        <img src={solana} alt="" width={"20px"} />
                                        <img src={coin2} alt="" width={"20px"} />
                                        <img src={coin3} alt="" width={"20px"} />
                                        <img src={aptos} alt="" width={"20px"} />
                                    </div>
                                    <div className="tracker_text">
                                        <p><strong>AI Tracker</strong></p>
                                    </div>
                                    <div className="tracker_id text-right">
                                        <strong>#10 <i class="bi bi-chevron-right"></i></strong>
                                    </div>
                                </div>
                                <div className="tracker_div d-flex justify-content-between p-2 text-align-center" >
                                    <div className="coin_images">
                                        <img src={solana} alt="" width={"20px"} />
                                        <img src={coin2} alt="" width={"20px"} />
                                        <img src={coin3} alt="" width={"20px"} />
                                        <img src={aptos} alt="" width={"20px"} />
                                    </div>
                                    <div className="tracker_text">
                                        <p><strong>AI Tracker</strong></p>
                                    </div>
                                    <div className="tracker_id text-right">
                                        <strong>#10 <i class="bi bi-chevron-right"></i></strong>
                                    </div>
                                </div>
                                <div className="tracker_div d-flex justify-content-between p-2 text-align-center" >
                                    <div className="coin_images">
                                        <img src={solana} alt="" width={"20px"} />
                                        <img src={coin2} alt="" width={"20px"} />
                                        <img src={coin3} alt="" width={"20px"} />
                                        <img src={aptos} alt="" width={"20px"} />
                                    </div>
                                    <div className="tracker_text">
                                        <p><strong>AI Tracker</strong></p>
                                    </div>
                                    <div className="tracker_id text-right">
                                        <strong>#10 <i class="bi bi-chevron-right"></i></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
