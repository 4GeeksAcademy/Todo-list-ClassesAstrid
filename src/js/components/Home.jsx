import React, {useState} from "react";

//create your first component
const Home = () => {

let [email, setEmail]=useState("")
let [password, setPassword]=useState("")

// console.log(email,password);

function handleEmail(event){
	setEmail(event.target.value)
}

function sendData(event) {
	event.preventDefault()
	console.log(email, password);
}

	return (
		<div className="text-center">

			<h1 className="text-center mt-5">Hello Rigo!</h1>

			<form onSubmit={sendData}>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input type="email" className="form-control" id="inputEmail3" onChange={handleEmail}/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
					<div className="col-sm-10">
						<input type="password" className="form-control" id="inputPassword3" onChange={(event)=>setPassword(event.target.value)}/>
					</div>
				</div>

				
				<button type="submit" className="btn btn-primary">Send Data</button>
			</form>
		</div>
	);
};

export default Home;