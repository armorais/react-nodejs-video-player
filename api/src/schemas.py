import pydantic 
from pydantic import BaseModel
from typing import Text

class Dir(BaseModel):
    path: Text = pydantic.Field(default=None, example=None, description='Path to list')