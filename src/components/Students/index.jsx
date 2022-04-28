import "./styles.css";
export const Students = ({ student }) => {
  const { name, house, species, gender } = student;

  return (
    <div
      className={
        house === "Gryffindor"
          ? "studentCard gryffindor"
          : house === "Slytherin"
          ? "studentCard slytherin"
          : house === "Hufflepuff"
          ? "studentCard hufflepuff"
          : house === "Ravenclaw"
          ? "studentCard ravenclaw"
          : "studentCard noHouse"
      }
    >
      <h4>{name}</h4>
      <p>Espécie: {species}</p>
      <p>Casa: {house}</p>
      <p>Gênero: {gender}</p>
    </div>
  );
};
