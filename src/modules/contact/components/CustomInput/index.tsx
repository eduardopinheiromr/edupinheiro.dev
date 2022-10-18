import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type Props = InputProps & {
  label?: string;
};

export default function CustomInput({ label, name, ...props }: Props) {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = errors[name];
  return (
    <FormControl color="text" isInvalid={Boolean(error)}>
      <FormLabel fontWeight="700">{label}</FormLabel>
      <Input
        borderColor={error && "orange!important"}
        bg="black"
        {...register(name)}
        {...props}
      />
      <FormErrorMessage position="absolute" color="orange">
        {error?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
}
