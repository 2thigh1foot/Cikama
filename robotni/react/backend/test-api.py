import requests


r = requests.get("http://localhost:5000/users")

user_body = {
	'username': 'kemery',
	'password': 'password12345',
	'location': 91763,
	'plants': ['poppy', 'fern']
}

r = requests.post("http://localhost:5000/users/add", data=user_body)