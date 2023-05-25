lista = ["um", "dois", "tres", 1, 2, 3]
tupla = tuple(lista)

print(tupla)

for item in tupla:
    print(item)

# lista_sortedError = lista.sort()
# print(lista_sortedError) // breaks, can't sort instances with int and str