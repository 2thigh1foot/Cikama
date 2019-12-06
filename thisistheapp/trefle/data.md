# Necessary Data for Robotni


### TODO:
* Add this into a table
* Format Table sizing
* Find Placeholder picture
* 10 plants to showcase?
    * Add plants here later
* Data (Will figure out ordering later on):
    * Common Name (This will be the title)
    * Plant ID (Should I put this next to Common Name?)
    * Scientific Name (Maybe put this with common name too?)
    * Lifespan
    * Best seasons to grow
    * How it tends to grow (Habit)
    * Min Temp needed to grow
    * Does it need some shade?
    * Is this thing toxic?
    * Minimum amount of water
    * Maximum water before this thing dies
    * pH range of the soil
* What else sounds important? Look at plant more data later tonight. 
* Write function that returns length so jinja can parse it. Should I do that now? 
    * I think I got the logic working correctly. Check at hotel after studying
* Need to figure out how to remove map picture. Should I mass update database to remove any tag that has map? I can ask Elijah.
* Need to update index at some point. Remove jumbotron, put picture and some other things? Should it be a static page without a scroll? Might be cleaner that way. Ask team later tonight
* Code below has data we want to display and the relevant indexing
    
```python
for k in relevant_keys:
    main_data = plant_data[k]['main_species']
    growth_data = main_data['growth']
    print(f'''
    Common Name: {plant_data[k]['common_name'].title()}
    Lifespan: {main_data['specifications']['lifespan']}
    Best Time to Grow: {main_data['specifications']['growth_period']}
    Growth Habit: {main_data['specifications']['growth_habit']}
    Minimum Temperature: {growth_data['temperature_minimum']['deg_f']} F ({round(growth_data['temperature_minimum']['deg_c'],2)} C)
    Shade Tolerance: {growth_data['shade_tolerance']}
    Toxicity: {main_data['specifications']['toxicity']}
    Min Water Need: {growth_data['precipitation_minimum']['inches']} in ({round(growth_data['precipitation_minimum']['cm'],2)} cm)
    Watering Lim: {growth_data['precipitation_maximum']['inches']} in ({round(growth_data['precipitation_maximum']['cm'], 2)} cm)
    Soil pH Range: {growth_data['ph_minimum']} - {growth_data['ph_maximum']}''')
```
