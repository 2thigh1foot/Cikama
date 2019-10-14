import json
import requests
import apiconfig

api_token = apiconfig.owm_token

headers = {'Content-Type' : 'application/json',
           'Authorization' : f'Bearer {api_token}'}

class OWM(object):
    def __init__(self, key):
        self.key = key

    @staticmethod
    def get_weather_info(zip_code):
        url = f"https://api.openweathermap.org/data/2.5/weather?q={zip_code}&units=metric&appid={api_token}"

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            return json.loads(response.content.decode('utf-8'))
        else:
            return None





