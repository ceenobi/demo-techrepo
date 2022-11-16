export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root
    this.onNoteSelect = onNoteSelect
    this.onNoteAdd = onNoteAdd
    this.onNoteEdit = onNoteEdit
    this.onNoteDelete = onNoteDelete
    this.root.innerHTML = `
        <div class="notes__sidebar">
            <button type="button" class="notes__add">Add Note</button>
            <div class="notes__list">
                
            </div>
        </div>
        <div class="notes__preview">
            <input type="text" class="notes__title" placeholder="New Note...">
            <textarea class="notes__body">Take note</textarea>
        </div>
        `
    const btnAddNote = this.root.querySelector('.notes__add')
    const inputTitle = this.root.querySelector('.notes_title')
    const inputBody = this.root.querySelector('.notes__body')

    btnAddNote.addEventListener('click', () => {
      this.onNoteAdd()
    })
  }
}
