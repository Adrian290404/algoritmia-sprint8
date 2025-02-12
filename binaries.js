function code(strng) {
    let result = "";
    for (let i = 0; i < strng.length; i++) {
        let digit = parseInt(strng[i], 10);
        let bin = digit.toString(2);
        let k = bin.length;
        let prefix = "0".repeat(k - 1) + "1";
        result += prefix + bin;
    }
    return result;
}
function decode(str) {
    let result = "";
    let i = 0;
    while (i < str.length) {
        let count = 0;
        while (str[i] === "0") {
            count++;
            i++;
        }
        i++; 
        let k = count + 1;
        let bin = str.slice(i, i + k);
        i += k;
        let digit = parseInt(bin, 2);
        result += digit.toString();
    }
    return result;
}