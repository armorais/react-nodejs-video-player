import os
from env_parser import EnvParser
env_config = EnvParser()

class Browser:
    def __init__(self) -> None:
        self.root_dir = env_config.root_dir

    async def list_dir(self, path) -> list:
        response = {"empty":"true"}
        try:
            dir_list = os.listdir(os.path.join(self.root_dir, path))
            response["empty"] = "false"
            response["dir"] = dir_list
        except Exception as e:
            pass

        return response