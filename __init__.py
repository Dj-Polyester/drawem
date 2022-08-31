from importlib import import_module
import os

dirName = os.path.dirname(__file__)

for filename in os.listdir(dirName):
    filenameExt = filename.split(".")
    filenameNoExt = filenameExt[0]
    if len(filenameExt) == 2 and filenameNoExt != "__init__" and filenameExt[1] == "py":
        import_module(f".{filenameNoExt}", __package__)
