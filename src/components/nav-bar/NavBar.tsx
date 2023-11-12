import { Cart } from "@/icons";
import { StyledCartContainer, StyledContent, StyledNavBar, StyledTitle, StyledTitleSpan } from "./styled";
import { useState } from "react";
import { CartShops } from "..";

export function NavBar() {
  const [isCart, setIsCart] = useState<boolean>(false);

  const changeIsCart = () => {
    setIsCart(!isCart);
  };
  return (
    <StyledNavBar>
      <StyledContent>
        <StyledTitle>
          MKS <StyledTitleSpan>Sistemas</StyledTitleSpan>
        </StyledTitle>
        <StyledCartContainer onClick={changeIsCart}>
          <Cart fill="currentColor" /> 0
        </StyledCartContainer>
      </StyledContent>
      <CartShops isCart={isCart} changeIsCart={changeIsCart} />
    </StyledNavBar>
  );
}

export default NavBar;
