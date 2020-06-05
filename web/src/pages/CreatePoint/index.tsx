import React from "react";
import { FiArrowLeft } from 'react-icons/fi';
import { Map, Marker, TileLayer } from "react-leaflet";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
            <form >
                <h1>Cadastro do <br /> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
                    <Map center={[-25.384028, -49.2185687]} zoom={16}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-25.384028, -49.2185687]}/>
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Esatdo (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione uma UF</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="teste" />
                            <span>Lâmpadas</span>
                        </li>
                        <li className="selected">
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="teste" />
                            <span>Lâmpadas</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="teste" />
                            <span>Lâmpadas</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="teste" />
                            <span>Lâmpadas</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="teste" />
                            <span>Lâmpadas</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="teste" />
                            <span>Lâmpadas</span>
                        </li>
                    </ul>
                </fieldset>
                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
};

export default CreatePoint;