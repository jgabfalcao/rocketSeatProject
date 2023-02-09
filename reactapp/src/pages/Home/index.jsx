import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
      <Card name="João" time="10:55:25" />
      <Card name="Rodrigo" time="11:10:10" />
    </div>
  );
}
