import React, {useEffect, useState } from 'react';

import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import { setTimeout } from 'timers';
import Head from 'next/head';

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

	export default function Diwali()  {
		const router = useRouter();
		const query = router.query;
		const [cardInfo, setCardInfo] = useState({});
		const [queryParam, setQueryParam] = useState({});			
		const [GaveBlessing, setGaveBlessing] = useState(false);
		const [WatchComplete, setWatchComplete] = useState(false);
		const [SpreadBlessing, setSpreadBlessing] = useState(true);
		const [inputValue, setInputValue] = useState('');

		var youTubeUrl = "https://youtu.be/ecF3fKaSb0Q";

		if(router.query.lan == "tamil")
			youTubeUrl = "https://youtu.be/vFhhN4JpqgY";
		else if(router.query.lan == "hindi")
			youTubeUrl = "https://youtu.be/TO2h9hqNVQ4";
		else if(router.query.lan == "telugu")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "spanish")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "greek")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "italian")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "port")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "marathi")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "russian")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";
		else if(router.query.lan == "french")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";


		useEffect(() => {
			if (router.isReady) {
				const _qryParam = router.query;
				setQueryParam(_qryParam); 
			}
			}, [router.query]);
	
		useEffect(() => {
			const fetchData = async () => {
				try {	
					if(queryParam["name"])
					{
						const url = `https://script.google.com/macros/s/AKfycbz6Lq22VVTFBlGPyj3Ph6q15DFtzFFchB11WPiMkQ/exec?i=2&fullname=${queryParam["name"]}&lang=${queryParam["lan"]}`;
						
						const res = await fetch(`${url}`);
						const data = await res.json();
						setCardInfo(data);
						return data;
					}					
					
				} catch (error) {
					console.log(error);
				}
			};
			fetchData();
		}, [queryParam]);
		
		const handleGaveBlessing = ({played, playedSeconds}) => {
			if(playedSeconds >= 5 && !GaveBlessing) {			
				setGaveBlessing(true)							
			}
			if(playedSeconds >= 176) {			
				setWatchComplete(true)							
			}
		}

		const handleChange = (event) => {
			setInputValue(event.target.value);
			
		}

		const handleClick = () => {
			const fetchData = async () => {
				try {	

						const url = `https://script.google.com/macros/s/AKfycbwng-kD9PtaAg46DRir8WfiiDrmQjk0saPzzTrx/exec?i=1&blessing=${inputValue}`;
						setSpreadBlessing(false);
						const res = await fetch(`${url}`);
						const data = await res.json();
						return data;
									
					
				} catch (error) {
					console.log(error);
				}
			};
			fetchData();
		}
			
		return (
			<div>
				<Head>
				<title>Diwali Blessings 2021</title>					
			</Head>
			<div className="">
					<div className="">
						<div className="">						
							{
								!WatchComplete && (
									<div className="player-wrapper">
										<ReactPlayer className="react-player"
										url={youTubeUrl}
										width="100%"
										height="100%"
										playing
										controls
										onProgress={handleGaveBlessing}										
										/>
									</div>
								)
							}
							{
								WatchComplete && (
									<div className="thankyou">
										
									
									
										<div>Thank you for joining the Australian Virtual Centre online Diwali</div><br />
									<div>Please join our meditation classes / workshops on</div>
									<div><a href="https://brahmakumaris.org.au/new/virtual-centre">https://brahmakumaris.org.au/new/virtual-centre</a></div><br />
									
									</div>
								)
							}
								
									<br></br>
									{
										GaveBlessing && (
											<div className= {WatchComplete ? "boxEnd" : "box"}>												
										<div className="name">{cardInfo["disp_name"]}</div>
										<div className="slogan">{cardInfo["slogan"]} </div></div>
										)
									}									
								</div>
						</div>
					</div>
			</div>				
		);
	};
	

