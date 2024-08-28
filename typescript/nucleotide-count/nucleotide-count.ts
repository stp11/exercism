interface Nucleotide {
  'A': number,
  'C': number, 
  'G': number,
  'T': number,
}
type NucleotideType = keyof Nucleotide 

export function nucleotideCounts(nucleotide: string): Nucleotide {
  const obj: Nucleotide = {
    'A': 0,
    'C': 0,  
    'G': 0,
    'T': 0
  }
 
  for (let index = 0; index < nucleotide.length; index++) {
    const element = nucleotide[index] as NucleotideType
 
    if (element in obj) {
      obj[element] = obj[element] += 1 
    } else {
      throw new Error('Invalid nucleotide in strand')
    }
  }

  return obj
}