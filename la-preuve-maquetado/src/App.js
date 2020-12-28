import React from 'react';
import Head from './components/Head'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Listing from './components/Listing'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
	constructor(){
		super()
		
		this.state = {
			filter: ''
		}
  	}

  	render() {
		return (
			<main className="la-preuve-wrapper" id="view-sale">
				<Head/>
				<Header/>
				<div className="content-wrapper">
					<div>
						<Sidebar/>
					</div>
					<div className="listing">
						<Listing/>
					</div>
				</div>
				<Footer/>
				<div className="header__mobile-menu--toggle menu-mobile-helper"></div>
			</main>
		)
	  }
}


export default App;
