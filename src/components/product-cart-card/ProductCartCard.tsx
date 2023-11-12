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

export function ProductCartCard() {
  return (
    <StyledProduct>
      <StyledProductContent>
        <StyledImage src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp" alt="" />
        <StyledTitle>Apple Watch Series 4 GPS</StyledTitle>
        <StyledRemoveAndAddContainer>
          <StyledRemoveAddTitle>Qtd:</StyledRemoveAddTitle>
          <StyledRemoveAndAddContent>
            <StyledRemoveAdd>-</StyledRemoveAdd>
            <StyledLine />
            <StyledNumber>1</StyledNumber>
            <StyledLine />
            <StyledRemoveAdd>+</StyledRemoveAdd>
          </StyledRemoveAndAddContent>
        </StyledRemoveAndAddContainer>
      </StyledProductContent>
      <StyledPrice>R$399</StyledPrice>
      <StyledClose>x</StyledClose>
    </StyledProduct>
  );
}

export default ProductCartCard;
