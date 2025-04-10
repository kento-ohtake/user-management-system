// components/parts/CustomButton.tsx

import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {
  let color: ButtonProps['color'] = 'primary';

  if (variantType === "secondary") {
    color = "success"; // 編集: 緑
  } else if (variantType === "danger") {
    color = "error"; // 削除: 赤
  } else if (variantType === "primary") {
    color = "primary"; // 詳細: 青（デフォルト）
  }
	// TODO: variantTypeに応じてcolorを変化させる
	// colorに設定する色は調べて実装する

  return (
    <>
      <Button color={color} variant="contained" {...props} />
    </>
    // TODO: <Button>の実装
    // プロップスには[color][variant]を設定し、{...props}を最後に設定する
  );
}

export default CustomButton;