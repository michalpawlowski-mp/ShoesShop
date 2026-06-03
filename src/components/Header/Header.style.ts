import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.surface};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

export const ShopLogo = styled.img`
  height: 50px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 25%;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.textMuted};
  }
`;

export const CartIcon = styled.img`
  width: 28px;
  height: 28px;
  filter: ${({ theme }) => (theme.isDark ? "invert(1)" : "none")};
`;

export const CartCount = styled.span`
  background-color: #ff4757;
  color: white;
  font-size: 11px;
  font-weight: bold;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  right: 4px;
  border: 2px solid white;
`;

export const ThemeToggle = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.border};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.hoverBg};
    transform: rotate(20deg) scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
