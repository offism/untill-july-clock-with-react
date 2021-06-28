import {useState , useEffect} from 'react'
export default function Home(){

   const [day , setDay] = useState(0)
   const [hour , setHour] = useState(0)
   const [minute , setMinute] = useState(0)
   const [second , setSecond] = useState(0)
   const [currentTime , setCurrentTime] = useState(new Date())

   useEffect(()=>{
   	const endTime = 1627503114084
   	setDay(Math.floor((endTime - currentTime) / 3600000 / 24))
   	setHour(Math.floor((endTime - currentTime) / 3600000 / 30) )
   	setMinute(Math.floor((endTime - currentTime) / 1000 / 30 / 60 / 24 ) )
   	setSecond(Math.floor((endTime - currentTime) / 1000 / 30 / 24 / 60)) 
   })

	return(
		<>
        <h1>Home</h1>

        <main className="main">
        	<h1 className="main__title">Coming soon!</h1>
        	<div className="countDown">
              <span className="day">{day}</span>
              <span className="hour">{hour}</span>
              <span className="minute">{minute}</span>
              <span className="second">{second}</span>
        	</div>				
        </main>
        </ >
		)
}