type ScoreTableType = { [key: number]: string[] }

const scoreTable: ScoreTableType = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

export function score(input: string | undefined): number {
  if (typeof input == 'undefined' || input === '') return 0

  let score = 0

  for (let i = 0; i < input.length; i++) {
    const letter = input[i].toUpperCase();

    Object.keys(scoreTable).forEach(k => {
      const key = Number(k)

      if (scoreTable[key].includes(letter)) {
        score += key
      }
    })

  }

  return score
}