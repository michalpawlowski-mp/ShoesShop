import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #f0f0f0;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 10px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Thumbnail = styled.img<{ active: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.active ? "#000" : "transparent")};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  color: black;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin: 0;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const SizeButton = styled.button<{ isSelected: boolean }>`
  padding: 10px 15px;
  border: 1px solid ${(props) => (props.isSelected ? "#000" : "#ddd")};
  background: ${(props) => (props.isSelected ? "#000" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#000")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #000;
  }
`;

export const AddToCartButton = styled.button`
  background: #000;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: opacity 0.2s;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;
