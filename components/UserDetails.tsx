// UserDetails.tsx
import { Box, Typography } from "@mui/material";
import { User } from "../types/User";

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
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
