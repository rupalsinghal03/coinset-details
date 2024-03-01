import React from 'react'
import { Pie } from 'react-chartjs-2'
import doughnutChart from '../data/doughnutChart.json'
export default function Constituents() {
    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="line_chart p-2" style={{ borderRadius: "20px", border: "3px solid white" }}>
                        <h2>Constituents</h2>
                        <Pie
                            data={{
                                labels: doughnutChart.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Count",
                                        data: doughnutChart.map((data) => data.value),
                                        backgroundColor: doughnutChart.map((data) => data.color), // Orange color with transparency
                                        borderColor: doughnutChart.map((data) => data.color), // Orange color

                                    },
                                    {
                                        label: "Cost",
                                        data: doughnutChart.map((data) => data.cost),
                                        backgroundColor: doughnutChart.map((data) => data.color), // Orange color with transparency
                                        borderColor: doughnutChart.map((data) => data.color), // Orange color

                                    },
                                ],
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false // Hide the legend
                                    }
                                }
                            }}

                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
