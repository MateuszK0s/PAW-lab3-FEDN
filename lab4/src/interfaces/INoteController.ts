import INote from "./INote";

export default interface INoteController {
    createNote(note: INote): Promise<boolean>;
    updateNote(note: INote): Promise<boolean>;
    deleteNote(noteId: string): Promise<boolean>;
}