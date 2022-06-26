import {
  Button,
  Card,
  Col,
  Container,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/organisms/Header";
import { MdOutlinePets } from "react-icons/md";
import { GoogleButton } from "../components/Atoms/Button";
import Link from "next/link";
import { ServicesCard } from "../components/organisms/Card";
import { TbBug, TbMedicineSyrup, TbVaccine } from "react-icons/tb";
import { AiOutlineMedicineBox } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Family</title>
      </Head>
      <Header />
      <Container>
        <Col css={{ my: "$5" }} as="main">
          <Text h2 css={{ lineHeight: "$xs" }}>
            Cuida a tu familiar <br /> de cuatro patas
          </Text>
          <Text css={{ mt: "$10" }}>
            Lleva el registro y haz seguimiento de la salud de tus mascotas
          </Text>

          <Col css={{ my: "$10", px: "$20" }} as="section">
            <Col>
              <Link href="#first_pet">
                <Button rounded>Crea tu primer mascota</Button>
              </Link>
              <Spacer />
              <Button rounded bordered>
                Registrate
              </Button>
              <Spacer />
              <GoogleButton light>Entrar con Google</GoogleButton>
            </Col>
          </Col>
        </Col>

        <Text h3>Programa y gestiona sus: </Text>
        <ServicesCard message="Vacunas" icon={TbVaccine} />
        <ServicesCard message="Ciclos de desparacitación" icon={TbBug} />
        <ServicesCard message="Citas médicas" icon={AiOutlineMedicineBox} />
        <ServicesCard message="Medicinas" icon={TbMedicineSyrup} />
        <ServicesCard message="Ciclo Menstrual" icon={TbVaccine} />

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
            <Button css={{ width: "100%" }} rounded>
              Crear
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Home;
