from dotenv import load_dotenv
import openai
import os

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')

def gpt_response(prompt):
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages =[
            {"role": "system", "content": "You are a therapist, who helps drug addict to overcome from their addiction"},
            {"role": "user", "content": "I want to get out of my addiction"},
        ],
        temperature=1,
        max_tokens=200
    )
    prompt_response = response.choices[0].message.content
    print(prompt_response)
    return prompt_response