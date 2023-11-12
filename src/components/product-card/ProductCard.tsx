import { Shop } from "@/icons";
import { ContainerText, StyledBadgePrice, StyledButton, StyledImage, StyledProductCard, StyledSubTitle, StyledTitle, StyledTitleContainer } from "./styled";
import { IProductCardProps } from "./types";

export function ProductCard(props: IProductCardProps) {
  const { product } = props;
  if (!product) return null;
  const price = parseFloat(product?.price);
  const formatPrice = (price: number) => {
    if (price % 1 !== 0) return price.toFixed(2);
    return price.toFixed(0);
  };
  return (
    <StyledProductCard>
      <StyledImage src={product?.photo} alt={product?.name} />
      <ContainerText>
        <StyledTitleContainer>
          <StyledTitle>{product?.name}</StyledTitle>
          <StyledBadgePrice>R${formatPrice(price)}</StyledBadgePrice>
        </StyledTitleContainer>
        <StyledSubTitle>{product?.description}</StyledSubTitle>
      </ContainerText>
      <StyledButton>
        <Shop stroke="white" />
        COMPRAR
      </StyledButton>
    </StyledProductCard>
  );
}

export default ProductCard;
