import {
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
import { GoogleButton, LoadingButton } from "../components/Atoms/Button";
import { LogoHeader } from "../components/organisms/Header";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Family | Registro</title>
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
          <Text h1>Registro</Text>
          <Spacer />
          <Input
            fullWidth
            id="register_email"
            label="Correo electrónico"
            placeholder="Escribe tu correo electrónico"
          />
          <Spacer y={0.5} />
          <Input
            fullWidth
            id="register_family_name"
            label="Familia"
            placeholder="Escribe el nombre de tu familia"
          />
          <Spacer />
          <Input.Password
            fullWidth
            id="register_password"
            label="Contraseña"
            placeholder="Escribe tu contraseña"
          />
          <Spacer y={0.5} />
          <Input.Password
            fullWidth
            id="register_repeat_password"
            label="Confirmar Contraseña"
            placeholder="Confirma tu contraseña"
          />
          <Spacer />
          <LoadingButton loading={false} rounded css={{ width: "100%" }}>
            Crear cuenta
          </LoadingButton>
        </form>
        <Col css={{ textAlign: "center" }}>
          <GoogleButton light auto css={{ width: "100%" }}>
            Entrar con Google
          </GoogleButton>
          <Link href="/login">
            <StyledLink underline color="text">
              Ya tengo una cuenta
            </StyledLink>
          </Link>
          <Spacer />
        </Col>
      </Container>
    </>
  );
};

export default Register;
