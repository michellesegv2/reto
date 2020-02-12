import React, { Component } from "react";
import {
	Link
} from "react-router-dom";

import "./PersonalInformation.scss";

export class PersonalInformation extends Component {
	constructor(props) {
		super(props);

		this.handleContinue = this.handleContinue.bind(this);

		this.state = {
			documento: "",
			//   data
			isValidPersonalInformation: true
		};
	}

	//  Validando si es que se continúa o no
	handleContinue = () => {

	};

	render() {
		return (
			<div className="PersonalInformation">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
						<div className="PersonalInformation__bgRed">
							<div className="PersonalInformation__logo">
								<img src={'https://lh3.googleusercontent.com/XREjc9REJTDQXQIRDcxYLWZTEB7DP9iohZw_UeXAjeGlwG1rTm2AvZedA64tqWyaCE2VIfkxxDrPrXf2NGY8lLtycx8aKnb7RG3HKFz96oFIXgGxn5WQTbTgRzZ8jQD0eG6C-PqNwbl9jVQ-kSB0Wig0DaBdUlLoRwBE2WRo7loZAgqA3LK_2hag73ABwvQXC20NIZzBga0C0N8qaPt7cacpu5qNgQHuKdBhGgRE12aRF1VkINU78XMXTbc7o6J3pOBlTfaXjKyCFNXvt2jN-kgWR3Ofh9e3SVpoFp3yhI8rV5AzR6fJSB5cJOpVhrPpyMgU1kGP885FyzfmP63ixa4M0m544hynr9tKO2tHvH6j-OO5zV2gvgGGKBW1kBxnVO_BERUTIDcwty3IA37I7hEAmhOIcVBpAF7vMfDySe84VYd-YbvGrs7XxYLrmciqoscxE2RT6QAOWbuSW-ongAMrZ_hP5Hyyh5WZwlkhbN9j-zQyp4D1xFicv02ltuO3MCqoW7y1UiNnf246YeQSjWtN670RN4u65n0lRHIsU78HhC8ZKvm3CrUlhuYzkRzxkXWY4yowGpt4Zjdocb9IFxpLi9ua_L-BIn2RWhvbQT6TLe5uUdfPTH2b5QPXulw6PpdgBZO2om1GNRSI_pw1cCfIPm-An5PD29mPp3bI4hpS7h9USc4Kx-eaCVhIlAL_LpO6kuV_xKRAwXKiz0XXn4Cb6GUm-_jtLqSxjarca3IN_0xq=w112-h22-no'} alt={'rimac'}></img>
							</div>
						</div>
					</div>
					<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
						<div className="PersonalInformation__form">
							<h3>Hola <span>M</span></h3>
							<p>Valida que los datos sean correctos</p>

							<input
								type="text"
								className="PersonalInformation__form__documento"
								placeholder="Nro de Documento"
								name="documento"
								value={this.state.documento}
							/>

							<div className="PersonalInformation__form__button">
								<Link to="/">Continuar</Link>
							</div>
						</div>
					</div>
					<div className="PersonalInformation__centerImg">
						<img src={'https://fotos.subefotos.com/2cdad827fbb753c01d0c665cffb94789o.png'} alt={'Seguro de salud'}></img>
					</div>
				</div>
			</div>
		);
	}
}