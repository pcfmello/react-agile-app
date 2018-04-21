import React from "react";

const HomeCard = props => {
	return (
		<div className="col-12 col-sm-6 col-md-4">
			<div className="card" style={{ minWidth: "11rem" }}>
				<img
					className="card-img-top rounded mx-auto d-block"
					src={props.linkImagem}
					alt={props.descricaoImagem}
					style={{ maxWidth: 200, maxHeight: 200, padding: 3 }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.titulo}</h5>
					<p className="card-text">{props.texto}</p>
					<a href="#" className="btn btn-primary" onClick={props.acao}>
						{props.rotuloBotao}
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomeCard;
