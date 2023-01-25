const text = "Hello"
const textt = "Prayuth"

function recursiveReverseString(text: string) : string{
    if (text.length <= 0){ // Base Case
        return ''
    }
    return recursiveReverseString(text.slice(1)) + text.charAt(0)
}
console.log(recursiveReverseString('Hello'))
console.log(recursiveReverseString('Prayuth'))