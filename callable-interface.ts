// Callable Interface
interface NumberGenerator {
    (num: number): number
}

interface GenANum {
    (num: number, gen: NumberGenerator): number
}

const generateANumber: GenANum = (factor: number, genFunc: NumberGenerator) => {
    return genFunc(factor)
}

console.log(generateANumber(5, (a:number) => a)) // 5

console.log(generateANumber(5, () => "Cheese")) //Cheese