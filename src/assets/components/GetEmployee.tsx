interface EmployeeProps {
	employee: {
		name: {
			first: string;
			last: string;
		};
		email: string;
		picture: {
			medium: string;
		};
	};
}

const GetEmployee = ({ employee }: EmployeeProps) => {
	return (
		<>
			<figure>
				<img src={employee.picture.medium} alt={employee.name.last} />
				<figcaption>
					{employee.name.first} {employee.name.last}
				</figcaption>
				<p>mail : {employee.email}</p>
			</figure>
		</>
	);
};

export default GetEmployee;
