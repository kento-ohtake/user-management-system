"use client";
import UserDetails from "@/components/UserDetails";
import { fetchUserById } from "@/utils/api";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/types/User";

const UserDetailsPage = () => {
  const [user, setUser] = useState<User | null>(null); //詳細は単数とする
  const { id } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userId = Number(id);
        const data = await fetchUserById(userId);
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log("ユーザーの取得に失敗しました。" + err);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細画⾯
      </Typography>
      <UserDetails user={user} />
    </>
  );
};

export default UserDetailsPage;
