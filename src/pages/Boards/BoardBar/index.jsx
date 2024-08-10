import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const Menu_Styles = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Chip
          sx={Menu_Styles}
          icon={<DashboardIcon />}
          label="Khoahii"
          clickable
        />

        <Chip
          sx={Menu_Styles}
          icon={<VpnLockIcon />}
          label="Public/private Workspace"
          clickable
        />

        <Chip
          sx={Menu_Styles}
          icon={<AddToDriveIcon />}
          label="Add to Google drive"
          clickable
        />
        <Chip
          sx={Menu_Styles}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={Menu_Styles}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      {/* Right */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={6}
          sx={{
            '& .MuiAvatar-root': {
              width:'34px',
              height:'34px',
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title="Khoahii">
            <Avatar
              alt="Khoahii"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/453907117_1171030640849320_4810181517144927636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Yjxy4ZnkwP0Q7kNvgFDUgsT&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDAaEyKZQb9NlXuSIqOplzQAqkFY1_A24wBl8GQ2oglTw&oe=66BC0F43"
            />
          </Tooltip>
          <Tooltip title="LinhNgoo">
            <Avatar
              alt="LinhNgoo"
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/452911820_1940939639743656_7973009366649102190_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=yFFpSmfi_gcQ7kNvgEEraRT&_nc_ht=scontent.fhan15-2.fna&oh=00_AYA-J4FDubzWn6ZOvoqqiR5JMhhql4G-VyMaFMJCROJxLg&oe=66BD06E6"
            />
          </Tooltip>
          <Tooltip title="Hoan">
            <Avatar
              alt="Hoan"
              src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/439841628_1131294674582643_138276901351694587_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=p5uXba2POIIQ7kNvgHmXC26&_nc_ht=scontent.fhan15-1.fna&oh=00_AYA_nq1bNjTCLLdCyPcSyV748pEdxpiYtr1IViGGaTiFPg&oe=66BCEDF0"
            />
          </Tooltip>
          <Tooltip title="Thuy">
            <Avatar
              alt="Thuy"
              src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/449517362_980817826854730_5305517007831193940_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=vjAgnc8prTkQ7kNvgFHKwYA&_nc_ht=scontent.fhan15-1.fna&oh=00_AYA--1lbPemBqUkPmSQQYH9GfFpjY2Xvr-JbuEVQi3cgGQ&oe=66BCF7CA"
            />
          </Tooltip>
          <Tooltip title="Quynh">
            <Avatar
              alt="Quynh"
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/166879375_846511522952420_1208365336115675892_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Y9pmH90oRRoQ7kNvgEjcKTA&_nc_ht=scontent.fhan15-2.fna&oh=00_AYBQV66G5lVC58Gp_NeTR39ZKYCYoizXLKMNeyXKB-KJkQ&oe=66BD1C21"
            />
          </Tooltip>
          <Tooltip title="Idol">
            <Avatar
              alt="Idol"
              src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/329585220_867664031082665_3382668373502029291_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3w4ZN11MORwQ7kNvgFyPf47&_nc_ht=scontent.fhan15-1.fna&oh=00_AYArPLoY1mTj6ZYfh-sqG9BOdbJFV-Iu4PDpCWrIPQ2-Pw&oe=66BD0DED"
            />
          </Tooltip>
          <Tooltip title="Khoahii">
            <Avatar
              alt="Khoahii"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/453907117_1171030640849320_4810181517144927636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Yjxy4ZnkwP0Q7kNvgFDUgsT&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDAaEyKZQb9NlXuSIqOplzQAqkFY1_A24wBl8GQ2oglTw&oe=66BC0F43"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
