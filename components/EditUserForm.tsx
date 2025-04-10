// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";

// 必要に応じて利用する
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

interface EditUserFormProps {
  userId: number;
  disabled?: boolean;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({ userId, disabled }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditUserFormInputs>();

  // ユーザー情報を取得してフォームに設定
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user: User | null = await fetchUserById(userId); // ユーザー情報を取得
        if (user) {
          reset(user); // フォームに初期値を設定
        } else {
          console.error("ユーザーが見つかりません。");
          alert("ユーザーが見つかりません。");
        }
      } catch (err) {
        console.error("ユーザー情報の取得に失敗しました。", err);
      }
    };

    fetchUser();
  }, [userId, reset]);

  // フォーム送信処理
  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(userId, data); // ユーザー情報を更新
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
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
    </Box>
  );
};

export default EditUserForm;
