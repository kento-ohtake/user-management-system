// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import EditUserForm from "@/components/EditUserForm";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  const { id } = useParams();
  
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm
        userId={Number(id)} // TODO: URLパラメータから取得したユーザーIDを渡す
        disabled={false}
      />
    </Box>
  );
};

export default EditUserPage;
