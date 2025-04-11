// User.Card.tsx
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { User } from '../types/User';
import Link from 'next/link';
import CustomButton from './parts/CustomButton';
import { deleteUpdateUser } from '@/utils/api';

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void; // 削除後のコールバック関数
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {

   const handleDelete = async () => {
     if (confirm("本当にこのユーザーを削除しますか？")) {
       try {
         await deleteUpdateUser(user.id); // 論理削除を実行
         onDelete(user.id); // 親コンポーネントに削除を通知
       } catch (error) {
         console.error("ユーザーの削除エラー:", error);
       }
     }
   };
   
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={Link}
          href={`/users/${user.id}/details`}
        >
          詳細
        </Button>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
          編集
        </Button>
        <CustomButton
          size="small"
          variant="contained"
          variantType="danger"
          onClick={handleDelete}
        >
          削除
        </CustomButton>
      </CardActions>
    </Card>
  );
}

export default UserCard;