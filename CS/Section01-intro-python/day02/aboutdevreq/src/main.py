import sys
from analyzer import total_sales
from importer import import_from_json


def main():
    path_file = 'data/games.json'
    file_data = import_from_json(path_file)
    print(total_sales(file_data))

if __name__ == "__main__":
    main()