import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  TextareaProps,
  Textarea,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type Props = TextareaProps & {
  label?: string;
};

export default function CustomTextarea({ label, name, ...props }: Props) {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = errors[name];
  return (
    <FormControl color="text" isInvalid={Boolean(error)}>
      <FormLabel fontWeight="700">{label}</FormLabel>
      <Textarea
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
