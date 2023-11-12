import { ProductCartCard } from "..";
import { StyledCartShops, StyledCartShopsContent, StyledClose, StyledCloseContainer, StyledHead, StyledProducts, StyledTitle, StyledTitleContainer } from "./styled";
import { ICartShopsProps } from "./types";

export function CartShops(props: ICartShopsProps) {
  const { changeIsCart, isCart } = props;
  return (
    <StyledCartShops isCart={isCart}>
      <StyledCartShopsContent>
        <StyledHead>
          <StyledTitleContainer>
            <StyledTitle>Carrinho</StyledTitle>
            <StyledTitle> de compras</StyledTitle>
          </StyledTitleContainer>
          <StyledCloseContainer onClick={changeIsCart}>
            <StyledClose>x</StyledClose>
          </StyledCloseContainer>
        </StyledHead>
        <StyledProducts>
          <ProductCartCard />
          <ProductCartCard />
        </StyledProducts>
      </StyledCartShopsContent>
    </StyledCartShops>
  );
}

export default CartShops;
