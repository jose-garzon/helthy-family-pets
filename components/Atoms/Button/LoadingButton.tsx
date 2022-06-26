import { Button, ButtonProps, Loading } from "@nextui-org/react";
import React from "react";

interface LoadingButtonProps extends Partial<ButtonProps> {
  loading: boolean;
}

const LoadingButton = ({ loading, children, ...rest }: LoadingButtonProps) => {
  return (
    <Button {...rest}>
      {loading ? (
        <Loading type="points" color="currentColor" size="sm" />
      ) : (
        children
      )}
    </Button>
  );
};

export { LoadingButton };
