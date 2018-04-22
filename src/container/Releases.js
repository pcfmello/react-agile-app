import React, { Component } from "react";

import ReleaseForm from "../ui/ReleaseForm";
class Releases extends Component {
	constructor(props) {
		super(props);
		this.state = {
			releases: [
				{ id: 1, nomeRelease: "Projeto inicial", dataRelease: "22/01/2017" },
				{
					id: 2,
					nomeRelease: "Inclusão de tela de assuntos",
					dataRelease: "15/07/2017"
				},
				{
					id: 3,
					nomeRelease: "Concluão do módulo administrativo",
					dataRelease: "03/09/2018"
				}
			]
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		//this.handleRemove = this.handleRemove.bind(this);
	}

	handleSubmit(e, { nome, data }) {
		e.preventDefault();
		//Descontruindo o objetos
		console.log(`Submetendo formulário`);
		console.log(`Nome: ${nome}`);
		console.log(`Data: ${data}`);
		this.setState({
			releases: this.state.releases.concat({
				id: this.state.releases.length + 1,
				nomeRelease: nome,
				dataRelease: data
					.split("-")
					.reverse()
					.join("/")
			})
		});
	}
	handleRemove(release) {
		let posicao = this.state.releases.indexOf(release);
		this.state.releases.splice(posicao, 1);
		this.setState({ releases: this.state.releases });
	}

	render() {
		return (
			<div>
				<ReleaseForm
					submitHandler={this.handleSubmit}
					removeHandler={this.handleRemove}
				/>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Nome da Release</th>
							<th scope="col">Data da Release</th>
							<th scope="col" />
						</tr>
					</thead>
					<tbody>
						{this.state.releases.map((release, index) => {
							return (
								<tr key={release.id}>
									<th scope="row">{release.id}</th>
									<td>{release.nomeRelease}</td>
									<td>{release.dataRelease}</td>
									<td>
										<button
											className="btn btn-danger btn-sm"
											onClick={() => this.handleRemove(release)}
										>
											Excluir
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Releases;
