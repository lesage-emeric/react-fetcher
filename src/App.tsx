import { useState } from "react";
import "./App.css";
import GetEmployee from "./assets/components/GetEmployee";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);
	const OtherFrEmployee = () => {
		fetch("https://randomuser.me/api?nat=fr")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};
	return (
		<>
			<div className="frEmployee">
				<GetEmployee employee={employee} />
				<button type="button" onClick={OtherFrEmployee}>
					Un autre employé ?
				</button>
			</div>
		</>
	);
}

export default App;
