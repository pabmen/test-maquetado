import Head from './components/Head'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Listing from './components/Listing'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <main className="la-preuve-wrapper" id="view-sale">
      <Head/>

      <Header/>
			<div class="content-wrapper">
				<div>
					<Sidebar/>
				</div>
				<div class="listing">
          <Listing/>
				</div>
			</div>
      <Footer/>
			<div class="header__mobile-menu--toggle menu-mobile-helper"></div>

    </main>
  );
}


export default App;
