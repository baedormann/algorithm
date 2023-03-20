function solution(my_string, num1, num2) {
    let str1 = my_string[num1];
    let str2 = my_string[num2];
    
    return my_string.substring(0, num1) + str2 + my_string.substring((num1 + 1), num2) + str1 + my_string.substring((num2 + 1), my_string.length);
}