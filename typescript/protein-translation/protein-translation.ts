const Codons = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
} as const

type Codon = keyof typeof Codons
type Protein = typeof Codons[Codon]

function transformCodon(str: Codon | string): Codon[] {
    let chunks: Codon[] = [];
 
    for (let i = 0; i < str.length; i += 3) {
        const codon: Codon = str.substring(i, i + 3) as Codon

        if (codon in Codons) {
           if (Codons[codon] === 'STOP') break
            chunks.push(codon);
        } else {
            throw 'Invalid codon'
        }
    }

    return chunks
}

export function translate(codon: Codon | string): Protein[] {
    const transformedCodon: Codon[] = transformCodon(codon)
    const proteinArr: Protein[] = []

    for (let i = 0; i < transformedCodon.length; i++) {
        proteinArr.push(Codons[transformedCodon[i]])
    }

    return proteinArr
}