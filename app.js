//1
function createText(text) {
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        newText += text[(text.length - 1) - i]
    }
    return newText
}

console.log(createText('Привет'))

//2
function numbers(number) {
    return number.reduce((f, r) => (f + r)) / number.length;
}

console.log(numbers([4, 5, 3, 5, 344, 54, 23, 45]));
