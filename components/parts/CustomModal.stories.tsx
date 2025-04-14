// components/parts/CustomModal.stories.tsx

import React, { useEffect, useState } from "react";
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

//自動で閉じるモーダル
export const AutoCloseModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    // open が true になったときに 3 秒後に自動で閉じる
    useEffect(() => {
      if (open) {
        const timer = setTimeout(() => {
          setOpen(false);
        }, 3000);

        return () => clearTimeout(timer); // クリーンアップ
      }
    }, [open]);

    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          自動で閉じるモーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="⏱️ 自動クローズモーダル"
          content="3秒後に自動的に閉じます。"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("確認されました！");
          }}
        />
      </Box>
    );
  },
};

// 上からスライドして表示するモーダル
export const SlideDownModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          スライドモーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="スライドモーダル"
          content="上からスライド表示されるモーダルです"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("確認されました！");
            setOpen(false);
          }}
          transition="slide" // ← スライドを
        />
      </Box>
    );
  },
};


