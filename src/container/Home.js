import React, { Component } from "react";

import HomeCard from "../ui/HomeCard";
import { hashHistory } from "react-router";

class Home extends Component {
	homeCardSaibaMais = {
		titulo: "Releases",
		texto: "Veja as releases disponíveis",
		rotuloBotao: "Releases",
		linkImagem:
			"http://australianonlinenews.com.au/wp-content/uploads/sites/18/2014/09/technology-200x200.jpg",
		descricaoImagem: "Imagem de releases",
		acao: () => hashHistory.push("/releases")
	};

	homeCardNossosClientes = {
		titulo: "Sprints",
		texto: "Verifique as sprints disponíveis",
		rotuloBotao: "Sprints",
		linkImagem:
			"https://static.vecteezy.com/system/resources/thumbnails/000/205/254/small/technology-style-bitcoin-vector-background.jpg",
		descricaoImagem: "Imagem de sprints",
		acao: () => hashHistory.push("/sprints")
	};

	render() {
		return (
			<div className="container text-center">
				<div className="row">
					<HomeCard {...this.homeCardSaibaMais} />
					<HomeCard
						titulo="Backlog"
						texto="Lista de tarefas a fazer"
						rotuloBotao="Backlog"
						linkImagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpJAB-RZgqHPT18xcK8vv11t8_lt7AuavCt8RijQi2j2qhfVd"
						descricaoImagem="Imagem de backlog"
						acao={() => hashHistory.push("/sprints")}
					/>
					<HomeCard {...this.homeCardNossosClientes} />
				</div>
			</div>
		);
	}
}

export default Home;
