import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ユーザー管理システム
        </Typography>
        <Button color="inherit" component={Link} href="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} href="/users">
          ユーザー一覧
        </Button>
        <Button color="inherit" component={Link} href="/register">
          新規登録画面
        </Button>
        <Button color="inherit" component={Link} href="/users/[id]/edit">
          編集画面
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;