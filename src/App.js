import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Soft_Windows from "./components/SoftWindows/Soft_Windows";
import Buy_Windows from "./components/BuyWindows/Buy_Windows";
import Our_Advantages from "./components/OurAdvantages/Our_Advantages";
import Cost_windows from "./components/CostWindows/Cost_windows";
import Advise_You from "./components/AdviseYou/Advise_You";
import Where_Installed from "./components/WhereInstalled/Where_Installed";
import Window_Installation from "./components/WindowInstallation/Window_Installation";
import What_Materials from "./components/WhatMaterials/What_Materials";
import We_Working from "./components/WeWorking/We_Working";
import Our_Work from "./components/OurWork/Our_Work";

function App() {
	return (
		<>
			<NavBar />
			<Soft_Windows />
			<Buy_Windows />
			<Our_Advantages />
			<Cost_windows />
			<Advise_You />
			<Where_Installed />
			<Window_Installation />
			<What_Materials />
			<We_Working />
			<Our_Work />
		</>
	);
};

export default App;
