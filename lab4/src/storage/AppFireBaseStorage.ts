import Note from "../Entities/Note";
import db from "../FirebaseInstance";
import INote, { IFirebaseDbNoteStorage } from "../interfaces/INote";
import Storage from "../interfaces/IStorage";

export default class AppFireBaseStorage implements Storage
{
    private db;

    constructor()
    {
        this.db = db;
    }

    //

    private loadNote(note: IFirebaseDbNoteStorage, id: string) {
        let newNote = new Note();
        newNote.Id = id;
        newNote.Title = note.title;
        newNote.Content = note.content;
        newNote.Pinned = note.pinned;
        newNote.CreatedAt = note.created_at;
        newNote.Color.HexColor = note.hex_color;
        return newNote;
    }

    private loadStorageNote(note: INote)
    {
        let attr: IFirebaseDbNoteStorage = {
            title: note.Title,
            content: note.Content,
            pinned: note.Pinned,
            created_at: note.CreatedAt,
            hex_color: note.Color.HexColor,
        };

        return attr;
    }

    //

    async save(note: INote) {

        try {
            const newNote = this.loadStorageNote(note);
            await this.db.collection('notes').add(newNote);
            return true;
        } catch (error) {}

        return false;
    }

    async update(note: INote) {
        try {
            await this.db.collection('notes').doc(note.Id).update(this.loadStorageNote(note));
            return true;
        } catch (error) {}
        
        return false;
    }

    async delete(noteId: string) {
        try {
            await this.db.collection('notes').doc(noteId).delete();
            return true;
        } catch (error) {}

        return false;
    }

    async getAll() {

        let res: INote[] = [];

        try {
            res = await this.db.collection('notes').get().then(response => {
            
                const notes: INote[] = [];
                response.docs.forEach(data => {
                    const note = data.data() as IFirebaseDbNoteStorage;
                    notes.push(this.loadNote(note, data.id));
                });
    
                return notes;
            });
        } catch (error) {}

        return res;
    }
}