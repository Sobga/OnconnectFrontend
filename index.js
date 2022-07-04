import React from "react";
import ReactDOM from "react-dom";
import "./globals.css"
import "./styleguide.css"
import App from "./App";


ReactDOM.render(<App />, document.getElementById("app"));

window.onkeydown = function(event){
	// X key
	if (event.keyCode != 88)
		return;

	
	// Find parent - if no parent, stop
	const parent_list = document.getElementsByClassName("home screen");
	if (parent_list.length == 0)
		return;
	const parent_elem = parent_list[0];
	
	
	// Create info box
	const container = document.createElement("div");
	const img = document.createElement("img");
	
	img.src = '/img/notification_package.png';
	img.style = "border-radius: 20px";
	img.onclick = function() {
		window.location.href = 'http://localhost:1234/updates-frame';
	};

	
	container.appendChild(img);

	//const text_node = document.createTextNode("Hello world");
	//container.appendChild(text_node);
	
	// Style the popup
	container.style.position = "absolute";
	container.style.bottom = "1%";
	container.style.right = "1%";
	
	
	parent_elem.appendChild(container);
}