import styled, { useTheme, DefaultTheme } from "styled-components";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";

const Header: React.FC<{ changeTheme: () => void }> = ({ changeTheme }) => {
  const theme: DefaultTheme = useTheme();

  return (
    <HeaderWrapper>
      <Title>TODO </Title>
      <ChangeThemeButton onClick={changeTheme}>
        {theme.name === "dark" ? <SunIcon /> : <MoonIcon />}
      </ChangeThemeButton>
    </HeaderWrapper>
  );
};
export default Header;
const HeaderWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.9375rem;
`;

const ChangeThemeButton = styled.button`
  all: unset;
`;
