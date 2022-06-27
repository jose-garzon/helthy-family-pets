import {
  Button,
  Card,
  Col,
  Container,
  Input,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/organisms/Header";
import { MdOutlinePets } from "react-icons/md";
import { GoogleButton, LoadingButton } from "../components/Atoms/Button";
import Link from "next/link";
import { ServicesCard } from "../components/organisms/Card";
import { TbBug, TbMail, TbVaccine } from "react-icons/tb";
import { FaPills } from "react-icons/fa";
import { AiOutlineMedicineBox } from "react-icons/ai";

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
            <Link href="#first_pet">
              <Button rounded css={{ width: "100%", mb: "$10" }}>
                Crea tu primer mascota
              </Button>
            </Link>
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

        <Col
          as="section"
          css={{
            gap: "$10",
            display: "flex",
            flexDirection: "column",
            mb: "$10",
          }}
        >
          <Text h3 css={{ m: "0" }}>
            Programa y gestiona sus:
          </Text>
          <ServicesCard
            message="Vacunas"
            icon={TbVaccine}
            description="Puedes programar las fechas de las vacunas de tu mascota"
          />
          <ServicesCard
            message="Ciclos de desparacitación"
            icon={TbBug}
            description="Recuerda proteger a tu mascota de parasitos"
          />
          <ServicesCard
            message="Citas médicas"
            icon={AiOutlineMedicineBox}
            description="Lleva el historial de las visitas al veterinario"
          />
          <ServicesCard
            message="Medicinas"
            icon={FaPills}
            description="Recuerda que medicinas esta tomando tu mascota"
          />
          <ServicesCard
            message="Ciclo Menstrual"
            icon={TbVaccine}
            description="Registra los días de la menstruación de tu mascota"
          />
        </Col>

        <Card id="first_pet" as="section" variant="bordered">
          <Card.Header>
            <Col css={{ textAlign: "center" }}>
              <MdOutlinePets size={30} />
              <Text h4>Crea a tu primer mascota</Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Input
              fullWidth
              id="home_name"
              label="Mascota"
              placeholder="Drago"
            />
            <Input
              fullWidth
              id="home_race"
              label="Raza"
              placeholder="Pitbull"
            />
          </Card.Body>
          <Card.Footer>
            <LoadingButton loading={false} css={{ width: "100%" }} rounded>
              Crear
            </LoadingButton>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Home;
