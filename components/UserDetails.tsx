// UserDetails.tsx
import { Box, Typography } from "@mui/material";
import { User } from "../types/User";

interface UserDetailsProps {
  user: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
 if (!user) {
   return <Typography>ユーザー情報を読み込み中...</Typography>;
 }
  
  return (
    <>
      <Box>
        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>
        <Typography>ID: {user.id}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Role: {user.role}</Typography>
      </Box>
    </>
  );
};

export default UserDetails;
