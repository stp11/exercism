export function steps(count: number): number {
    if (count <= 0 || !Number.isInteger(count)) throw 'Only positive integers are allowed'

    let counter = 0

    function countSteps(x: number): number {
        if (x === 1) return counter

        counter += 1

        if (x % 2 === 0) {
            return countSteps(x / 2)
        } else {
            return countSteps(x * 3 + 1)
        }
    }

    return countSteps(count)
}