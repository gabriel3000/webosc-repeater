export {}

// make declarations for jpg, png, and svg files
// so that TypeScript knows how to import them
// (otherwise, it will throw an error)
global {
    declare module '*.jpg' {
        const content: string;
        export default content;
    }
    declare module '*.png' {
        const content: string;
        export default content;
    }
}