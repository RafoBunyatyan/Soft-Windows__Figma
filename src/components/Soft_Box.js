import React from "react";
import NavBar from "./NavBar/NavBar";
import SoftWindows from "./SoftWindows/SoftWindows";
import BuyWindows from "./BuyWindows/BuyWindows";
import OurAdvantages from "./OurAdvantages/OurAdvantages";
import CostWindows from "./CostWindows/CostWindows";
import AdviseYou from "./AdviseYou/AdviseYou";
import WhereInstalled from "./WhereInstalled/WhereInstalled";
import WindowInstallation from "./WindowInstallation/WindowInstallation";
import WhatMaterials from "./WhatMaterials/WhatMaterials";
import WeWorking from "./WeWorking/WeWorking";
import Our_Work from "./OurWork/Our_Work";
import Reviews from "./Reviews/Reviews";
import O_PVC_Curtains from "./PVCCurtains/O_PVC_Curtains.js";
import Discuss_Project from "./DiscussProject/Discuss_Project";
import Footer from "./Footer/Footer";

function Soft_Box() {
	return (
		<>
			<NavBar />
			<SoftWindows />
			<BuyWindows />
			<OurAdvantages />
			<CostWindows />
			<AdviseYou />
			<WhereInstalled />
			<WindowInstallation />
			<WhatMaterials />
			<WeWorking />
			<Our_Work />
			<Reviews />
			<O_PVC_Curtains />
			<Discuss_Project />
			<Footer />
		</>
	);
};

export default Soft_Box;