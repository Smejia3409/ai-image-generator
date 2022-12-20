import os
import openai
import requests

openai.api_key = os.getenv("OPEN_AI_KEY")
# print(openai.Model.list())



def create_image(propmt):
    response = openai.Image.create(
        prompt=propmt,
        n=1,
        size="1024x1024"
    )
    image_url = response['data'][0]['url']
    return image_url

print(create_image("a city on fire"))

