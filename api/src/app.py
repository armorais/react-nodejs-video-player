from schemas import Dir
from modules.dirs_browser import Browser
from fastapi import FastAPI

dirs_browser = Browser()

app = FastAPI()

@app.post("/dirs")
async def read_dir(dir: Dir):
    return await dirs_browser.list_dir(dir.path)
