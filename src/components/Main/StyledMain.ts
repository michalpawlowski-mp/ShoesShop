import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  -webkit-box-shadow: inset 0px 0px 4px 0px rgba(72, 72, 72, 1);
  -moz-box-shadow: inset 0px 0px 4px 0px rgba(72, 72, 72, 1);
  box-shadow: inset 0px 0px 4px 0px rgba(72, 72, 72, 1);
  display: flex;
  flex-wrap: wrap;
  position: absolute;
`;

export const Shoe = styled.div`
  margin: 5px;
  width: 245px;
  height: max-content;
  color: black;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 10px;
  }
`;

export const NameShoes = styled.h2`
  font-size: 1rem;
  margin: 5px 0;
`;

export const Gender = styled.h3`
  font-size: 0.9rem;
  margin: 2px 0;
  color: #555;
`;
export const Price = styled.h4`
  margin: 2px 0;
  font-size: 0.9rem;
`;
