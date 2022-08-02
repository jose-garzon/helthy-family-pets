import {
  Button,
  Col,
  Container,
  Divider,
  Grid,
  Row,
  StyledLink,
  Text,
} from "@nextui-org/react";
import Link from "next/link";
import { TbPlus } from "react-icons/tb";
import { PetAvatar } from "../../components/molecules/Avatar";
import { EventCard } from "../../components/organisms/Card";
import { SignedHeader } from "../../components/organisms/Header";

const PetsList = () => {
  return (
    <>
      <SignedHeader />
      <Container>
        <Text h1 size="24px" css={{ mb: "$5" }}>
          Hola, Laura Duque
        </Text>
        <Divider />

        <Text weight="bold" size="16px" color="primary" css={{ mt: "$5" }}>
          Tus mascotas
        </Text>
        <Text size="14px">Agrega a las mascotas de tu familia</Text>
        <Grid.Container gap={2} css={{ p: "0" }}>
          <Grid>
            <PetAvatar name="Drago" />
          </Grid>
          <Grid>
            <PetAvatar name="Roccu" status="sick" />
          </Grid>
        </Grid.Container>

        <Link href="/mascotas/registro">
          <StyledLink color="primary" css={{ alignItems: "center", mt: "$10" }}>
            <TbPlus /> Agrega una mascota
          </StyledLink>
        </Link>

        <Col as="section">
          <Text h2 size="20px" css={{ mt: "$15" }}>
            Recordatorios
          </Text>
          <EventCard />
          <EventCard />
        </Col>
      </Container>
    </>
  );
};

export default PetsList;
