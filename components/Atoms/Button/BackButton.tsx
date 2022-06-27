import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { TbChevronLeft } from "react-icons/tb";

const BackButton = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <Button
      onPress={goBack}
      bordered
      color="primary"
      auto
      css={{ px: 0, aspectRatio: 1 }}
    >
      <TbChevronLeft size={25} />
    </Button>
  );
};

export { BackButton };
