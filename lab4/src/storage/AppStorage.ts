import Note from "../entities/Note";
import INote, { INoteStorage } from "../interfaces/INote";
import Storage from "../interfaces/IStorage";

export default class AppStorage implements Storage
{
    private _localStorageKey = "notes";

    //

    private getCurrentNotes() {
        return localStorage.getItem(this._localStorageKey);
    }

    private getCurrentNotesAsStorageObjects()
    {
        const notes = this.getCurrentNotes();
        if (notes !== null) {
            return JSON.parse(notes) as Array<INoteStorage>;
        }

        return [];
    }

    private saveInStorage(currents: INoteStorage[]) {
        localStorage.setItem(this._localStorageKey, JSON.stringify(currents));
    }

    private loadNote(note: INoteStorage) {
        let newNote = new Note();
        newNote.Id = note.id;
        newNote.Title = note.title;
        newNote.Content = note.content;
        newNote.Pinned = note.pinned;
        newNote.CreatedAt = note.createdAt;
        newNote.Color.HexColor = note.hexColor;
        return newNote;
    }

    private loadStorageNote(note: INote)
    {
        let attr: INoteStorage = {
            id: note.Id,
            title: note.Title,
            content: note.Content,
            pinned: note.Pinned,
            createdAt: note.CreatedAt,
            hexColor: note.Color.HexColor,
        };

        return attr;
    }

    //

    async save(note: INote) {
        
        note.Id = String(Date.now());
        let attr = this.loadStorageNote(note);
        let items = this.getCurrentNotesAsStorageObjects();
        items.push(attr);

        this.saveInStorage(items);
        return true;
    }

    async update(note: INote) {
        
        let items = this.getCurrentNotesAsStorageObjects();
        for(let i = 0; i < items.length; i++) {
            if (items[i].id === note.Id) {
                items[i] = this.loadStorageNote(note);
                this.saveInStorage(items);
                return true;
            }
        }

        return false;
    }

    async delete(noteId: string) {
        
        let items = this.getCurrentNotesAsStorageObjects();
        for(let i = 0; i < items.length; i++) {
            if (items[i].id === noteId) {
                items.splice(i, 1);
                this.saveInStorage(items);
                return true;
            }
        }

        return false;
    }
    
    async getAll() {
        let items = this.getCurrentNotesAsStorageObjects();
        let notes: INote[] = [];

        for(let i = 0; i < items.length; i++) {
            let attr = items[i];
            notes.push(this.loadNote(attr));
        }

        return notes;
    }
}