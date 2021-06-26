import INoteInterface from "./INote";

export default interface IStorage { 
    save(note: INoteInterface): Promise<boolean>;
    update(note: INoteInterface): Promise<boolean>;
    delete(noteId: string): Promise<boolean>;
    getAll(): Promise<INoteInterface[]>;
}