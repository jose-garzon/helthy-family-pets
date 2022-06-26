import {
  Button,
  Col,
  Container,
  Input,
  Spacer,
  Text,
  Link as StyledLink,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { LogoHeader } from "../components/organisms/Header";
import { TbBrandGoogle } from "react-icons/tb";
import { LoadingButton } from "../components/Atoms/Button";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pets | Login</title>
      </Head>
      <LogoHeader />
      <Container
        css={{
          display: "grid",
          gridTemplateRows: "1fr auto",
          height: "calc(100vh - 50px)",
        }}
      >
        <form>
          <Text h1>Login</Text>
          <Spacer />
          <Input
            fullWidth
            id="login_email"
            label="Correo electrónico"
            placeholder="Escribe tu correo electrónico"
          />
          <Spacer />
          <Input.Password
            fullWidth
            id="login_password"
            label="Contraseña"
            placeholder="Escribe tu contraseña"
          />
          <Spacer y={2} />
          <LoadingButton loading={false} rounded css={{ width: "100%" }}>
            Inicial Sesión
          </LoadingButton>
        </form>
        <Col css={{ textAlign: "center" }}>
          <Button
            rounded
            ghost
            color="error"
            css={{ width: "100%", mb: "$8" }}
            icon={<TbBrandGoogle size="20" />}
          >
            Entrar con Google
          </Button>
          <Link href="/registro">
            <StyledLink underline color="text">
              Todavia no tengo una cuenta
            </StyledLink>
          </Link>
          <Spacer />
        </Col>
      </Container>
    </>
  );
};

export default Login;
