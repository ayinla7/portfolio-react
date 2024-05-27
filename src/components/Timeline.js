/** @format */

import React from "react";
import TimelineItem from "./helpers/TimelineItem";
import timelineOne from "../assests/timelineOne.svg";
import timelineTwo from "../assests/timelineTwo.svg";
import timelineThree from "../assests/timelineThree.svg";

const Timeline = ({ refs }) => {
	return (
		<div
			id="timeline"
			className="relative flex flex-col items-center w-full py-5 mt-[2.5in]"
			ref={refs}
		>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Timeline
			</h1>
			<div className="flex gap-3 xl:gap-5 absolute xl:right-20 top-40">
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#06d6a0] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Employment
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#FF9704] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Freelance Projects
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#FFF] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Education
					</span>
				</div>
			</div>
			<div className="flex justify-between flex-col w-full xl:w-[70%] mt-20">
				{/* article start*/}
				<div className="flex items-center gap-40 border-l-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] border-4 rounded-full w-14 h-14 flex items-center justify-center -top-[10px] -left-[30px]">
						<h4 className="text-primaryTxt">8</h4>
					</div>
					<div className="py-10 xl:px-16 xl:w-[45%]">
						<TimelineItem
							type="employment"
							duration={"2022 - Present"}
							title={"Sole-Diamond LTD"}
							designation={"Front-End Developer"}
							description={[
								"Build web applications with web development best practices.",
								"Transform app designs into front-end code with HTML, CSS, and JavaScript.",
								// "Work with back-end developers to integrate UI components with APIs and databases.",
								"Gather and refine specifications and requirements based on technical requirements or UX design.",
								// "Debug HTML/CSS/JS related bugs resulting build issues of Google Cloud.",
							]}
						/>



						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] bottom-[36%] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">7</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2023 - Present"}
								title={
									"Photography Website - An Open Source, web development project"
								}
								designation={"Freelance Project"}
								description={[
									"This is an open source platform for a photography company where clients are able to access their photographs from the comfort of their homes"
								
								]}
							/>
						</div>

						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] bottom-[36%] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">6</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="education"
								duration={"2021 - 2022"}
								title={
									"Masters degree in Computer Science"
								}
								designation={"Coventry University, UK"}
								description= {["Dissertation: Development of responsive web application for fruits and vegetables detection using artificial neural networks - This research looks into developing ANN models in detecting images of fruits and vegetables and comparing the results of these models using various machine learning metrics such as validation accuracy and F1-score. The model with the best result is used in developing a web application which can be used in detecting various fruits and vegetables in real time."
								]}
							/>
						</div>


					</div>
					<div className="w-[100px] h-[100px] bg-primaryBg absolute -right-[50px] -bottom-[50px]"></div>
					<div className="hidden xl:block w-[500px]">
						<img src={timelineTwo} alt="Timeline Img" />
					</div>
				</div>
				{/* article end */}

				{/* article start*/}
				<div className="flex gap-40 items-center justify-end border-r-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="hidden xl:block w-[500px]">
						<img src={timelineOne} alt="Timeline Img" />
					</div>
					<div className="z-50 absolute border-t-4 border-r-4 rounded-tr-3xl w-[100px] h-[100px] -right-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] top-[10%] border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] top-56">
						<h4 className="text-primaryTxt">5</h4>
					</div>
					<div className="absolute w-[100px] h-[100px] bg-primaryBg -bottom-[50px] left-0"></div>

					<div className="xl:px-14 py-10 xl:w-[45%] float-right">
						<TimelineItem
							type="employment"
							duration={"2020 - 2022"}
							title={"TheLink Solution LTD"}
							designation={"Web developer"}
							description={[
								"Led development of functioning websites for SMEs at low cost using React.JS, WordPress, HTML, CSS, JavaScript, Python and Typescript also integrating and consuming APIs for payments and direct chats.",
								"Planned, developed, tested, deployed, and maintained web applications.",
								"Worked closely with clients to host and organize web presence and develop rich interfaces.",
								"Resolve product related or service related issues by performing activities such as debugging and troubleshooting.",
								"Provide Knowledge Training to Clients over call, message, email or chat along with Application Support.",

								// "Contact customers to respond to inquiries or to notify them of claim investigation results or any planned adjustments.",
							]}
							link="https://www.thelinksolution.com"
						/>

						




						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] bottom-[25%] border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] bottom-24">
							<h4 className="text-primaryTxt">4</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2020 - 2021"}
								title={"HOWBODI.IO"}
								designation={"Freelance Project"}
								description={[
									"Teamed up with other developers on Web Development freelance project. A dynamic website, for Mental Healthcare.",
								]}
								link="https://www.howbodi.io"
							/>
						</div>
					</div>
				</div>
				{/* article end */}
				{/* article start*/}
				<div className="flex gap-40 items-center border-l-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="z-50 absolute border-t-4 border-l-4 rounded-tl-3xl w-[100px] h-[100px] -left-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] border-4 top-[10%] rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
						<h4 className="text-primaryTxt">3</h4>
					</div>
					<div className="xl:px-14 py-10 xl:w-[45%]">
						<TimelineItem
								type="education"
								duration={"2017 - 2018"}
								title={"C# development Bootcamp"}
								designation={"hayroyal Consult"}
								description={["Training on development of deskstop applications using C# ans MSSQL"
									]}
						/>

						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] top-[30%] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">2</h4>
						</div>

						<div className="mt-20">
							<TimelineItem
								type="education"
								duration={"2015 - 2019"}
								title={"Bachelor of Science (Computer Science)"}
								designation={
								"Ajayi Crowther University, Oyo"
							}
							description={["First class degree"
									]}
								/>
						</div>

						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] border-4 bottom-[32%] rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">1</h4>
						</div>
						<div className="w-[100px] h-[100px] bg-primaryBg absolute -right-[50px] -bottom-[50px]"></div>
						<div className="mt-20">
							<TimelineItem
								type="employment"
								duration={"2018"}
								title={
									"Fiber Optic Engineer"
								}
								designation={"Syscomptech Communications LTD"}
								description={["Designed well-structured document to keep track of all dispatch boxes using GIS leading to ease in tracking boxes during downtime. ",
								"Took leadership of the technical team for a period of 3 months, connecting 18 new users, ensuring swift 	connection within 2 hours and management of cables to reduce network downtime",
								"Trained new interns on fiber optic cabling increasing their performance, while supporting customers in 	troubleshooting in-person and over the phone to ensure maximum satisfaction."	]}
							/>
						</div>
					</div>
					<div className="hidden xl:block w-[500px]">
						<img src={timelineThree} alt="Timeline Img" />
					</div>
				</div>
				{/* article end */}
				{/* article start*/}
			
			</div>
		</div>
	);
};

export default Timeline;
