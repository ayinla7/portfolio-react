/** @format */

import React from "react";
import Anime, { anime } from "react-anime";
import PortfolioItem from "./helpers/PortfolioItem";

const Portfolio = ({ refs }) => {
	return (
		<div id="portfolio" className="flex flex-col w-full py-5" ref={refs}>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Portfolio
			</h1>
			<div className="flex justify-center items-center flex-wrap">
				<Anime
					translateX={anime.stagger(50, { from: "start" })}
					translateY={anime.stagger(50, { from: "center" })}
				>
					<PortfolioItem
						heading="Howbodi"
						heading2="Mental Healthcare services - Live"
						type="howbodi"
						title="Mental Healthcare services"
						description={
							"A dynamic Website offering mental healthcare services, completely built with REACT, REDUX, AXIOS, BOOTSTRAP, TAILWIND CSS and various other technologies."
						}
						link="https://www.howbodi.io"
					/>
					<PortfolioItem
						heading="TheLinkSolution"
						heading2="Webhosting Service - Live"
						type="tls"
						title="Webhosting Service"
						// title="DYNAMIC PERSONAL PORTFOLIO"
						description={
							"Web hosting platform build using WordPress, PHP, Woocommerce, WHMCS, KingComposers and other technologies"
						}
						link="https://thelinksolution.com"
					/>
					<PortfolioItem
						heading="RenMoney"
						heading2="Loan and lending services - Live"
						type="rmy"
						title="Loan and lending services"
						description={
							"Loan and Lendimg platform built using HTML, CSS, JAVASCRIPT, BOOTSTRAP and other technologies"
						}
						link="https://renmoney-clone.netlify.app"
					/>
					<PortfolioItem
						heading="Blind date"
						heading2="Video background for blind date site - Live"
						type="date"
						title="Video background for blind date site"
						description={
							"Loan and Lendimg platform built using HTML, CSS, JAVASCRIPT, BOOTSTRAP and other technologies"
						}
						link="https://date-vbg.netlify.app"
					/>
					<PortfolioItem
						heading="Sole Diamond LTD"
						heading2="Web Development Project - Client"
						type="sd"
						title="Cleaning services"
						description={
							"Website for marketing of Cleaning service offered to Clients based in Leicester using HTML, CSS, JAVASCRIPT, and BOOTSTRAP"
						}
						link="https://solediamondlimited.com"
					/>
					<PortfolioItem
						heading="GT DENTAL SPECIALIST"
						heading2="Dental Appointments booking - Live"
						type="gt"
						title="Dental Appointments booking"
						description={
							"Web platform for dental service built using WordPress, PHP, Woocommerce, WHMCS, KingComposers and other technologies"
						}
						link="https://gtdentalspecialist.com.ng"
					/>
					<PortfolioItem
						heading="MY PORTFOLIO"
						heading2="Personal Portfolio Website - Live"
						type="pt"
						title="PERSONAL PORTFOLIO WEBSITE"
						description={
							"Personal Portfolio completely built with REACT, REDUX, and various other technologies."
						}
						link="https://ayinlakwamdeen.com"
					/>

					<PortfolioItem
						heading="RECUITMENT SERVICE"
						heading2="Front-End for Recruitment website - Live"
						type="rs"
						title="Front-End for Recruitment Website"
						description={
							"Personal Portfolio completely built with REACT, REDUX, and various other technologies."
						}
						link="https://recruitmentsite.netlify.app"
					/>

					<PortfolioItem
						heading="ARTICLE/BLOG"
						heading2="Front-End for Article/blog website - Live"
						type="ab"
						title="Front-End for Article"
						description={
							"Website built with HTML, CSS, JAVASCRIPT, BOOTSTRAP and various other technologies."
						}
						link="https://articlesite.netlify.app"
					/>

					<PortfolioItem
						heading="COMPUTER VISION"
						heading2="Fruits and Vegetables recognition App - Github"
						type="cv"
						title="Fruits and Vegetables recognition App"
						description={
							"Application for realtime recognition of Fruits and Vegetables using Neural Network, built using HTML, CSS, JAVASCRIPT, PYTHON, FLASK, JINJA2, NUMPY and other technologies."
						}
						link="https://github.com/ayinla7/CNNWebApp"
					/>
					<PortfolioItem
						heading="ImpactEncrypt.com"
						heading2="Website for a construction company - Live"
						type="loc"
						title="Website for a construction company"
						description={
							"Website for a construction company built using HTML, CSS, JAVASCRIPT, BOOTSTRAP and other technologies"
						}
						link="https://impact-encrypt.netlify.app"
					/>



{/* 
					<PortfolioItem
						heading="ANDROID APP"
						heading2="Stock Application Port"
						type="app"
						title="ANDROID APP DEVELOPMENT"
						description={
							"Stock Application Port - Ported all the stock applications of Sony to be compatable for all general Android devices."
						}
						link="https://forum.xda-developers.com/t/apps-ported-mar03-xperia-ported-apps-for-aosp-based-roms.3558430/"
					/> */}
					
					<PortfolioItem
						heading="Mobile bookshop App"
						heading2="Mobile - live"
						type="mb"
						title="ANDROID ROM DEVELOPMENT"
						description={
							"Mobile Application for sales of books using Flutter and Dart over an API built using dart."
						}
						link="https://github.com/ayinla7/Bookshop-app"
					/>
				</Anime>
			</div>
		</div>
	);
};

export default Portfolio;
