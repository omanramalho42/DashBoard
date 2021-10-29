import React from "react";
import Chart from 'react-apexcharts';
import { Container } from './styles';

interface ChartProps {
    series: {
        name: string;
        data: number[];
    }[];
    options: {
        color: string[]
        chart: {
            background: string;
        },
        dataLabels: {
            enabled: boolean;
        },
        stroke: {
            curve: 'smooth' | 'straight' | 'stepline';
        },
        xavis: {
            categories: string[];
        },
        legend: {
            position: 'top' | 'bottom' | 'left' | 'right';
        },
        grid: {
            show: boolean;
        }   
    }
}

const Card:React.FC = () => {
    
    const chartProps: ChartProps = { 
        series: [{
            name: 'Online customers',
            data: [40,70,20,90,36,80,30,91,60]
        },
        {
            name: 'Store customers',
            data: [40,30,70,80,40,16,40,20,51,10]
        }],
        options: {
            color: ['#6ab04c', '#2980b9'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xavis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Ago', 'Sep']
            },
            legend: {
                position: 'top',
            },
            grid: {
                show: false
            }
        }
    }
    return(
        <Container>
            <Chart 
                options={chartProps.options}
                series={chartProps.series}
                type='line'
                height='300px'
            />
        </Container>
    );
}

export default Card;