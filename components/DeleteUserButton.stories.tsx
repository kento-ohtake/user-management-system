// components/DeleteUserButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "./DeleteUserButton";

// TODO: メタデータ
const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton",
  component: DeleteUserButton,
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof DeleteUserButton>;

// TODO: デフォルトストーリーの設定
export const Default: Story = {
  args: {
    userId: 1,
    onDelete: () => {
      console.log(`ユーザーを削除しました`);
    },
  },
};