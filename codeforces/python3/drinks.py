limit = int(input())
values = input().split()
sum = 0
for x in values:
    val = int(x)
    sum = sum + val
    
print(sum / len(values))