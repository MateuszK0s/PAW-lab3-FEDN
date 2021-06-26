import ColorInterface from "./IColor";

export default interface INote {
    Id: string;
    Title: string;
    Content: string;
    Pinned: boolean;
    CreatedAt: (number | null);
    Color: ColorInterface;
}

export interface INoteStorage {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    createdAt: (number | null);
    hexColor: string;
}

export interface IFirebaseDbNoteStorage {
    title: string;
    content: string;
    pinned: boolean;
    created_at: (number | null);
    hex_color: string;
}