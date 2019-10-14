import json
import requests
import apiconfig


class OWM(object):
    def __init__(self, key):
        self.key = key
        self.headers = {'Content-Type' : 'application/json',
                        'Authorization' : f'Bearer {self.key}'}

    def get_weather_info(self, zip_code):
        """
            Gets the weather based on zipcode entered.
            Still need to parse through all the data
        """

        url = f"https://api.openweathermap.org/data/2.5/weather?q={zip_code}&units=metric&appid={self.key}"

        response = requests.get(url, headers=self.headers)

        if response.status_code == 200:
            return json.loads(response.content.decode('utf-8'))
        else:
            return None





