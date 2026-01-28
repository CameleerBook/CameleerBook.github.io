const PREFACE1 = `
    There is a Latin saying that translates to "To err is human", and software
    development is no exception. While making errors is human nature, even 
    minor programming errors in safety-critical software can lead to 
    catastrophic outcomes. Given our ever-increasing dependency on software, 
    in general, we must strive to increase the fidelity of safety-critical 
    software.
`

const PREFACE2 = `
    Unit testing by itself is insufficient to cover the unimaginable number of 
    possible states in any industrial-grade software. We must resort to Formal 
    Verification for better reliability guarantees. This field offers two main
    families of tools: Proof assistants and automated tools. The former are
    quite powerful, yet require considerable user interaction and expertise,
    whereas the latter provide a more user-friendly experience, at the cost of
    some proving capabilities.
`

const PREFACE3 = `
    In this book, we introduce Formal Verification through Cameleer, an 
    automated verification tool for OCaml programs. Students will learn to
    prove the implementations of well-known algorithms and data structures.
`

export const prefaceParagraphs = [PREFACE1, PREFACE2, PREFACE3]

export type Paragraph = {
    title: string,
    paragraphs: string[],
}

export const aboutPageParagraphs : Paragraph[] = [
    {
        title: "The authors",
        paragraphs: [
            `Pedro Gasparinho - Computer Science Master's student at NOVA 
            School of Science and Technology (NOVA SST).`,
            `Mário Pereira - Assistant Professor at NOVA SST.`
        ],
    },
    {
        title: "The book and the website",
        paragraphs: [
            `"Learn Verification with Cameleer" is a project stemming from Pedro 
            Gasparinho's Master's dissertation, which is also advised by Prof. 
            Dr. Mário Pereira.`,
            `This work is inspired by several algorithm design textbooks, most
            notably "Apprendre à Programmer avec OCaml" by Sylvain Conchon and
            Jean-Christophe Filliâtre, and "Algorithms" (4th edition) by Robert 
            Sedgewick and Kevin Wayne.`
        ],
    },
    {
        title: "Acknowledgments",
        paragraphs: [`
            A special thanks to the Cameleer team for important feedback during
            the development of this book and website, in particular, Ion 
            Chirica, Tiago Soares, João Nini, Gonçalo Duarte, Keiko Tiago, Rui 
            Xavier, Tiago Meirim.            
        `],
    },
]