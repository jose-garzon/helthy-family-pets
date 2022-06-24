import { Button, Col, Container, Input, Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { LogoHeader } from "../components/organisms/Header";

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
          <Spacer y={3} />
          <Input
            fullWidth
            label="Correo electrónico"
            placeholder="Escribe tu correo electrónico"
          />
          <Spacer />
          <Input.Password
            fullWidth
            label="Contraseña"
            placeholder="Escribe tu correo contraseña"
          />
          <Spacer y={2} />
          <Button rounded css={{ width: "100%" }}>
            Inicial Sesión
          </Button>
        </form>
        <div>
          <Button rounded ghost color="error" css={{ width: "100%" }}>
            Entrar con Google
          </Button>
          <Spacer />
          <Button light size="sm" rounded css={{ width: "100%" }}>
            Registrate
          </Button>
          <Spacer />
        </div>
      </Container>
    </>
  );
};

export default Login;
