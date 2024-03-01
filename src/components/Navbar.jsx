import * as React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { clearUser } from '../features/authSlice';

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
             News
          </Typography>
          {user.email && user.password && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
          {(!user.email || !user.password) && (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
