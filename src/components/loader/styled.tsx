import { colors } from "@/config";
import styled from "styled-components";

export const StyledLoader = styled.span`
  border: solid 6px rgba(0, 0, 0, 0.1);
  width: 64px;
  display: block;
  margin: 0 auto;
  height: 64px;
  border-radius: 50%;
  border-left-color: ${colors.primary[500]};
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
