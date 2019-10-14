import json
import requests
import apiconfig

api_token = apiconfig.trefle_token
base_url = 'https://trefle.io/api/'

headers = {'Content-Type' : 'application/json',
           'Authorization' : f'Bearer {api_token}'}

class Trefle(object):
    def __init__(self, key):
        self.key = key

    @staticmethod
    def get_plant_by_name(common_name):

        api_url = f'{base_url}plants/'
        params = {
                    'common_name': common_name.lower()
                 }
        response = requests.get(api_url, headers=headers, params=params)

        if response.status_code == 200:
            return json.loads(response.content.decode('utf-8'))
        else:
            return None

    @staticmethod 
    def plant_info(id):
        api_url = f'{base_url}plants/{id}'
        response = requests.get(api_url, headers=headers)

        if response.status_code == 200:
            return json.loads(response.content.decode('utf-8'))
        else:
            return None

