import itertools

arr = []
for i in range(9) :
	arr.append(int(input()))
for i in list(itertools.combinations(arr, 7)) :
    if sum(i) == 100 :
        for j in i :
            print(j)
