// components/parts/CustomCard.tsx
import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";

// TODO: インターフェースを修正
interface CustomCardProps {
  title: string;
  description: string;
  actions?: React.ReactNode; //調べる　
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        {/* TODO: [titel]と[description]を表示 */}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
