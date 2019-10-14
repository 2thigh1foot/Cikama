"""
This raises Exception errors if the API key is missing.
It then starts a session using the API key. 
"""

import requests
import apiconfig

OWM_API_KEY = apiconfig.owm_token

class APIKeyMissingError(Exception):
    pass

if OWM_API_KEY is None:
    raise APIKeyMissingError(
        "All methods require an API key. See"
        "openweathermap.com/api for information on how to retrieve an"
        "authentication token from Open Weather Maps."
    )

session = requests.Session()
session.params = {}
session.params['api_key'] = OWM_API_KEY

from .weather import OWM
