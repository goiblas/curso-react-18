import {useState} from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import SortableModule from './components/SortableModule';
import Grid from './components/Grid';

export default function App() {
  const [items, setItems] = useState([
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event) {
    const {active, over} = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(({id}) => id === active.id);
        const newIndex = items.findIndex(({id}) => id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  
  return (
    <div className='container'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map(({id}) => id)}
          strategy={rectSortingStrategy}
        >
          <Grid>
            {items.map(({id}) => (
              <SortableModule key={id} id={id} />
            ))}
          </Grid>
        </SortableContext>
      </DndContext>
    </div>
  );

  
}
