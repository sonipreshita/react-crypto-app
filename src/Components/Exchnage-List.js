import React, { useEffect, useState } from 'react';
import { CDBBtn } from "cdbreact";
import Sidebar from "../Common/SideBar";
import axios from 'axios'

export const Exchanges = () => {
    const [data,setdata] = useState([])
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/exchanges')
      .then(res=>{
        setdata(res.data)
      }).catch(error=>console.log(error))
    }, [])
    const filteredCoins = data.filter(data=>
      data.name.toLowerCase()
      )
	return (
		<div className="d-flex profile">
			<div>
      	<Sidebar/>
			</div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
      	<div style={{height:"100%"}}>
					<div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
						<div style={{margin:"0 auto", maxWidth:"1320px"}}>
                            {filteredCoins.map(data=>{
                            if(data.description!== "")return(<div className="card shadow border-0">
				            <div className="p-3">
				              <h4 className="mt-3">{data.name}</h4>
				              <p>{data.description}</p>
				            </div>
				           
				            <div className="p-3">
				              <CDBBtn color="dark" flat outline circle>
				                {data.country}
				              </CDBBtn>
				            </div>
				          </div>)})}
								</div>
							</div>
			        <footer className="d-flex mx-auto py-4">
			          <small className="mx-auto my-1 text-center">&copy; Preshita, 2024. All rights reserved.</small>
			        </footer>
				    </div>
					</div>
				</div>
	);
}