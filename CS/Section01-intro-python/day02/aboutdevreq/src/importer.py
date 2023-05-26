import json

def import_from_json(file_path: str):
    try:
        with open(file_path) as file:
            return json.load(file)
    except FileNotFoundError:
        # print('Arquivo inexistente')
        # raise ValueError(f'Arquivo inexistente: {file_path}')
        raise FileNotFoundError(f'Arquivo inexistente: {file_path}')