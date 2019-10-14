import apiconfig
import json
import replacements
import requests

api_token = apiconfig.trefle_token


class Trefle(object):
    def __init__(self, key):
        self.key = key
        self.url = 'https://trefle.io/api/'
        self.headers = {'Content-Type' : 'application/json',
                        'Authorization' : f'Bearer {key}'}

    # Get plant info based on common name
    def get_plant_by_name(self, common_name):
        """
            We are mainly using this function to get the id
            of a plant. If you see any other important data, 
            lemme know
        """

        api_url = f'{self.url}plants/'
        params = {
                    'common_name': common_name.lower()
                 }
        response = requests.get(api_url, headers=self.headers, params=params)

        if response.status_code == 200:
            return json.loads(response.content.decode('utf-8'))
        else:
            return None

    def plant_info(self, id):
        """
            We use this to get the specific information
            for whatever plant we need. 
        """

        api_url = f'{self.url}plants/{id}'
        response = requests.get(api_url, headers=self.headers)

        if response.status_code == 200:
            return json.loads(response.content.decode('utf-8'))
        else:
            return None

    @staticmethod
    def check_for_name(name):
        """
           Replaces name so we can find other names for plants
           will add to the dictionary later as I think of more
           test names for plants
        """

        if name in replacements.r.keys():
            name = replacements.r[name]
            return name

