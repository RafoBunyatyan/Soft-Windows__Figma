import React from "react";
import NavBar from "./NavBar/NavBar";
import Soft_Windows from "./SoftWindows/Soft_Windows";
import Buy_Windows from "./BuyWindows/Buy_Windows";
import Our_Advantages from "./OurAdvantages/Our_Advantages";
import Cost_Windows from "./CostWindows/Cost_Windows";
import Advise_You from "./AdviseYou/Advise_You";
import Where_Installed from "./WhereInstalled/Where_Installed";
import Window_Installation from "./WindowInstallation/Window_Installation";
import What_Materials from "./WhatMaterials/What_Materials";
import We_Working from "./WeWorking/We_Working";
import Our_Work from "./OurWork/Our_Work";
import Reviews from "./Reviews/Reviews";
import O_PVC_Curtains from "./PVCCurtains/O_PVC_Curtains.js";
import Discuss_Project from "./DiscussProject/Discuss_Project";
import Footer from "./Footer/Footer";

function Soft_Box() {
	return (
		<>
			<NavBar />
			<Soft_Windows />
			<Buy_Windows />
			<Our_Advantages />
			<Cost_Windows />
			<Advise_You />
			<Where_Installed />
			<Window_Installation />
			<What_Materials />
			<We_Working />
			<Our_Work />
			<Reviews />
			<O_PVC_Curtains />
			<Discuss_Project />
			<Footer />
		</>
	);
};

export default Soft_Box;