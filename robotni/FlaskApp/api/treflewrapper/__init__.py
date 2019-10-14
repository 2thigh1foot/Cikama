import requests
import apiconfig

TREFLE_API_KEY = apiconfig.trefle_token

class APIKeyMissingError(Exception):
    pass

if TREFLE_API_KEY is None:
    raise APIKeyMissingError(
        "All methods require an API key. See"
        "trefle.io/reference for information on how to retrieve an"
        "authentication token from trefle."
    )

session = requests.Session()
session.params = {}
session.params['api_key'] = TREFLE_API_KEY

from .trefle import Trefle
