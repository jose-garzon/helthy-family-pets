import { Card, Text } from "@nextui-org/react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  message: string;
  icon: IconType;
}

const ServicesCard = (props: ServiceCardProps) => {
  const { message, icon: Icon } = props;
  return (
    <Card variant="bordered">
      <Card.Body css={{ alignItems: "center" }}>
        <Icon size={30} />
        <Text h5>{message}</Text>
      </Card.Body>
    </Card>
  );
};
export { ServicesCard };
