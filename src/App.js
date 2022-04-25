import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Soft_Windows from "./components/SoftWindows/Soft_Windows";
import Buy_Windows from "./components/BuyWindows/Buy_Windows";
import Post_Link from "./components/PostLink/Post_Link";


function App() {
	return (
		<>
			<NavBar />
			<Soft_Windows />
			<Buy_Windows />
			<Post_Link />
		</>
	);
};

export default App;
