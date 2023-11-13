import { formatPrice } from "@/utilities";
import {
  StyledClose,
  StyledImage,
  StyledLine,
  StyledNumber,
  StyledPrice,
  StyledProduct,
  StyledProductContent,
  StyledRemoveAdd,
  StyledRemoveAddTitle,
  StyledRemoveAndAddContainer,
  StyledRemoveAndAddContent,
  StyledTitle,
} from "./styled";
import { IProductCartCardProps } from "./types";
import { useCartStore } from "@/store";

export function ProductCartCard(props: IProductCartCardProps) {
  const { product } = props;
  const { addCart, decreaseCart, removeProduct } = useCartStore();
  if (!product) return null;
  return (
    <StyledProduct>
      <StyledProductContent>
        <StyledImage src={product?.photo} alt="" />
        <StyledTitle>{product?.name}</StyledTitle>
        <StyledRemoveAndAddContainer>
          <StyledRemoveAddTitle>Qtd:</StyledRemoveAddTitle>
          <StyledRemoveAndAddContent>
            <StyledRemoveAdd onClick={() => decreaseCart(product)}>-</StyledRemoveAdd>
            <StyledLine />
            <StyledNumber>{product?.count}</StyledNumber>
            <StyledLine />
            <StyledRemoveAdd onClick={() => addCart(product)}>+</StyledRemoveAdd>
          </StyledRemoveAndAddContent>
        </StyledRemoveAndAddContainer>
      </StyledProductContent>
      <StyledPrice>R${formatPrice(product?.price)}</StyledPrice>
      <StyledClose onClick={() => removeProduct(product?.id)}>x</StyledClose>
    </StyledProduct>
  );
}

export default ProductCartCard;
