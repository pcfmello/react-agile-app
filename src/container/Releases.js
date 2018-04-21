import React, { Component } from "react";

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
	}

	render() {
		return (
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
									<button className="btn btn-danger btn-sm">Excluir</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default Releases;
