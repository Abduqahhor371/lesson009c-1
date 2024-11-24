//  1-misol
let result = [];
{
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) result.push(i);
    }
    return result;
}
// 2-misol
{
    let result = [];
    for (let i = 10; i < a; i += 10) {
        result.push(i);
    }
    return result;
}
// 3-misol
{
    let result = [];
    for (let i = 1; i <= a; i++) {
        result.push(i * i);
    }
    return result;
}
// 4-misol
{
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}
// 5-misol
{
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1 && str[i] === '?') continue;
        result += str[i];
    }
    return result;
}

// 6-misol
{
    let result = [];
    for (let i = 0; i < a; i++) {
        result.push(a);
    }
    return result;
}
// 7-misol
{
    let falsyValues = [false, 0, "", null, undefined, NaN];
    for (let i = 0; i < falsyValues.length; i++) {
        if (value === falsyValues[i]) return false;
    }
    return true;
}