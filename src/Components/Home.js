import React from "react";
import {
  CDBBtn,
  CDBProgress,
  CDBContainer,
  CDBLink } from "cdbreact";
// import { Pie, Bar } from "react-chartjs-2";
import Sidebar from "../Common/SideBar";
import Navbar from "../Common/Navbar";

export default function App() {

//   const data = {
//     chart1:{
//       labels: [
//         "Eating",
//         "Drinking",
//         "Sleeping",
//       ],
//       datasets: [
//         {
//           label: "My First dataset",
//           backgroundColor: [
//             "#F2C94C",
//             "#2F80ED",
//             "#9B51E0",
//           ],
//           borderWidth: 0,
//           data: [9, 22, 7],
//         },
//       ]
//     },
//     chart2:{
//       labels: [
//         "Eating",
//         "Drinking",
//         "Sleeping",
//         "Designing",
//         "Coding",
//         "Cycling",
//         "Running",
//       ],
//       datasets: [
//         {
//           label: "My First dataset",
//           backgroundColor: "rgba(255, 153, 51, 0.8)",
//           borderColor: "rgb(102, 51, 0)",
//           data: [65, 59, 75, 81, 56, 55, 40],
//         },
//         {
//           label: "My Second dataset",
//           backgroundColor: "#2F80ED",
//           borderColor: "rgb(0, 41, 102)",
//           data: [38, 48, 60, 79, 96, 47, 80],
//         },
//       ]
//     }
//   }
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     legend: {display:false}, 
//     scales: {
//       xAxes: [{
//         ticks: {
//           display: false
//         }, 
//       }],
//       yAxes: [{
//         gridLines: {
//           display:false
//         },
//         ticks: {
//           display: false
//         }
//       }]
//     }
//   }

  return ( 
    <div className="dashboard d-flex">
    	<div>
      	<Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
	  <Navbar/>
	    <div style={{height:"100%"}}>
	        <div style={{height:"calc(100% - 64px)", overflowY:"scroll"}}>
	          <div className="d-flex card-section">
		        	<div className="cards-container">
	              <div className="card-bg w-100 border d-flex flex-column">
	                <div className="p-4 d-flex flex-column h-100">
	                  <div className="d-flex align-items-center justify-content-between">
	                    <h4 className="m-0 h5 font-weight-bold text-dark">Total Active Crpto Currency</h4>
	                    <div className="py-1 px-2 bg-grey rounded-circle"><i className="fas fa-suitcase"></i></div>
	                  </div>
	                  <h4 className="my-4 text-right text-dark h2 font-weight-bold">14069</h4>
	                  <CDBProgress value={65} height={8} colors="primary"></CDBProgress>
	                  <p className="mt-2 text-success small">
	                    <i className="fas fa-angle-up p-0"></i> 27.4%
	                    <span style={{fontSize:"0.95em"}} className="ml-2 font-weight-bold text-muted">Since last month</span> 
	                  </p>
	                  <p className="c-p mb-0 text-dark font-weight-bold text-right mt-auto">
	                    More Details
	                    <i className="fas fa-arrow-right ml-1"></i>
	                  </p>
	                </div>
	              </div>
				  <div className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 2"}}>
	                <div className="d-flex">
	                  <h6  className="h5 font-weight-bold text-dark">Fundamental</h6>
	                  <div className="ml-auto rounded-circle bg-grey py-1 px-2"><i className="fas"></i></div>
	                </div>
	                <p className="c-p text-dark font-weight-bold text-right" style={{marginTop: "0 !important"}}>
					The most fundamental form, the whole concept behind the Cryptocurrency comes down to a database entries that no one is able to change without meeting specific conditions, just like current paper currencies. In order to understand the secure part of the cryptocurrency, let’s quickly look at the current currency system. So today every ones currency is tracked by central figure known as the Bank. The bank is the only figure who makes changes and keeps a record of all authorized transactions like a withdrawal, deposits, or transfers of currency, which are entered into a database as entries. This entries or the transactions are then shared with individuals via Bank statements. 

	                </p>
	              </div>
	              <div className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 2"}}>
	                <div className="d-flex">
	                  <h6  className="h5 font-weight-bold text-dark">Introduction</h6>
	                  <div className="ml-auto rounded-circle bg-grey py-1 px-2"><i className="fas fa-info"></i></div>
	                </div>
	              
	                <p className="c-p text-dark mb-0 font-weight-bold text-right mt-auto">
                  After the U.S. Government’s efforts of regulating the Blockchain based Cryptocurrency, the topic Cryptocurrency has dominated the media. It has gained significant attention from both the Information Technology Sector and the Financial Sector, igniting intense discussions over the role of cryptocurrencies’ gradual transition into the mainstream ecommerce market. The cryptocurrencies’ market is slowly gaining maturity, as the values of the cryptocurrencies have exploded in the recent months; compared to first week of January 2017 to last week of November 2017 cryptocurrencies like Bitcoin, Ethereum, and Litecoin are priced at $9199, $461.61, and $85.64 from $996, $8.29 and $4.49 in January 2017 [3]. Because it claims to be a decentralized, secured, and anonymous system. [7- 9] Naturally, with this appealing claims and this significant jump in the coin value has attracted all sorts of people’s attention from Cybercriminals to big corporate America, and even mainstream website operators –who all wants to get their hands dirty and make a profit on this new Cryptocurrency phenomenon. Thus, in this paper I will elaborate findings on what makes the Cryptocurrency secured on the network. Because, I have often heard people use the terminology, “Everything is hackable, if it’s on the internet” and it is still an alien topic me. 
	                </p>
	              </div>
				
				  <div className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 2"}}>
	                <div className="d-flex">
	                  <h6  className="h5 font-weight-bold text-dark">Secured Crypto</h6>
	                  <div className="ml-auto rounded-circle bg-grey py-1 px-2"><i className="fas"></i></div>
	                </div>
	                <p className="c-p text-dark mb-0 font-weight-bold text-right mt-auto">
					According to CryptocurrencyFacts, “Cryptocurrency is an encrypted decentralized digital currency transferred between peers and confirmed in a public ledger via a process known as mining.” In another words, Cryptocurrency in its most fundament form, is a peer-to-peer electronic cash system that allows its users to securely pay for goods and services online without having to question the transactional information’s integrity and confidentiality. Its a new form of digital commodity that is not controlled by any government, institution, or any entity. Because it is a digital form of currency, it only exists in the online network and does not have any physical form like paper USD, Yen, or Euro. However, the most revolutionary part about the cryptocurrency is that, it is using some of the basic principles of which Cryptography and Black chain ledgering systems to successfully proclaim it to be a decentralized, secured, and anonymous system, which people from all over the world can utilize it at one global rate.  The way in which Cryptography, and Black chain ledgering systems work together ensures confidentiality and integrity in Cryptocurrency. And this synchronized systems processing power is referred as “Cryptocurrency Mining”, named after the analogy of mining gold. 

	                </p>
	              </div>

				  
	            
	            
	            </div>
	          </div>
	          <footer className="footer">
	            <div className="d-flex align-items-center">
	              <CDBLink to="https://www.linkedin.com/in/preshitasoni/" className="text-dark footer-link">
	                <span className="ml-4 lead mb-0 font-weight-bold">Preshita Soni</span>
	              </CDBLink>
	              <span className="footer-rem" style={{fontSize:"3em", margin:"-2rem 0px -1.5rem 1rem", color:"#C4C4C4"}}>&#8226;</span>
	              <small className="ml-2 mt-1">&copy; Preshita, 2024. All rights reserved.</small>
	            </div>
	          </footer>
	        </div>
        </div>
      </div>
    </div>
  );
}
