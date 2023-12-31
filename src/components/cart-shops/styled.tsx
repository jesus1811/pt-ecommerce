import { colors } from "@/config";
import styled from "styled-components";

export const StyledCartShops = styled.section<{ isCart: boolean }>`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30.375rem;
  background-color: ${colors.primary[500]};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  right: 0;
  top: 0;
  transition: all 1s;
  transform: ${(props) => !props.isCart && "translateX(30.75rem)"};
`;

export const StyledCartShopsContent = styled.div`
  width: 100%;
  padding: 2.25rem 1.375rem 0px 2.9375rem;
`;

export const StyledHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.375rem;
`;

export const StyledCloseContainer = styled.div`
  width: 2.375rem;
  height: auto;
  aspect-ratio: 1/1;
  background-color: black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledClose = styled.p`
  color: white;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  color: white;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 700;
`;

export const StyledProducts = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const StyledButtonFinishedShop = styled.button`
  background-color: black;
  user-select: none;
  width: 100%;
  min-height: 6.0625rem;
  color: white;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
`;

export const StyledTotalPriceContainer = styled.div`
  width: 100%;
`;

export const StyledTotalPriceContent = styled.div`
  width: 100%;
  margin: 2.25rem 1.375rem 2.625rem 2.9375rem;
  max-width: 379px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledTotalPrice = styled.p`
  color: white;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
`;
