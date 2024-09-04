type AllergenType = 'eggs' | 'peanuts' | 'shellfish' | 'strawberries' | 'tomatoes' | 'chocolate' | 'pollen' | 'cats'

const ALLERGENT_SCORE_MAP: { [K in AllergenType]: number } = {
    'eggs': 1,
    'peanuts': 2,
    'shellfish': 4,
    'strawberries': 8,
    'tomatoes': 16,
    'chocolate': 32,
    'pollen': 64,
    'cats': 128
};

const ALLERGENT = Object.keys(ALLERGENT_SCORE_MAP) as AllergenType[];

export class Allergies {
    constructor(private allergenIndex: number) { }

    public list(): AllergenType[] {
        return ALLERGENT.filter((_, i) => this.allergenIndex >> i & 1) as AllergenType[];
    }

    public allergicTo(allergen: AllergenType): boolean {
        return this.list().includes(allergen)
    }
}
