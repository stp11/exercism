export class List<T> {
    list: any[]

    constructor(values: T[]) {
        this.list = values
    }

    public static create<T>(...values: T[]): List<T> {
        return new List(values)
    }

    append(arr: List<T>): List<T> {
        this.list = [...this.list, ...arr.list]
        return this
    }

    #length(list: T[]): number {
        let tail = list.slice(1)

        if (list.length === 0) return 0
        return 1 + this.#length(tail)
    }

    length(): number {
        return this.#length(this.list)
    }

    #map(list: T[], fn: (t: any) => any): any {
        let head = list[0]
        let tail = list.slice(1)

        if (list.length === 0) return []
        return [fn(head), ...this.#map(tail, fn)]
    }

    map(fn: (i: T) => T): T[] {
        return this.#map(this.list, fn)
    }

    #filter(list: T[], fn: (t: any) => any): any {
        let head = list[0]
        let tail = list.slice(1)

        if (list.length === 0) return []
        const result = fn(head) === true ? [head] : []
        return [...result, ...this.#filter(tail, fn)]
    }

    filter(fn: (i: T) => boolean): T[] {
        return this.#filter(this.list, fn)
    }

    reverse(list: T[] = this.list): T[] {
        let head = list[0]
        let tail = list.slice(1)

        if (list.length === 0) return []
        return [...this.reverse(tail), head]
    }

    concat(arr: List<T>): List<T> {
        for (let i = 0; i < arr.list.length; i++) {
            if (arr.list[i].list) {
                this.concat(arr.list[i])
            } else {
                this.list = [...this.list, arr.list[i]]
            }
        }

        return this
    }

    #reduce(list: T[], fn: (acc: T, el: T) => T, initial: T): T {
        let head = list[0]
        let tail = list.slice(1)

        if (list.length == 0) return initial
        return this.#reduce(tail, fn, fn(initial, head))
    }

    foldl(fn: (acc: T, el: T) => T, initial: T): T {
        return this.#reduce(this.list, fn, initial)
    }

    foldr(fn: (acc: T, el: T) => T, initial: T): T {
        return this.#reduce(this.list.reverse(), fn, initial)
    }

    forEach(callback: (i: T) => any): any {
        for (let i = 0; i < this.list.length; i++) {
            callback(this.list[i])
        }
    }
}