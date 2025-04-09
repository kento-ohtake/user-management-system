import { deleteUpdateUser } from "@/utils/api";
import { Button } from "@mui/material";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const handleDelete = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await deleteUpdateUser(userId); // 論理削除を実行
        onDelete(userId); // 親コンポーネントに削除を通知
      } catch (error) {
        console.error("ユーザーの削除エラー:", error);
      }
    }
  };

  return (
    <Button variant="outlined" color="error" onClick={handleDelete}>
      削除
    </Button>
  );
};

export default DeleteUserButton;
