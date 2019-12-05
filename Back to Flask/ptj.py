import pickle
import json

with open('all_plants.p', 'rb') as fp:
    plants = pickle.load(fp)
    fp.close()

with open('all_plants.json', 'w') as fout:
    json.dump(plants, fout)

