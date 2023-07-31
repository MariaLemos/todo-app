import styled, { useTheme, DefaultTheme } from "styled-components";

const InputComponent: React.FC<{}> = ({}) => {
  return (
    <InputWrapper>
      <RadioStyled type={"radio"} />
      <InputStyled />
    </InputWrapper>
  );
};
export default InputComponent;
const InputWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.listBgColor};
  padding: 1.25rem;
  border-radius: 0.3125rem;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const InputStyled = styled.input`
  all: unset;
  width: 100%;
`;
const RadioStyled = styled.input`
  all: unset;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid hsla(235, 14%, 26%, 1);
`;
