import { colors } from "@/config";
import styled from "styled-components";

export const StyledNavBar = styled.section`
  background-color: ${colors.primary[500]};
  color: white;
  min-height: 6.3125rem;
  display: flex;
  align-items: center;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 81.25rem;
  margin: 0 auto;
  min-height: 6.3125rem;
`;

export const StyledTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
`;

export const StyledTitleSpan = styled.span`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
`;

export const StyledCartContainer = styled.div`
  display: flex;
  color: black;
  border-radius: 0.5rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 5.625rem;
  min-height: 2.8125rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;
