import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { createUser } from "../utils/api";
// import { useRouter } from "next/navigation";

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
  // const router = useRouter(); // useRouter フックを使用

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
      // router.push("/users"); // 登録成功後にユーザー一覧画面に遷移
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
          {...register("name", { required: "名前は必須です" })}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.name}
          disabled={disabled}
        />

        <TextField
          label="メールアドレス"
          {...register("email", { required: "メールアドレスは必須です" })}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          disabled={disabled}
        />

        <TextField
          label="ロール"
          {...register("role", { required: "ロールは必須です" })}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.role}
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
