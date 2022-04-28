import "./styles.css";
import { Students } from "../Students";

export const MainContainer = ({ chosenStudents }) => {
  return (
    <div className="container">
      {chosenStudents.map((student, index) => {
        return <Students key={index} student={student} />;
      })}
    </div>
  );
};
