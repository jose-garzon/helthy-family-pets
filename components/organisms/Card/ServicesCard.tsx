import { Card, Col, Row, Text } from "@nextui-org/react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  message: string;
  description: string;
  icon: IconType;
}

const ServicesCard = (props: ServiceCardProps) => {
  const { message, icon: Icon, description } = props;
  return (
    <Card variant="shadow" css={{ boxShadow: "$sm", filter: "none" }}>
      <Card.Body css={{ alignItems: "center" }}>
        <Row css={{ alignItems: "center" }}>
          <Col
            css={{
              width: "30%",
              display: "grid",
              placeContent: "center",
              color: "$primarySolidHover",
            }}
          >
            <Icon size={30} />
          </Col>
          <Col css={{ width: "70%" }}>
            <Text h4>{message}</Text>
            <Text>{description}</Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export { ServicesCard };
