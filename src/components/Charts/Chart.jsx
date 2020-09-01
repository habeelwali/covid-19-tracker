import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../Api/Api.js'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'


 const Chart=({data:{confirmed,recovered,deaths},country})=> {
     const [dailyData,setDailyData]=useState([]);
    useEffect(()=>{
      const fetchAPI=async()=>{
          setDailyData(await fetchDailyData());

      }
     
      fetchAPI();
    }, []);
   const lineChart=(
       dailyData.length ? (
           <Line
           data={{
               labels:dailyData.map(({ date})=>date),
               datasets:[{
                   data:dailyData.map(({ confirmed})=>confirmed),
                   label:'Infacted',
                   borderColor:'blue',
                   fill:true,
               },{
                data:dailyData.map(({ deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,
               }],
           }}
           /> 
       ): null

   );
   const barChart=(
       confirmed ? (
     <Bar 
     data={{
         labels:['infected','recovered','Deaths'],
         datasets:[{
           label:'people',
           backgroundColor:[
            'rgba(0, 0,255,0.5)',
            'rgba(86, 95, 32, 0.5)',
            'red',

           ], 

          data:[confirmed.value, recovered.value,deaths.value] 
         }]
     }}
     options={{
        legend:{display: false},
        title:{display: true, text:` current state is ${country}`},
    }}
     />
       ):null
   );

    return (
     <div className={styles.container}>
     {country ? barChart:lineChart}
     </div>
    )
}
export default Chart;