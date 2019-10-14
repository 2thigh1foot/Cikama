from __future__ import print_function
from treflewrapper import Trefle
from owmwrapper import OWM

# plant = Trefle.get_plant_by_name('rose')
# rose_info = Trefle.plant_info(plant[0]['id'])
# 
# print(plant[0]['id'])
# for num, key, value in enumerate(rose_info.items()):
#     print(f'{num}. {key} - {value}')
zip = input('Enter zip code: ')
cm = OWM.get_weather_info(zip)
print(cm)
