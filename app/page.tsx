import React from 'react';
import { Typography, Box } from '@mui/material';
import RegisterForm from '@/components/RegisterForm';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        ユーザー管理システムへようこそ
      </Typography>
      <Typography variant="h6" color="text.secondary">
        このシステムでは、ユーザーの一覧表示、編集、削除が可能です。
      </Typography>
      <RegisterForm />
    </Box>
  );
}

export default HomePage;