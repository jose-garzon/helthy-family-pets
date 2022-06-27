import { Avatar, Card, Col, Text } from "@nextui-org/react";

const defaultImage =
  "https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

interface PetCardProps {
  name: string;
  status?: "sick";
}

const PetCard = (props: PetCardProps) => {
  const { name, status } = props;
  return (
    <Col css={{ textAlign: "center" }}>
      <Text weight="bold">{name}</Text>
      <Avatar
        src={defaultImage}
        bordered
        color={status === "sick" ? "error" : "default"}
        size="xl"
      />
    </Col>
  );
};
export { PetCard };
