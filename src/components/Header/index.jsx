import { useLocation } from "react-router-dom";
import { Container, StyledLink } from "./style";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Container>
      <div>
        <StyledLink selected={pathname === "/"} to="/">
          Counter
        </StyledLink>
        <StyledLink selected={pathname === "/dashboard"} to="/dashboard">
          Dash
        </StyledLink>
        <StyledLink selected={pathname === "/login"} to="/login">
          Login
        </StyledLink>
      </div>
    </Container>
  );
};

export default Header;
