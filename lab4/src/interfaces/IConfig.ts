export default interface IConfig {
    storage: "local" | "firebase",
    firebase: {
        apiKey: string,
        authDomain: string,
        projectId: string,
        storageBucket: string,
        messagingSenderId: string,
        appId: string,
    },
}