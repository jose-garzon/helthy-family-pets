import { Button, ButtonProps } from "@nextui-org/react";
import { TbBrandGoogle } from "react-icons/tb";

const GoogleButton = (props: Partial<ButtonProps>) => {
  return (
    <Button rounded color="error" icon={<TbBrandGoogle size="20" />} {...props}>
      Entrar con Google
    </Button>
  );
};

export { GoogleButton };
