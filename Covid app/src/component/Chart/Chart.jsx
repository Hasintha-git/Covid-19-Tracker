import React ,{useState,useEffect}from 'react';
import { fetchDailyData } from "../../api";
import { Line,Bar } from "react-chartjs-2";

import Styles from "./Chart.module.css";

const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const [dailyData,setdailyData]=useState([]);

        useEffect(()=>{
        const fetchAPI=async()=>{
            setdailyData(await fetchDailyData());
            }
           
          

            fetchAPI();
         },[]);

         const lineChart=(
             dailyData.length
             ?(
             <Line
                data={{
                    labels:dailyData.map(({date})=>date),
                    datasets:[{
                        data:dailyData.map(({confirmed})=>confirmed),
                        label:'Infected',
                        borderColor:'#3333ff',
                        fill:true,
                    },{
                        data:dailyData.map(({deaths})=>deaths),
                        label:'Deaths',
                        borderColor:'red',
                        backgroundColor:'rgba(255, 0, 0, 0.5)',
                        fill:true,
                    }],
                }}
             />):null
         );

         console.log(confirmed,deaths,recovered);
         const barChart =(
             confirmed?(
                 <Bar
                 data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data:[confirmed.value,recovered.value,deaths.value]

                    }]
                 }}
                 options={{
                     legend:{display:false},
                     title:{display:true,text:`Current state in ${country}`},
                 }}
                 />
             ):null
         );

    return (
        <div className={Styles.container}>
            {country ? barChart :lineChart}
        </div>
    )
}

export default Chart