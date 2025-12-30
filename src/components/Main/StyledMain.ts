import styled from "styled-components";

// kontener całej listy
export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

export const Shoe = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlurredBackground = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  transform: scale(1);
`;

export const ImgShoe = styled.img`
  max-width: 90%;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
`;

export const NameShoes = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 1rem 0;
  color: #333;
`;

export const Gender = styled.p`
  font-size: 0.85rem;
  color: #777;
  margin: 0.25rem 1rem 0;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #e53935;
  margin: 0.5rem 1rem 1rem;
`;
