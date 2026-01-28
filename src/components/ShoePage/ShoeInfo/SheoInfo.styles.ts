import styled from "styled-components";

export const InfoWrapper = styled.div`
  color: #000;
  height: 90%;
  width: 100%;
  margin: 0px;
  @media (min-width: 800px) {
    margin: 20px 0px 40px 0px;
  }
`;

export const ShoeTitle = styled.h1`
  font-size: 1.5rem;
  @media (min-width: 1215px) {
    font-size: 2.5rem;
  }
`;

export const ShoePrice = styled.p`
  margin: 10px 0px;
  font-size: 1.4rem;
  font-weight: 600;
  @media (min-width: 1215px) {
    font-size: 2rem;
  }
`;

export const ShoeGender = styled.p`
  color: grey;
`;

export const SizesWrapper = styled.div`
  margin-bottom: 15px;
  p {
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
`;

export const SizeButton = styled.button<{ selected?: boolean }>`
  width: 72px;
  height: 45px;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid ${({ selected }) => (selected ? "#ff7a00" : "#ddd")};
  background-color: ${({ selected }) => (selected ? "#ff7a00" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  cursor: pointer;
  transition: 0.2s;
  margin: 0px 5px 5px 0px;
  &:hover {
    border-color: #ff7a00;
  }
  @media (min-width: 1215px) {
    width: 95.5px;
    height: 75px;
    font-size: 1.1rem;
  }
`;
