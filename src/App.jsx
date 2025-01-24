import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Header";


export default function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo);

  const [value, setValue] = useState("");

  const getTodo = async () => {
    try {
      const response = await fetch("https://daf9628e8536fae6.mokky.dev/todo");
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const postTodo = async () => {
    try {
      const response = await fetch("https://daf9628e8536fae6.mokky.dev/todo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: value, id: Date.now() }),
      });

      if (response.ok) {
        const addTodo = await response.json();

        setTodo([...todo, addTodo]);
        console.log(addTodo);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(
        `https://daf9628e8536fae6.mokky.dev/todo/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setTodo(todo.filter((item) => item.id !== id));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useState(() => {
    getTodo();
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      return alert("Толтуруп коюнуз, пожалуйста!");
    }
    postTodo(value);
    setValue("");
  };



  return (
    <div>
      <Header />
      <StyledTheme>TODO-LIST</StyledTheme>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Enter your todo, pleaseee..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <StyledButton type="submit">ADD</StyledButton>
      </StyledForm>
      <StyledUl>
        {todo.map((item) => (
          <StyledLi key={item.id}>
            <StyledSpan>{item.title}</StyledSpan>
            <StyledDeleteBtn onClick={() => deleteTodo(item.id)}>
              Delete
            </StyledDeleteBtn>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}

const StyledTheme = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #3a82f7;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;
const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  border: 2px solid #137855;
  font-size: larger;
  padding-left: 10px;
  :hover {
    border: 2px solid greenyellow;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #4a7f54;
  color: white;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  border: 2px solid #3a82f7;
  font-size: larger;
  padding-left: 10px;
`;

const StyledDeleteBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #c91010;
  color: white;
`;
