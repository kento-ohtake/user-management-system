import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { createUser } from "../utils/api";

interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onError,
  disabled,
}) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await createUser(data);
      reset();
      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>

      <Box
        sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="名前"
          {...register("name", {
            required: "名前の入力は必須です",
            maxLength: {
              value: 20,
              message: "名前は20文字以内で入力してください",
            },
          })}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name?.message}
          disabled={disabled}
        />

        <TextField
          label="メールアドレス"
          {...register("email", {
            required: "メールアドレスの入力は必須です",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "無効なメールアドレスです",
            },
          })}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
          disabled={disabled}
        />

        <TextField
          label="ロール"
          {...register("role", {
            required: "ロールの入力は必須です",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "ローマ字（英字）のみで入力してください",
            },
            maxLength: {
              value: 10,
              message: "ロールは10文字以内で入力してください",
            },
          })}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.role}
          helperText={errors.role?.message}
          disabled={disabled}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={disabled}
        >
          登録
        </Button>
      </Box>
    </>
  );
};

export default RegisterForm;
