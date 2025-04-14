// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";
import { CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "Danger Button",
  },
};

// ホバー状態
export const HoverGrow: Story = {
  args: {
    variantType: "primary",
    children: "HoverGrow",
    sx: {
      transition: "transform 0.2s ease-in-out", //transformの変化を0.2秒で自然に変化と定義
      "&:hover": {
        transform: "scale(1.1)", //拡大設定
      },
    },
  },
};

// Loadingスピナーボタン
export const LoadingButton: Story = {
  args: {
    variantType: "secondary",
    children: "Click to Load",
  },
  
  // 動的な挙動 や カスタムロジック を組み込んだストーリー
  render: (args) => {
    const [loading, setLoading] = useState(false); // 状態の初期値は false

    const handleClick = () => {
      setLoading(true); // 一度押したら true にしてローディング状態に
    };

    return (
      <CustomButton
        {...args}
        onClick={handleClick}
        disabled={loading}
        startIcon={
          loading ? <CircularProgress size={16} color="inherit" /> : null
        }
      >
        {loading ? "Loading..." : args.children}
      </CustomButton>
    );
  },
};

// アイコンボタン
export const IconButton: Story = {
  args: {
    variantType: "primary",
    children: <DeleteIcon />, //MUIの削除アイコン
    sx: {
      minWidth: "40px",
      width: "40px",
      height: "40px",
      padding: 0,
    },
  },
};
