from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"],allow_credentials=True,
allow_methods=["*"],allow_headers=["*"])

class Person(BaseModel):
    name: str
    age: int

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/items/")
def update_person(person: Person):
    return person.json()
 # in javascript will need to run JSON.parse twice
