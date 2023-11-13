import { useCartStore } from "@/store";
import { ProductCartCard } from "..";
import {
  StyledButtonFinishedShop,
  StyledCartShops,
  StyledCartShopsContent,
  StyledClose,
  StyledCloseContainer,
  StyledHead,
  StyledProducts,
  StyledTitle,
  StyledTitleContainer,
  StyledTotalPrice,
  StyledTotalPriceContainer,
  StyledTotalPriceContent,
} from "./styled";
import { messageWhatsapp } from "@/utilities";

export function CartShops() {
  const { cart, isCart, closeCart } = useCartStore();

  const total = cart.reduce((sum, product) => {
    return sum + parseFloat(product.price) * (product?.count || 1);
  }, 0);
  return (
    <StyledCartShops isCart={isCart}>
      <StyledCartShopsContent>
        <StyledHead>
          <StyledTitleContainer>
            <StyledTitle>Carrinho</StyledTitle>
            <StyledTitle> de compras</StyledTitle>
          </StyledTitleContainer>
          <StyledCloseContainer onClick={closeCart}>
            <StyledClose>x</StyledClose>
          </StyledCloseContainer>
        </StyledHead>
        <StyledProducts>
          {cart?.map((product) => (
            <ProductCartCard key={product?.id} product={product} />
          ))}
        </StyledProducts>
      </StyledCartShopsContent>
      <StyledTotalPriceContainer>
        <StyledTotalPriceContent>
          <StyledTotalPrice>Total:</StyledTotalPrice>
          <StyledTotalPrice>R${total}</StyledTotalPrice>
        </StyledTotalPriceContent>
        <StyledButtonFinishedShop onClick={() => messageWhatsapp(cart)}>Finalizar Compra</StyledButtonFinishedShop>
      </StyledTotalPriceContainer>
    </StyledCartShops>
  );
}

export default CartShops;
