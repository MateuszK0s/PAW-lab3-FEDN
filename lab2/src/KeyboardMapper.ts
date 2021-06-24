import { IMapper } from "./interfaces/IKeybord";

export default class KeyboardMapper {
    static getMapper(): IMapper {
        return {
            '1': "tink",
            '2': "kick",
            '3': "clap",
            '4': "boom",
            '5': "ride",
            '6': "hihat",
            '7': "openhat",
            '8': "tom",
            '9': "snare",
        };
    }
}