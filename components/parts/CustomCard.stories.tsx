// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";
import CustomButton from "./CustomButton";
import { useState } from "react";

// TODO: メタデータ
const meta: Meta<typeof CustomCard> = {
  title: "Components/Parts/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description: "これはカスタムカードの説明です。",
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description: "アクションが含まれていないカードの説明。",
  },
};

// 長文説明カード 一定の長さで折り返す
export const LongDescriptionCard: Story = {
  args: {
    title: "長文説明カード",
    description:
      "ここに長い説明が入ります。これはテスト用の説明文です。文字が多すぎるとカードのサイズが自動的に調整されます。\n" +
      "ここで、カードが折り返しを使って表示します。もしまだ続けて文字を表示する場合、さらに長い文章を追加します。\n" +
      "これはテストのために長文を続けて書いています。\n" +
      "ここに長い説明が入ります。これはテスト用の説明文です。文字が多すぎるとカードのサイズが自動的に調整されます。\n" +
      "ここで、カードが折り返しを使って表示します。もしまだ続けて文字を表示する場合、さらに長い文章を追加します。\n",
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
  render: (args) => (
    <CustomCard
      {...args}
      sx={{
        width: 600,
        padding: 2,
        maxHeight: 200, // 高さを制限
        overflow: "auto", // 必要に応じてスクロール
        lineHeight: "1.5", // 行間の指定
        whiteSpace: "normal", // 文字の折り返しを有効にする
      }}
    />
  ),
};

// ダーク/ライトテーマ切り替え機能付きカード
export const ThemeToggleCard: Story = {
  render: (args) => {
    const [isDarkMode, setIsDarkMode] = useState(false); // ダークモードかどうかを管理

    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev); // モードを切り替える
    };

    return (
      <div>
        <CustomButton variantType="primary" onClick={toggleTheme}>
          {isDarkMode ? "Light" : "Dark"}
        </CustomButton>

        <CustomCard
          {...args}
          title="テーマ切り替えカード"
          description="テスト文章"
          sx={{
            width: 600,
            height: 300,
            padding: 2,
            marginTop: 2,
            backgroundColor: isDarkMode ? "#333" : "#fff", // 背景色を切り替え
            color: isDarkMode ? "#fff" : "#000", // 文字色を切り替え
          }}
        />
      </div>
    );
  },
};

export const GradientBackgroundCard: Story = {
  args: {
    actions: (
      <>
        <CustomButton variantType="primary">アクション1</CustomButton>
      </>
    ),
  },
  render: (args) => (
    <CustomCard
      {...args}
      title= "グラデーションカード"
      description="テスト文章"
      sx={{
        width: 600,
        height: 300,
        padding: 2,
        marginTop: 2,
        background: "linear-gradient(to right, #333333,rgb(121, 120, 120))", // ピンクからオレンジのグラデーション
        color: "#fff", // 文字色を白に
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
      }}
    />
  ),
};