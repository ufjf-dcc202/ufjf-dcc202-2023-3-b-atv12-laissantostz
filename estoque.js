let estoque = {
    'joao': [],
    'maria': []

};

function getEstoque() {
    return structuredClone(estoque);
}

export {getEstoque};