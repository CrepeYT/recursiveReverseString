const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(`original: ${numbers2}`)

function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        let holding = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        arr[i] = arr[minIndex]
        arr[minIndex] = holding
    }
}
selectionSort(numbers2)
console.log(`selectionSort: ${numbers2}`)