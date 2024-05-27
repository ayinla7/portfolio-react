/** @format */

import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import navLogoTxtLight from "../assests/navLogoTxtLight.svg";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "./helpers/Firebase";
import Alert from "./helpers/Alert";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [alert, setAlert] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmail("");
		setAlert(true);
		const docRef = doc(collection(db, "portfolioSubscription"));
		await setDoc(docRef, {
			email: e.target.email.value,
		});
	};

	return (
		<footer className="w-full mt-[2.5in]">
			
				<h1 className="text-primaryTxt text-xs text-center">
					Copyright {new Date().getFullYear()} © Kwamdeen Ayinla
				</h1>
				
			{alert ? (
				<Alert
					alert={alert}
					setAlert={setAlert}
					duration={3000}
					message={'Thank you! I"ll soon get in touch!'}
				/>
			) : null}
		</footer>
	);
};

export default Footer;
