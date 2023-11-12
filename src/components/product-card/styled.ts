import { colors } from "@/config";
import styled from "styled-components";

export const StyledProductCard = styled.article`
  width: 100%;
  max-width: 13.625rem;
  box-shadow: 0px 0.125rem 0.5rem 0px rgba(0, 0, 0, 0.1352);
  border-radius: 0.5rem;
  min-height: 285px;
  background-color: white;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerText = styled.div`
  width: 100%;
  padding: 0 0.875rem;
  margin-bottom: 0.75rem;
`;

export const StyledSubTitle = styled.p`
  color: ${colors.secundary[600]};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.75rem;
`;

export const StyledBadgePrice = styled.div`
  background-color: ${colors.secundary[500]};
  padding: 0.25rem 0.375rem 0.25rem 0.4375rem;
  border-radius: 0.3125rem;
  width: fit-content;
  color: white;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const StyledTitle = styled.h2`
  color: ${colors.secundary[600]};
  width: fit-content;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`;

export const StyledImage = styled.img`
  width: auto;
  margin: 0 auto;
  height: 8.625rem;
  object-fit: cover;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 1.9942rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 0.875rem;
  background-color: ${colors.primary[500]};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem;
`;
