import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'


function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Profiles">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ p: 0 }}
          aria-controls={open ? 'basic-menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{
              width: 32, height: 32
            }}
            alt="Khoahii"
            src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/453907117_1171030640849320_4810181517144927636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Yjxy4ZnkwP0Q7kNvgFDUgsT&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDAaEyKZQb9NlXuSIqOplzQAqkFY1_A24wBl8GQ2oglTw&oe=66BC0F43"
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{
              width: 30, height: 30, marginRight:1
            }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{
              width: 30, height: 30, marginRight:1
            }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile