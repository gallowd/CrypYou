import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import { useMemo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

ChartJS.defaults.color = 'white';
ChartJS.defaults.font.family = 'Audiowide';
ChartJS.defaults.font.size = 14;

const labels = ["1 year", "200 days", "30 days", "14 days", "7 days", "24 hours", "1 hour"];

const options = {
    responsive: true,
    grid: {
        display: false,
    },
    scales: {
        y: {
            display: true,
            title: {
                display: true,
                text:'Price change percentage'
            },
            grid: {
                display: false,
            }
        },
        x: {
            display: true,
            title: {
                display: true,
                text:'Time ago'
            },
            grid: {
                display: false,
            }
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Price Evolution'
        },
        legend: {
            display: false,
        },
    }
} 

export default function LineChart({year, months, month, twoWeek, week, day, hour}) {

    const scores = [year, months, month, twoWeek, week, day, hour];
    const data = useMemo(function () {
        
        return {
            datasets: [
                {
                    label: "Percentage",
                    data: scores,
                    borderColor: "#2bbaf1",
                    pointBackgroundColor: "#2bbaf1"
                },
            ],
            labels
        };
    }, []);
    return <Line data={data} options={options}/>
}