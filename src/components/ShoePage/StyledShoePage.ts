import styled from "styled-components";

export const ShoePageWrapper = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  overflow: auto;
`;
export const ImagesWrapper = styled.div`
  flex: 1;
  min-width: 250px;
`;
export const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;
export const Thumbnail = styled.img<{ selected?: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border: 2px solid ${({ selected }) => (selected ? "#1976d2" : "transparent")};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border-color: #1976d2;
  }
`;
export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
export const InfoWrapper = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;
export const BackLink = styled.a`
  text-decoration: none;
  color: #1976d2;
  font-weight: 500;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const ShoeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`;
export const ShoeInfo = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
export const ShoePrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #e53935;
  margin-bottom: 1rem;
`;
export const SizesWrapper = styled.div`
  margin: 1rem 0;
`;
export const SizeButton = styled.button<{ selected?: boolean }>`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #777;
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? "#1976d2" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  cursor: pointer;
  &:hover {
    border-color: #1976d2;
  }
`;
export const AddToCartButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #e53935;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #d32f2f;
  }
`;
