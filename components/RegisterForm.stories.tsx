// components/RegisterForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

// TODO: メタデータ
const meta: Meta<typeof RegisterForm> = {
  title: "Components/RegisterForm",
  component: RegisterForm,
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof RegisterForm>;

// TODO: デフォルトストーリーの設定
export const Default: Story = {
  args: {
    onSuccess: () => alert("登録が成功しました！"), // 登録成功時の挙動を確認
    onError: () => alert("エラーが発生しました"), // エラー時の挙動を確認
    disabled: false, // フォームを有効化
  },
};
