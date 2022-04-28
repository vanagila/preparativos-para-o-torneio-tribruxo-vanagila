import "./App.css";
import { useState, useEffect } from "react";
import { MainContainer } from "./components/MainContainer";
import { Header } from "./components/Header";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [chosenStudents, setChosenStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api-ken.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudentList(response))
      .catch((err) => console.log(err));
  }, []);

  const randomStudents = () => {
    const studentOne =
      studentList[Math.floor(Math.random() * studentList.length)];

    const filteredStudentOne = studentList.filter(
      (student) => student.house !== studentOne.house
    );

    const studentTwo =
      filteredStudentOne[Math.floor(Math.random() * filteredStudentOne.length)];

    const filteredStudentTwo = filteredStudentOne.filter(
      (student) => student.house !== studentTwo.house
    );

    const studentThree =
      filteredStudentTwo[Math.floor(Math.random() * filteredStudentTwo.length)];
    setChosenStudents([studentOne, studentTwo, studentThree]);
  };

  return (
    <div className="App">
      <Header randomStudents={randomStudents} />
      <MainContainer chosenStudents={chosenStudents} />
    </div>
  );
}

export default App;
