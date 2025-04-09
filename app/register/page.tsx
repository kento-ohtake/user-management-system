// app/register/page.tsx
"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "../../components/RegisterForm";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  const router = useRouter();

  return (
    //  ここにユーザー一覧へのルーターを追加する
    <>
      <Box>
        <RegisterForm
          onSuccess={() => {
            alert("登録が成功しました！");
            router.push("/users");
          }}
          onError={() => alert("エラーが発生しました")}
          disabled={false}
        />
      </Box>
    </>
  );
};

export default RegisterPage;
