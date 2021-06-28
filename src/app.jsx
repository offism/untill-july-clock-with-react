import {useState} from 'react'
import './App.scss'
import {BrowserRouter , Route , Switch ,Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

export default function App (){
	return (

	<BrowserRouter>
     
       <nav>
       	 <ul>
       	 	<li>
       	 		<Link to="/">Home</Link>
       	 	</li>
       	 	<li>
       	 		<Link to="/about">About</Link>
       	 	</li>
       	 </ul>
       </nav>

	  <Switch>
	  	 <Route path="/" exact component={Home} />

	  	 <Route path="/about" exact component={About} />
	  	 	
	  </Switch>
	</BrowserRouter>

		)
}