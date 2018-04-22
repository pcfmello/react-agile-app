import React from "react";

const ReleaseForm = ({ submitHandler }) => {
	let _releaseName, _releaseDate;

	const handleSubmit = e => {
		submitHandler(e, { nome: _releaseName.value, data: _releaseDate.value }); //Construindo o objetohandle
		handleClearForm();
	};

	const handleClearForm = () => {
		_releaseName.value = "";
		_releaseDate.value = "";
	};

	return (
		<form
			className="form-inline"
			style={{ paddingTop: 10 }}
			onSubmit={handleSubmit}
		>
			<label className="sr-only" for="inlineFormInputName2">
				Nome
			</label>
			<input
				type="text"
				className="form-control mb-2 mr-sm-2"
				id="inlineFormInputName2"
				placeholder="Digite o nome da release"
				ref={input => (_releaseName = input)}
			/>

			<label className="sr-only" for="inlineFormInputGroupUsername2">
				Data
			</label>
			<div className="input-group mb-2 mr-sm-2">
				<input
					type="date"
					className="form-control"
					id="inlineFormInputGroupUsername2"
					placeholder="Informe a data da release"
					ref={input => (_releaseDate = input)}
				/>
			</div>

			<button type="submit" className="btn btn-primary mb-2">
				Salvar
			</button>
		</form>
	);
};

export default ReleaseForm;
