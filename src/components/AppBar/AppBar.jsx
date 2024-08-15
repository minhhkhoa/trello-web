import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
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
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [search, setSearch] = useState('')

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1C2A40' : '#1565c0')
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <SvgIcon component={TrelloIcon} inheritViewBox
            fontSize="small"
            sx={{ color: 'white' }} />
          <Typography variant='span' sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white'
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
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            sx={{ color: 'white', border: '5px', '&:hover': { border: 'none' } }}
          >Create</Button>
        </Box>

      </Box>

      {/* right */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                onClick={() => setSearch('')}
                fontSize='small'
                sx={{
                  color: search ? 'white' : 'transparent',
                  cursor: 'pointer'
                }}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            '& label': {
              color: 'white'
            },
            '& input': {
              color: 'white'
            },
            '& label.Mui-focused': {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }

          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer', color: 'white' }}>
            <NotificationsNoneOutlinedIcon
              sx={{
                color: 'white'
              }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" sx={{ cursor: 'pointer', color: 'white' }}>
          <HelpOutlineOutlinedIcon
            sx={{
              color: 'white'
            }}
          />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
