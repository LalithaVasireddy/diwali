import React, {useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

	export default function Home({ action = '/diwali' })  {
		const router = useRouter();
		const query = router.query;		
		const [inputValue, setInputValue] = useState('');
		
		const handleSubmit = preventDefault(() => {
			// Show Progress
			router.push({
				pathname: action,
				query: {
					name: inputValue
				},
			});
		});
		const handleChange = (event) => {
			setInputValue(event.target.value);
			
		}
		
			
		return (
			<div>
				<Head>
				<title>Diwali Blessings 2021</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />					
			</Head>
			{ false && (
				<div className="">				
				<div className="outer">
					<div className="middle">	
					<div className="inner">							
						
							<form onSubmit={handleSubmit}>	
							<div className="heading"></div>								
							<br></br><br/><br/>
								<div><input type="text" placeholder="Please enter your name" autoFocus onChange={handleChange}></input></div>
								<br />
								
								<div className="buttonClass"><button className="button"><b>Let’s Begin</b></button></div>								
							</form>										
						
						</div>						
					</div>
				</div>
		</div>	
			)
			}
			
			</div>
		);
	};
	

