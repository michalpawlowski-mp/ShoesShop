import styled from "styled-components";

export const ShoePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-bottom: 90px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export const ShoeDetails = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 24px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media (min-width: 800px) {
    width: 50%;
    margin-left: 5px;
    height: 100%;
    justify-content: space-between;
  }
`;
