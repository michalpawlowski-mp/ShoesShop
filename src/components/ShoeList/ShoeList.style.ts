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

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background: #ffffff;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
  margin: 20px;
  width: 100%;
`;

export const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff7ed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
`;

export const Title = styled.h2`
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  font-family: "Segoe UI", Roboto, sans-serif;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 1rem;
  max-width: 400px;
  line-height: 1.6;
  margin: 0 0 24px 0;
`;
