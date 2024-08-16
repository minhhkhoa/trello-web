import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import {
  arrayMove
} from '@dnd-kit/sortable'
import { cloneDeep } from 'lodash'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

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

  //cùng 1 thời điểm chỉ có 1 cái được kéo ko thể cùng kéo cả column và card
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    const oderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOderedColumnsState(oderedColumns)
  }, [board])

  const findColumnByCardId = (cardId) => {
    return oderedColumnsState.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
  }


  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }

  //trong quá trình kéo sẽ chạy function này
  const handleDragOver = (event) => {
    //Không làm gì khi kéo column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    //nếu kéo card thì xử lý nó với các column
    const { active, over } = event

    // Nếu kéo linh tinh(Ko tồn tại over hhoặc active) ra vị trí ko xác định thì null
    if (!active || !over) return

    //activeDragingCardId: là cái đang được kéo
    const { id: activeDragingCardId, data: { current: activeDraggingCardData } } = active
    //overCardId: là cái card đang tương tác trên hoặc dưới so với cái được kéo bên trên
    const { id: overCardId } = over

    //Tìm ra 2 column theo card Id
    const activeColumn = findColumnByCardId(activeDragingCardId)
    const overColumn = findColumnByCardId(overCardId)

    //nếu ko tồn tại 2 cái trên
    if (!activeColumn || !overColumn) return

    //nếu 2 column khác nhau thì xử lý card bên trong. Còn trg hợp card di chuyển vị trí
    //nội tại bên trong column thì xử lý ở HandleDragEnd
    if (activeColumn._id !== overColumn._id) {
      setOderedColumnsState(prevColumn => {
        //tìm vị trí(index) thả card đang kéo vào column mới
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

        let newCardIndex
        const isBelowOverItem = active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0

        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        //cloneDeep laf thuw vien
        const nextColumns = cloneDeep(prevColumn)
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        if (nextActiveColumn) {
          //xóa card khỏi column cũ
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDragingCardId)

          //cập nhật lại cardOrderIds
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }

        if (nextOverColumn) {
          //kiểm tra card đang kéo đã tồn tại ở column muốn chuyển hay chưa nếu có thì xóa nó trc
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDragingCardId)

          //Them card đang kéo vào vị tri index moi ở cột cần đến
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)

          //cập nhật lại cardOrderIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
          
        }


        return nextColumns
      })
    }
  }

  const handleDragEnd = (event) => {
    // console.log(event)
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {

      return
    }

    const { active, over } = event

    // Nếu kéo linh tinh(Ko tồn tại over hhoặc active) ra vị trí ko xác định thì null
    if (!active || !over) return

    if (active.id !== over.id) {
      const oldIndex = oderedColumnsState.findIndex(c => c._id === active.id)
      const newIndex = oderedColumnsState.findIndex(c => c._id === over.id)
      const dndOderedColumns = arrayMove(oderedColumnsState, oldIndex, newIndex)
      // const dndOderedColumnsIds = dndOderedColumns.map(c => c._id)

      setOderedColumnsState(dndOderedColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#223450' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={oderedColumnsState} />
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>

  )
}

export default BoardContent
