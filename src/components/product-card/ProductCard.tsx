import { Shop } from "@/icons";
import { ContainerText, StyledBadgePrice, StyledButton, StyledImage, StyledProductCard, StyledSubTitle, StyledTitle, StyledTitleContainer } from "./styled";
import { IProductCardProps } from "./types";
import { useCartStore } from "@/store";
import { formatPrice } from "@/utilities";

export function ProductCard(props: IProductCardProps) {
  const { product } = props;
  const { shopCart } = useCartStore();

  if (!product) return null;

  return (
    <StyledProductCard>
      <StyledImage src={product?.photo} alt={product?.name} />
      <ContainerText>
        <StyledTitleContainer>
          <StyledTitle>{product?.name}</StyledTitle>
          <StyledBadgePrice>R${formatPrice(product?.price)}</StyledBadgePrice>
        </StyledTitleContainer>
        <StyledSubTitle>{product?.description}</StyledSubTitle>
      </ContainerText>
      <StyledButton onClick={() => shopCart(product)}>
        <Shop stroke="white" />
        COMPRAR
      </StyledButton>
    </StyledProductCard>
  );
}

export default ProductCard;
