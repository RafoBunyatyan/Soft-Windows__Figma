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
import OurWork from "./OurWork/OurWork";
import Reviews from "./Reviews/Reviews";
import AboutCurtains from "./AboutCurtains/AboutCurtains";
import DiscussProject from "./DiscussProject/DiscussProject";
import Footer from "./Footer/Footer";


function SoftBox() {
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
			<OurWork />
			<Reviews />
			<AboutCurtains />
			<DiscussProject />
			<Footer />
		</>
	);
};

export default SoftBox;