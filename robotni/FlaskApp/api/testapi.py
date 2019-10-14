from __future__ import print_function
from treflewrapper import Trefle
from owmwrapper import OWM
import apiconfig

# Plant data testing
trefle = Trefle(apiconfig.trefle_token)
name = input('What plant are you looking for: ')
name = trefle.check_for_name(name)
plant = trefle.get_plant_by_name(name)
if len(plant) != 0:
    plant_info = trefle.plant_info(plant[0]['id'])
    print(plant_info)
else:
    print("Your plant couldn't be found")

# Weather data testing
# weather = OWM(apiconfig.owm_token)
# zip = input('Enter zip code: ')
# weather_info = weather.get_weather_info(zip)
# print(weather_info)
