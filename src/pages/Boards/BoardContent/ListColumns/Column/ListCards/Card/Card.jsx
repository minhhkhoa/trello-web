import CardContent from '@mui/material/CardContent'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { Button, Typography } from '@mui/material'

function Card({ checkHideCard }) {
  if (checkHideCard) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgbs(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent
          sx={{
            p: 1.5
          }}
        >
          <Typography>KhoahiiTest</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgbs(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRttKhoua2YOaQN040T_cOl62oKGq94mymGA&s"
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 1.5
        }}
      >
        <Typography>Khoahii</Typography>
      </CardContent>
      <CardActions
        sx={{
          p: '0 4px 8px 4px'
        }}
      >
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<InsertCommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
