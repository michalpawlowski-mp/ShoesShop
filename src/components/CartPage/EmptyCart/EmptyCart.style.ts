import { Link } from "react-router";
import styled from "styled-components";

export const EmptyCartWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: #666;
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 8px;
`;

export const EmptyCartInfo = styled.h1`
  color: #000;
  font-size: 2rem;
  margin: 20px 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #f58220;
  color: #ffffff;
  padding: 12px 24px;
  margin: 0px auto;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 150px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e67616;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
