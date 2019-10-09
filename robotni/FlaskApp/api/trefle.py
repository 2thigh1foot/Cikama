import json
import requests
import apiconfig

api_token = apiconfig.trefle_token
base_url = 'https://trefle.io/api/'

headers = {'Content-Type' : 'application/json',
           'Authorization' : f'Bearer {api_token}'}

def get_account_info():

    api_url = f'{base_url}plants/'
    params = {'common_name': 'rose'
             }

    response = requests.get(api_url, headers=headers, params=params)
    

    if response.status_code == 200:
        return json.loads(response.content.decode('utf-8'))
    else:
        return None

species_info = get_account_info()

if species_info is not None:
    print('Species: ')
    print(species_info)
    print()
else:
    print('[!] Request Failed')
