import { IconType } from "react-icons";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaPills } from "react-icons/fa";
import { TbBug, TbVaccine } from "react-icons/tb";
import { EventTypes } from "../../../services/events/domain/eventTypes.definitions";

interface ServiceIconProps extends IconType {
  type: EventTypes;
  size?: number;
}

const ServiceIcons: { [key in EventTypes]: IconType } = {
  vaccine: TbVaccine,
  parasites: TbBug,
  vet_appointments: AiOutlineMedicineBox,
  medicine: FaPills,
  period: TbVaccine,
};

const ServiceIcon = (props: ServiceIconProps) => {
  const { type, ...rest } = props;
  const Icon = ServiceIcons[type];
  return <Icon {...rest} />;
};
export { ServiceIcon };
