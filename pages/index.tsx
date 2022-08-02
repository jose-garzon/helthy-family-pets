import { Button, Card, Col, Container, Input, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/organisms/Header";
import { MdOutlinePets } from "react-icons/md";
import { GoogleButton, LoadingButton } from "../components/Atoms/Button";
import Link from "next/link";
import { ServicesCard } from "../components/organisms/Card";
import { TbMail } from "react-icons/tb";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Family</title>
      </Head>
      <Header />
      <Container css={{ pb: "$10" }}>
        <Col css={{ my: "$5" }} as="main">
          <Text h2 css={{ lineHeight: "$xs" }}>
            Cuida a tu familiar <br /> de cuatro patas
          </Text>
          <Text css={{ mt: "$10" }}>
            Lleva el registro y haz seguimiento de la salud de tus mascotas
          </Text>

          <Col css={{ my: "$10", px: "$15" }} as="section">
            <Link href="/registro">
              <Button
                size="sm"
                rounded
                bordered
                css={{ width: "100%", mb: "$5" }}
                icon={<TbMail size={20} />}
              >
                Registrate
              </Button>
            </Link>
            <GoogleButton size="sm" bordered css={{ width: "100%" }}>
              Entrar con Google
            </GoogleButton>
          </Col>
        </Col>
      </Container>
    </>
  );
};

export default Home;
