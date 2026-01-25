import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShoeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 1rem;
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 100px;
`;

export const ShoeLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 325px;
`;

export const ShoeCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:focus-visible {
    outline: 2px solid #1976d2;
    outline-offset: 4px;
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
  filter: blur(3px);
  transform: scale(1.1);
  will-change: transform;
`;

export const ShoeImage = styled.img`
  pointer-events: none;
  max-width: 90%;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
`;

export const ShoeName = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0.5rem 0.8rem 0;
  color: #333;
`;

export const ShoeGender = styled.p`
  font-size: 0.85rem;
  color: #777;
  margin: 0.25rem 0.8rem 0;
`;

export const ShoePrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin: 0.5rem 0.9rem;
`;
