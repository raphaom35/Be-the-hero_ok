import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [city, setcity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();
  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, city, whatsapp, uf };
    try {
      const response = await api.post("ongs", data);
      alert(`SeuID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro tente novamente");
    }
  }
  return (
    <div className="reagiter-conteiner">
      <div className="content">
        <section>
          <img src={logoImg} atl="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastrto, entre na paltaforma e ajude pessoas a
            encontrarem os caso da sua ONG.
          </p>
          <Link className="backlink" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da Ong"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setwhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setcity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
