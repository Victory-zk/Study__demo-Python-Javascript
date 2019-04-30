//  九九乘法表
//  外层循环控制行数
for (var i = 1; i <= 9; i++) {//  i代表行数
    var str = ""
    //  内层控制循环的列数
    for (var j = 1; j <= i; j++) {
        str += i + "x" + j + "=" + i*j + " "
    }
    console.log(str)
}


//  冒泡排序：对数组进行从大到小排序显示
var arr = [36, 13, 5, 100, 32, 14]  //  这里是比较的数字组成的一个数组；
//  比较次数为：数组中数字个数-1
//  第一层循环比较次数--比较的次数
for (var i = 1; i < arr.length - 1; i++) {
    //  第二层循环比较的次数
    for (var j = 0; j < arr.length-i; j++) {
        //  两个数比较取最大的数字
        //  如果前一个数arr[j]小于后一个数arr[j+1]，则两个数交换位置-->借助第三个暂时变量tmp
        if (arr[j] < arr[j+1]) {
            var tmp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = tmp
        }
    }
}
console.log(arr)