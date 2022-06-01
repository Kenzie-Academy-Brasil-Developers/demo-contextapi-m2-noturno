import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 3rem;
  background-color: #656468;
  div {
    display: flex;
    width: 80%;
    max-width: 1100px;
    margin: auto;
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  padding: 0 20px;
  text-decoration: ${({ selected }) => (selected ? "underline" : "none")}; ;
`;
