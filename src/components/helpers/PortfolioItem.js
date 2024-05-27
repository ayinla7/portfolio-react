/** @format */

import React, { useState } from "react";
import Anime, { anime } from "react-anime";
import { BoxArrowInUpRight } from "react-bootstrap-icons";
import ApplicationDev from "../../assests/app.svg";
import WebDev from "../../assests/web.svg";
import RomDev from "../../assests/rom.svg";
import SoftDev from "../../assests/soft.svg";
import PortDev from "../../assests/port.svg";
import howbodi from "../../assests/hb.png";
import tls from "../../assests/tls.jpeg";
import sd from "../../assests/sd.jpeg";
import gt from "../../assests/gtd.jpeg";
import pt from "../../assests/project-10.jpg";
import rs from "../../assests/bl.png";
import ab from "../../assests/blog.jpg";
import cv from "../../assests/fruit.jpeg";
import mb from "../../assests/bs.png";
import date from "../../assests/date.png";
import rmy from "../../assests/rmy.jpeg";
import loc from "../../assests/loc.png";


const PortfolioItem = (props) => {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="relative flex flex-col gap-5 w-[300px] h-[400px] items-center justify-around bg-secondaryBg rounded-3xl p-5 m-5"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="flex flex-col gap-1 items-center text-center">
				<h1 className="text-primaryTxt">{props.heading}</h1>
				<h3 className="text-primaryTxt text-sm opacity-60 font-extralight">
					{props.heading2}
				</h3>
			</div>
			<div className="flex flex-col items-center justify-center text-center h-1/3">
				{hover ? (
					<Anime translateY={[-80, 0]}>
						<h1 className="text-primaryTxt text-sm">{props.title}</h1>
						<p className="text-primaryTxt text-sm opacity-50 mt-2">
							{props.description}
						</p>
					</Anime>
				) : props.type === "software" ? (
					<img
						src={SoftDev}
						className="w-[180px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "port" ? (
					<img
						src={PortDev}
						className="w-[160px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "app" ? (
					<img
						src={ApplicationDev}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "web" ? (
					<img
						src={WebDev}
						className="w-[160px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "rom" ? (
					<img
						src={RomDev}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "howbodi" ? (
					<img
						src={howbodi}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "sd" ? (
					<img
						src={sd}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) : props.type === "gt" ? (
					<img
						src={gt}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) : 
				props.type === "pt" ? (
					<img
						src={pt}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "rs" ? (
					<img
						src={rs}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "tls" ? (
					<img
						src={tls}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "ab" ? (
					<img
						src={ab}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "cv" ? (
					<img
						src={cv}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "mb" ? (
					<img
						src={mb}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "rmy" ? (
					<img
						src={rmy}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "date" ? (
					<img
						src={date}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) :
				props.type === "loc" ? (
					<img
						src={loc}
						className="w-[90px] opacity-70"
						alt=" Icon"
					/>
				) : null}
			</div>

			<a
				href={props.link}
				target="_blank"
				className="opacity-50 flex items-center text-primaryTxt text-xs transition duration-300 ease-in-out hover:opacity-100"
			>
				SHOOT <BoxArrowInUpRight className="mx-1" color="#fff" size={12} />
			</a>
		</div>
	);
};

export default PortfolioItem;
