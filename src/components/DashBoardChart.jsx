import React, {useRef, useEffect} from 'react'
import Chart from 'chart.js/auto';

const DashBoardChart = ({dashboardData}) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
   
    useEffect(() => {
        const chart = chartRef.current;
        const labels = dashboardData.chart?.labels;
        const replied= dashboardData.chart?.replied;
        const sent = dashboardData.chart?.sent;
        if (chart) {
            const ctx = chart.getContext('2d');
            const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
            gradient1.addColorStop(0, '#E1EAFD');
            gradient1.addColorStop(1, '#E1EAFD');

            const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
            gradient2.addColorStop(0, '#8091B5');
            gradient2.addColorStop(1, '#1F78B4');
 
            const data = {
                labels: labels,
                datasets: [ 
                    {
                        label: 'Messages Replied',
                        data: replied,
                        fill: true,
                        backgroundColor: gradient1,
                        borderColor: '#E1EAFD',
                        tension: 0.4, // For smooth curves
                    },
                    {
                        label: 'Messages Sent',
                        data: sent,
                        fill: true,
                        backgroundColor: gradient2,
                        borderColor: '#1F78B4',
                        tension: 0.4, // For smooth curves
                    },
                ],
            };
            const options = {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white',
                        },
                    },
                    x: {
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            color: '#9d9fa35e'
                        }
                    },
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white', 
                        },
                    },
                },
            };
            // Destroy existing chart instance if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            // Create new chart instance
            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                data,
                options,
            });
        }
        //destroy chart instance when the component unmounts
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [dashboardData]);

    return (
        <div className='p-6'>
        <h2 style={{ color: 'white' }}>Response Rate</h2>
        <canvas ref={chartRef} />
    </div>
    );
};

export default DashBoardChart
