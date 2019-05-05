#  九九乘法表
#  外层循环控制行数
for i in range(1, 10): # i代表行数
    for j in range(1, 10): #  j代表内层控制循环的列数
        if i >= j:
            print("{0} x {1} = {2}".format(i, j, i*j), end = "  ")
    print()



# 冒泡排序：对数组进行从大到小排序显示
arr = [1,23,00,234,12,666]  #  这里是比较的数字组成的一个数组；
# 比较次数为：数组中数字个数-1
for a in range(1, len(arr)):  #  第一层循环比较次数--比较的次数
    #  第二层循环比较的次数
    for b in range(0, len(arr) - a):
        # 两个数比较取最大的数字
        #  如果前一个数arr[j]小于后一个数arr[j+1]，则两个数交换位置-->借助第三个暂时变量tmp
        if arr[b] < arr[b+1]:
            tmp = arr[b]
            arr[b] = arr[b+1]
            arr[b+1] = tmp
print(arr)


