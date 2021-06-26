import { firebaseConfig } from "./config";
import NoteCreator from "./controllers/NoteCreator";
import Notes from "./controllers/Notes";
import INote from "./interfaces/INote";
import INoteController from "./interfaces/INoteController";
import IStorage from "./interfaces/IStorage";
import AppFireBaseStorage from "./storage/AppFireBaseStorage";
import AppStorage from "./storage/AppStorage";

export default class App implements INoteController {

    private _storageType = "";

    noteCreator: NoteCreator;
    concrete: IStorage;

    constructor(storageType = "") {

        if (storageType !== "") {
            this._storageType = storageType;
        }

        this.noteCreator = new NoteCreator(this);
        this.concrete = this.getStorageService();
    }

    //

    public getStorageType(): string
    {
        if(this._storageType !== "") {
            return this._storageType;
        }

        return firebaseConfig.storage;
    }

    public getStorageService(): IStorage {

        const type = this.getStorageType();

        if (type === "firebase") return new AppFireBaseStorage();
        return new AppStorage();
    }

    //

    public async createNote(note: INote) {
        let result = await this.concrete.save(note);
        if (result) {
            this.renderNotes()
        }

        return result;
    }

    public async updateNote(note: INote) {
        let result = await this.concrete.update(note);
        if (result) {
            this.renderNotes()
        }

        return result;
    }

    public async deleteNote(noteId: string) {
        let result = await this.concrete.delete(noteId);
        if (result) {
            this.renderNotes()
        }
        
        return result;
    }

    //

    public async getAllNotes()
    {
        return await this.concrete.getAll(); 
    }

    public async renderNotes()
    {
        const notes = new Notes(await this.getAllNotes(), this);
        notes.render();
    }
}