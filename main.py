from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
   return "Hello World!"

@app.get("/{name}") 
async def hello_world(name): 
    return "Hello "+name
