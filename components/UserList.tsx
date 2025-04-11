import { useState } from "react";
import { User } from "../types/User";
import CustomCard from "./parts/CustomCard";
import { deleteUpdateUser } from "@/utils/api";
import CustomButton from "./parts/CustomButton";
import { Box } from "@mui/material";
import CustomModal from "./parts/CustomModal";

interface UserListProps {
  users: User[]; // ユーザーの配列
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users);
  const [isOpen, setIsOpen] = useState(false);
  const [targetUserId, setTargetUserId] = useState<number | null>(null);

  const handleDelete = async (deletedUserId: number) => {
    try {
      await deleteUpdateUser(deletedUserId);
      setUserList((prev) => prev.filter((user) => user.id !== deletedUserId));
    } catch (error) {
      console.error("ユーザーの削除エラー:", error);
    } finally {
      // モーダルを閉じる処理
      setIsOpen(false);
      setTargetUserId(null);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTargetUserId(null);
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
                onClick={() => {
                  setTargetUserId(user.id);
                  setIsOpen(true);
                }}
              >
                削除
              </CustomButton>
            </Box>
          }
        />
      ))}

      <CustomModal
        open={isOpen}
        title="削除の確認"
        content="本当にこのユーザーを削除しますか？"
        onConfirm={() => {
          if (targetUserId !== null) {
            handleDelete(targetUserId);
          }
        }}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default UserList;
