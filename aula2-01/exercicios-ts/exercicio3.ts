interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let livros: Livro[] = [
    { titulo: '1984', autor: 'George Orwell', anoPublicacao: 1949 },
    { titulo: 'To Kill a Mockingbird', autor: 'Harper Lee', anoPublicacao: 1960 },
    { titulo: 'The Great Gatsby', autor: 'F. Scott Fitzgerald', anoPublicacao: 1925 }
];

function exibirLivros(livros: Livro[]): void {
    livros.forEach((livro) => {
        console.log(`${livro.titulo} - ${livro.autor} (${livro.anoPublicacao})`);
    });
}

exibirLivros(livros);