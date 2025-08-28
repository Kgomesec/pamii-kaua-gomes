let cidades : string[] = ['Reykjavík', 'Osaka', 'Nairóbi', 'Toronto', 'São Paulo'];

function listarCidades(cidades: string[]): void {
    cidades.forEach((cidade) => {
        console.log(cidade);
    });
}

listarCidades(cidades);