import {useState} from 'react'
import './App.scss'

export default function App (){
	const [students , setStudents] = useState([])

	const handleKeyUp = e => { 
		if(e.keyCode === 13){
			setStudents([...students , e.target.value])
			e.target.value = null
		}
	}

return(
	<>
	 <h1>Hello world</h1>
	 <input type="text" onKeyUp={handleKeyUp} />
	 <ul>
       {
       	students.map((student , index) =>{
         return (
       	<li key={index}>{student}</li>
         	)
       	})
       }
	 </ul>	
	</ >
	)

}