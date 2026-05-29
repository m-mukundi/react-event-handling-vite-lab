// Code PasswordInput Component Here

function PasswordInput() {
	function handleChange() {
		console.log("Entering password...");
	}

	function handleEnter() {
		console.log("Mouse Entering");
	}

	function handleLeave() {
		console.log("Mouse Leaving");
	}

	return (
		<>
			<form>
				<label>Password: </label>
				<input type="password" onChange={() => handleChange()}></input>
				<br />
				<br />
				<button
					type="submit"
					onMouseEnter={() => handleEnter()}
					onMouseLeave={() => handleLeave()}
				>
					Submit Password
				</button>
			</form>
		</>
	);
}

export default PasswordInput;
