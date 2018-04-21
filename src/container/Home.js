import React, { Component } from "react";

import HomeCard from "../ui/HomeCard";

class Home extends Component {
	homeCardSaibaMais = {
		titulo: "Texte de título",
		texto: "Texte de texto novamente no card da mina",
		rotuloBotao: "Saiba mais",
		linkImagem:
			"http://australianonlinenews.com.au/wp-content/uploads/sites/18/2014/09/technology-200x200.jpg",
		descricaoImagem: "Teste de imagem novamente",
		acao: () => alert(this.homeCardSaibaMais.titulo)
	};

	homeCardNossosClientes = {
		titulo: "Texte de título",
		texto: "Texte de texto novamente no card da mina",
		rotuloBotao: "Nossos Clientes",
		linkImagem:
			"https://static.vecteezy.com/system/resources/thumbnails/000/205/254/small/technology-style-bitcoin-vector-background.jpg",
		descricaoImagem: "Outros computadores de teste",
		acao: () => alert(this.homeCardNossosClientes.titulo)
	};

	render() {
		return (
			<div className="container text-center">
				<div className="row">
					<HomeCard {...this.homeCardSaibaMais} />
					<HomeCard
						titulo="Texte de título"
						texto="Texte de texto novamente no card da mina"
						rotuloBotao="Status do Serviço"
						linkImagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpJAB-RZgqHPT18xcK8vv11t8_lt7AuavCt8RijQi2j2qhfVd"
						descricaoImagem="Computadores de teste"
					/>
					<HomeCard {...this.homeCardNossosClientes} />
				</div>
			</div>
		);
	}
}

export default Home;
