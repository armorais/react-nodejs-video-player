import os

class EnvParser:
    def __init__(self):
        self.root_dir = os.getenv("ROOT_DIR")
        self.log_level = os.getenv('LOG_LEVEL', 'DEBUG')