interface IRational {
    numerator: number
    denominator: number
}

export class Rational {
    numerator: number
    denominator: number

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator
        this.denominator = denominator
    }

    #gcd(a: number, b: number): number {
      // Everything divides 0
      if(b == 0) {
        return a;
      }
  
      return this.#gcd(b, a % b);
    }

    add(rational: Rational): IRational {
        const numerator = this.numerator * rational.denominator + this.denominator * rational.numerator
        const denominator = this.denominator * rational.denominator

        return new Rational(numerator, denominator).reduce()
    }

    sub(rational: Rational): IRational {
      const numerator = this.numerator * rational.denominator - this.denominator * rational.numerator
      const denominator = this.denominator * rational.denominator
      
      return new Rational(numerator, denominator).reduce()
    }

    mul(rational: Rational): IRational {
      return new Rational(this.numerator * rational.numerator, this.denominator * rational.denominator).reduce()
    }
  
    div(rational: Rational): IRational {
      return new Rational(this.numerator * rational.denominator, this.denominator * rational.numerator).reduce()
    }

    abs() {
      return new Rational(Math.abs(this.numerator), Math.abs(this.denominator)).reduce()
    }

    exprational(exp: number): IRational {
      if(exp < 0){
        return new Rational(Math.pow(this.denominator, exp*-1), Math.pow(this.numerator, exp*-1)).reduce()
      }
      return new Rational(Math.pow(this.numerator, exp), Math.pow(this.denominator, exp)).reduce()
    }

    expreal(n: number): number {
      return n ** (this.numerator / this.denominator)
    }

    reduce(): IRational {
        const gcd = this.#gcd(this.numerator, this.denominator);
        const numerator = this.numerator / gcd
        const denominator = this.denominator / gcd
      
        if(denominator < 0 ) {
          return { numerator: numerator * -1, denominator: denominator * -1 }
        } else {
          return { numerator, denominator }
        }
    }
}