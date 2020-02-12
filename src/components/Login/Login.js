import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

import "./Login.scss";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.handleContinue = this.handleContinue.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleCheckedInput = this.handleCheckedInput.bind(this);

    this.state = {
      documento: "",
      nacimiento: "",
      celular: "",
      isValidLogin: true
    };
  }

  // Validando inputs
  getInputDocumentValue = () => {
    let doc = document.querySelector('.Login__form__documento').value;
    const regexDoc = /^\d{8}$/;
    if (regexDoc.test(doc)) return true;
  }
  getInputBornValue = () => {
    let born = document.querySelector('.Login__form__fechaNacimiento').value;
    if (typeof born !== undefined && born !== '') return true;
  }
  getInputTelValue = () => {
    let tel = document.querySelector('.Login__form__celular').value;
    const regexTel = /^(9{1})+[0-9]{8}$/;
    if (regexTel.test(tel)) return true;
  }

  //  Validando si es que se continúa o no
  handleContinue = () => {
    const doc = this.getInputDocumentValue();
    const born = this.getInputBornValue();
    const tel = this.getInputTelValue();
    const checks = this.getValueInput();
    // const checks = true;

    // debugger;
    if (doc && born && tel && checks) {
      document.querySelector('.Login__form__button').classList.add('habilitado');
    } else {
      document.querySelector('.Login__form__button').classList.remove('habilitado');
    }
  };

  handleBlur = () => {
    this.handleContinue();
  };

  // Actualizando valor de inputs
  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.handleBlur();
  };

  // Validando inputs 

  handleCheckedInput = e => {
    const checkbox = e.target.parentNode.className;
    if (checkbox === '.Login__form__lpdp') this.setState({ lpdp: true });
    if (checkbox === '.Login__form__lpcc') this.setState({ lpcc: true });

    this.handleBlur();
  }

  getValueInput = () => {
    const lpdp = document.querySelector('.Login__form__lpdp input').checked;
    const lpcc = document.querySelector('.Login__form__lpcc input').checked;
    if (lpdp && lpcc) return true;
  };

  render() {
    return (
      <div className="Login">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="Login__bgRed">
              <div className="Login__logo">
                <img src={'https://lh3.googleusercontent.com/XREjc9REJTDQXQIRDcxYLWZTEB7DP9iohZw_UeXAjeGlwG1rTm2AvZedA64tqWyaCE2VIfkxxDrPrXf2NGY8lLtycx8aKnb7RG3HKFz96oFIXgGxn5WQTbTgRzZ8jQD0eG6C-PqNwbl9jVQ-kSB0Wig0DaBdUlLoRwBE2WRo7loZAgqA3LK_2hag73ABwvQXC20NIZzBga0C0N8qaPt7cacpu5qNgQHuKdBhGgRE12aRF1VkINU78XMXTbc7o6J3pOBlTfaXjKyCFNXvt2jN-kgWR3Ofh9e3SVpoFp3yhI8rV5AzR6fJSB5cJOpVhrPpyMgU1kGP885FyzfmP63ixa4M0m544hynr9tKO2tHvH6j-OO5zV2gvgGGKBW1kBxnVO_BERUTIDcwty3IA37I7hEAmhOIcVBpAF7vMfDySe84VYd-YbvGrs7XxYLrmciqoscxE2RT6QAOWbuSW-ongAMrZ_hP5Hyyh5WZwlkhbN9j-zQyp4D1xFicv02ltuO3MCqoW7y1UiNnf246YeQSjWtN670RN4u65n0lRHIsU78HhC8ZKvm3CrUlhuYzkRzxkXWY4yowGpt4Zjdocb9IFxpLi9ua_L-BIn2RWhvbQT6TLe5uUdfPTH2b5QPXulw6PpdgBZO2om1GNRSI_pw1cCfIPm-An5PD29mPp3bI4hpS7h9USc4Kx-eaCVhIlAL_LpO6kuV_xKRAwXKiz0XXn4Cb6GUm-_jtLqSxjarca3IN_0xq=w112-h22-no'} alt={'rimac'}></img>
              </div>
              <div className="Login__info">
                <h1><span>Seguro de</span> Salud</h1>
                <ul className="Login__info__benefits">
                  <li>Cómpralo de manera fácil</li>
                  <li>Cotízalo y compra tu seguro 100% digital</li>
                  <li>Hasta S/.12 millones de cobertura anual</li>
                  <li>Más de 300 clíniccas en todo el Perú</li>
                </ul>
              </div>
              <div className="Login__footer">
                © Rimac 2020
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="Login__form">
              <h3>Obtén tu <span>seguro ahora</span></h3>
              <p>Ingresa los datos para comenzar</p>

              <input
                type="text"
                className="Login__form__documento"
                placeholder="Nro de Documento"
                name="documento"
                value={this.state.documento}
                onChange={e => this.handleChangeInput(e)}
                onBlur={this.handleBlur}
              />

              <input
                type="text"
                className="Login__form__fechaNacimiento"
                placeholder="Fecha de Nacimiento"
                name="nacimiento"
                value={this.state.nacimiento}
                onChange={e => this.handleChangeInput(e)}
                onBlur={this.handleBlur}
              />

              <input
                type="tel"
                className="Login__form__celular"
                placeholder="Celular"
                name="celular"
                value={this.state.celular}
                onChange={e => this.handleChangeInput(e)}
                onBlur={this.handleBlur}
              />

              <label className="Login__form__lpdp">
                Acepto la <a href="https://personas.rimac.com/">Política de Protección de Datos Personales y los Términos y Condiciones</a>
                <input
                  type="checkbox"
                  onClick={e => this.handleCheckedInput(e)}
                />
                <span className="Login__form__checkmark"></span>
              </label>

              <label className="Login__form__lpcc">
                Acepto la <a href="https://personas.rimac.com/">Política de envío de Comunicaciones Comerciales</a>
                <input
                  type="checkbox"
                  onClick={e => this.handleCheckedInput(e)}
                />
                <span className="Login__form__checkmark"></span>
              </label>

              <div className="Login__form__button">
                <Link to="/datos">Comencemos</Link>
              </div>
            </div>
          </div>
          <div className="Login__centerImg">
            <img src={'https://fotos.subefotos.com/2cdad827fbb753c01d0c665cffb94789o.png'} alt={'Seguro de salud'}></img>
          </div>
        </div>
      </div>
    );
  }
}