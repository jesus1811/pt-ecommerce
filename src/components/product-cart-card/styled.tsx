import { colors } from "@/config";
import styled from "styled-components";

export const StyledProduct = styled.article`
  width: 100%;
  max-width: 23.6875rem;
  min-height: 5.9375rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1875rem 15px 1.1875rem 1.4375rem;
  position: relative;
`;

export const StyledProductContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 15rem;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: auto;
  margin: 0 auto;
  height: 3.8125rem;
  object-fit: cover;
  margin-right: 1.4375rem;
`;

export const StyledTitle = styled.h2`
  color: ${colors.secundary[600]};
  font-size: 0.8125rem;
  width: 100%;
  max-width: 7.0625rem;
  min-height: 2.0625rem;
  font-style: normal;
  font-weight: 400;
  margin-right: 0.5625rem;
`;

export const StyledRemoveAndAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  max-width: 3.125rem;
`;

export const StyledRemoveAndAddContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  padding: 0.25rem 0;
  border-radius: 0.25rem;
  border: 0.0187rem solid ${colors.secundary[700]};
  background: white;
  width: 100%;
  height: 1.1875rem;
`;

export const StyledRemoveAddTitle = styled.p`
  color: black;
  font-size: 0.3125rem;
  font-style: normal;
  font-weight: 400;
`;

export const StyledLine = styled.span`
  width: 1px;
  display: block;
  background-color: ${colors.secundary[700]};
  min-height: 100%;
`;

export const StyledNumber = styled.p`
  color: black;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
`;
export const StyledRemoveAdd = styled(StyledNumber)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 100%;
  height: 100%;
`;

export const StyledPrice = styled.p`
  color: black;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
`;

export const StyledClose = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 100%;
  width: 1.125rem;
  height: auto;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  transform: translate(0.375rem, -0.3125rem);
  cursor: pointer;
`;
