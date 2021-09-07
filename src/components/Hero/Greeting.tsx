import * as S from "./styled";

const Greeting = () => {
  return (
    <S.Greeting className="text-md-start text-center">
      <span className="text">Oi, eu sou o Edu</span>{" "}
      <span className="wave-emoji">👋</span>
    </S.Greeting>
  );
};

export default Greeting;
