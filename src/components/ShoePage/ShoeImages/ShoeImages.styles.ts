import styled from "styled-components";

export const ImagesWrapper = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  -webkit-box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  -moz-box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  @media (min-width: 800px) {
    margin: 0;
    width: 50%;
    margin-right: 5px;
  }
`;

export const MainImage = styled.img`
  width: 75%;
  border-radius: 24px;
  object-fit: contain;
  -webkit-box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  -moz-box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;
export const Thumbnail = styled.img<{ selected?: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border: 2px solid ${({ selected }) => (selected ? "#ff7a00" : "transparent")};
  border-radius: 8px;
  -webkit-box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  -moz-box-shadow: 14px 13px 27px -25px rgba(66, 68, 90, 1);
  box-shadow: 14px 13px 35px -20px rgba(66, 68, 90, 1);
  cursor: pointer;
  &:hover {
    border-color: #ff7a00;
  }
  @media (min-width: 450px) {
    width: 70px;
    height: 70px;
  }
`;
