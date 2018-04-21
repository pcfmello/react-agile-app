import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./ui/NavBar";
import Home from "./container/Home";

class App extends Component {
	render() {
		return (
			<div className="container">
				<NavBar nomeLogo="PARJS" />
				<Home />
			</div>
		);
	}
}

export default App;
