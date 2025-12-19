export interface Page {
    address: string,
    name: string
}

export const pageList : Page[] = [
    {
        address: "/",
        name: "Home"
    },
    {
        address: "/gallery",
        name: "Gallery"
    },
        {
        address: "/about",
        name: "About"
    }
]