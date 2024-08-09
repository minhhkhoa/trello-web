import * as React from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspace from './Munes/Workspace'
import Recent from './Munes/Recent'
import Templated from './Munes/Templated'
import Started from './Munes/started'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Profile from './Munes/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{
            fontsize: '1.2rem',
            fontWeight: 'bold',
            color: 'primary.main'
          }}>Trello</Typography>
        </Box>

        <Workspace />
        <Recent />
        <Started />
        <Templated />

        <Button variant="outlined">Create</Button>

      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <TextField id="outlined-search" label="Search..." type="search" size="small" />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Notification" sx={{ cursor: 'pointer' }}>
          <HelpOutlineOutlinedIcon />
        </Tooltip>

        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
