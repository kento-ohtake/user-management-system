//UserList.tsx
import { useState } from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[]; // ユーザーの配列
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users);

const handleDelete = (deletedUserId: number) => {
  setUserList(users.filter((user) => user.id !== deletedUserId));
};

  return (
    <>
      {userList.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default UserList;
