import { Cart } from "@/icons";
import { StyledCartContainer, StyledContent, StyledNavBar, StyledTitle, StyledTitleSpan } from "./styled";
import { useState } from "react";
import { CartShops } from "..";
import { useCartStore } from "@/store";

export function NavBar() {
  const { cart, openCart } = useCartStore();

  return (
    <StyledNavBar>
      <StyledContent>
        <StyledTitle>
          MKS <StyledTitleSpan>Sistemas</StyledTitleSpan>
        </StyledTitle>
        <StyledCartContainer onClick={openCart}>
          <Cart fill="currentColor" /> {cart?.length}
        </StyledCartContainer>
      </StyledContent>
      <CartShops />
    </StyledNavBar>
  );
}

export default NavBar;
