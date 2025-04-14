// components/parts/CustomModal.tsx
import React from "react";
import { Modal, Box, Typography, Button, Slide } from "@mui/material";

interface CustomModalProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm?: () => void;
  transition?: "slide";
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

// TODO: propの設定
const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
  transition,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      {transition === "slide" ? (
        <Slide in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h2" gutterBottom>
              {title}
            </Typography>
            <Typography sx={{ mt: 2 }}>{content}</Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={onClose} sx={{ mr: 2 }}>
                キャンセル
              </Button>
              {onConfirm && (
                <Button variant="contained" color="primary" onClick={onConfirm}>
                  確認
                </Button>
              )}
            </Box>
          </Box>
        </Slide>
      ) : (
        // transitionがない場合は通常のモーダルを表示
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{content}</Typography>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={onClose} sx={{ mr: 2 }}>
              キャンセル
            </Button>
            {onConfirm && (
              <Button variant="contained" color="primary" onClick={onConfirm}>
                確認
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export default CustomModal;
