export interface Page {
    address: string,
    name: string
}

export const HomePage = {
    address: "/",
    name: "Home"
}

export const GalleryPage = {
    address: "/gallery",
    name: "Gallery"
}

export const AboutPage = {
    address: "/about",
    name: "About"
}

export const pageList : Page[] = [
    HomePage, GalleryPage, AboutPage
]

export function getProofLink(link: string) {
    return `/proofs/${link}.ml.html`
}