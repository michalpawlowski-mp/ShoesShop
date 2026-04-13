import styled from "styled-components";

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
