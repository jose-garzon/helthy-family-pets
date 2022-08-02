import { Button, ButtonProps } from "@nextui-org/react";
import { TbBrandGoogle } from "react-icons/tb";
import { signIn } from "next-auth/react";

const GoogleButton = (props: Partial<ButtonProps>) => {
  const googleSignIn = () => signIn("google");
  return (
    <Button
      rounded
      color="error"
      icon={<TbBrandGoogle size="20" />}
      onClick={googleSignIn}
      {...props}
    >
      Entrar con Google
    </Button>
  );
};

export { GoogleButton };
