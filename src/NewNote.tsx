import { NoteData, Tag } from "./App";
import NewForm from "./components/NewForm";
type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
};
const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NewForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
