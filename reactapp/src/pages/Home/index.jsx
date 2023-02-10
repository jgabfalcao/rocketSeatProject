import React from "react";
import "./styles.css";

import { Card } from "../../components/Card";
import { useState, useEffect } from "react";

export function Home() {
  const [studentName, setStudentName] = useState(); // ESTADO PARA PEGAR OQ ESTÁ SENDO DIGITADO NO INPUT

  const [students, setStudents] = useState([]);

  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/jgabfalcao").then((response) =>
      response.json().then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      })
    );
    //Corpo do useEffect Ações ou Aquilo que eu quero que execute (assim que a interface renderiza)
  }, []); //Quais são os Estados que nosso UseEffect depende

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
