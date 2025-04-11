// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

// TODO: メタデータ
const meta: Meta<typeof CustomModal> = {
  title: "components/parts/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
};

export default meta;

// ストーリーの定義
type Story = StoryObj<typeof CustomModal>

// デフォルトストーリーの作成
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        {/* クリックでモーダル開閉させる */}
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="モーダルの表示確認"
          content="この操作を実行してもよろしいですか？"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("確認ボタンがクリックされました！");
            setOpen(false);
          }}
          // TODO: Propを渡す
          // onCloceはsetOpenにfalseを渡す
          // onConfirmはalert()を使ってクリックしたことを知らせて
          // setOpenにfalseを渡す
        />
      </Box>
    );
  },
};
