import Head from "next/head";
import { ILayoutProps } from "./types";
import { StyledContainer, StyledMain } from "./styled";
import { NavBar } from "..";

export function Layout(props: ILayoutProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>ecommerce</title>
        <meta name="description" content="ecommerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <NavBar />
        <StyledContainer>{children}</StyledContainer>
      </StyledMain>
    </>
  );
}

export default Layout;
