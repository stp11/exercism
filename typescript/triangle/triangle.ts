export class Triangle {
    sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    get isSumOfSidesCorrect(): boolean {
      const [a, b, c] = this.sides;
      
      return (a + b > c && b + c > a && a + c > b)
    }

    get isEquilateral(): boolean {
      const [a, b, c] = this.sides;
      return a === b && b === c && a > 0;
    }

    get isIsosceles(): boolean {
        const [a, b, c] = this.sides;
        return (a === b || b === c || a === c) && new Triangle(a,b,c).isSumOfSidesCorrect;
    }

    get isScalene(): boolean {
        const [a, b, c] = this.sides;
        return a !== b && b !== c && a !== c && new Triangle(a,b,c).isSumOfSidesCorrect;
    }
}