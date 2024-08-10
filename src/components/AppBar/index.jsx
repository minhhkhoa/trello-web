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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto'
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
          <SvgIcon component={TrelloIcon} inheritViewBox
            fontSize="small"
            sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'primary.main'
          }}>Trello</Typography>
        </Box>

        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 1
        }}>
          <Workspace />
          <Recent />
          <Started />
          <Templated />
          <Button variant="outlined" startIcon={<LibraryAddIcon/>}>Create</Button>
        </Box>

      </Box>

      {/* right */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <TextField id="outlined-search" label="Search..."
          type="search" size="small"
          sx={{
            minWidth: '120px'
          }} />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer', color: 'primary.main' }}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" sx={{ cursor: 'pointer', color: 'primary.main' }}>
          <HelpOutlineOutlinedIcon />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
