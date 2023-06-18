import PropTypes from 'prop-types';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Module from './Module';

export default function SortableItem({id}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    cursor: isDragging ? 'grabbing' : 'grab',
    position: "relative"
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Module id={id} />
    </div>
  );
}


SortableItem.propTypes = {
    id: PropTypes.string.isRequired,
}