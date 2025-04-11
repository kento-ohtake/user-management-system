//UserList.tsx
import { useState } from "react";
import { User } from "../types/User";
// import UserCard from "./UserCard";
import CustomCard from "./parts/CustomCard";
import { deleteUpdateUser } from "@/utils/api";
import CustomButton from "./parts/CustomButton";
import { Box } from "@mui/material";

interface UserListProps {
  users: User[]; // ユーザーの配列
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users);

  const handleDelete = async (deletedUserId: number) => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await deleteUpdateUser(deletedUserId);
        setUserList(users.filter((user) => user.id !== deletedUserId));
      } catch (error) {
        console.error("ユーザーの削除エラー:", error);
      }
    }
  };

  return (
    <>
      {userList.map((user) => (
        <CustomCard
          key={user.id}
          title={user.name}
          description={`メール: ${user.email} \n 役割: ${user.role}`}
          actions={
            <Box>
              <CustomButton
                size="small"
                variantType="primary"
                href={`/users/${user.id}/details`}
              >
                詳細
              </CustomButton>
              <CustomButton
                size="small"
                variantType="secondary"
                href={`/users/${user.id}/edit`}
              >
                編集
              </CustomButton>
              <CustomButton
                size="small"
                variant="contained"
                variantType="danger"
                onClick={() => handleDelete(user.id)}
              >
                削除
              </CustomButton>
            </Box>
          }
        />
      ))}
    </>
  );
};

export default UserList;
