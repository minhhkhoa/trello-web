import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import {
  arrayMove
} from '@dnd-kit/sortable'

function BoardContent(props) {
  const { board } = props

  //yêu cầu khi kéo cuột phải đi 10px thì mới xác nhận là kéo thả(fix click)
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  //di chuyeenr vaf ddooj cheenh leechj laf 5px mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  //ưu tiên mouseSensor và touchSensor
  const sensors = useSensors(mouseSensor, touchSensor)

  const [oderedColumnsState, setOderedColumnsState] = useState([])

  useEffect(() => {
    const oderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOderedColumnsState(oderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event

    // Nếu kéo linh tinh(Ko tồn tại over) ra vị trí ko xác định thì null
    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = oderedColumnsState.findIndex(c => c._id === active.id)
      const newIndex = oderedColumnsState.findIndex(c => c._id === over.id)
      const dndOderedColumns = arrayMove(oderedColumnsState, oldIndex, newIndex)
      // const dndOderedColumnsIds = dndOderedColumns.map(c => c._id)

      setOderedColumnsState(dndOderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#223450' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={oderedColumnsState} />
      </Box>
    </DndContext>

  )
}

export default BoardContent
