import "./styles.css";

export const Header = ({ randomStudents }) => {
  return (
    <div>
      <h1>Torneio tribruxo</h1>
      <h3>Clique no botão para encontrar três feiticeiros aleatórios!</h3>
      <button onClick={() => randomStudents()}>Escolher</button>
    </div>
  );
};
