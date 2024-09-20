import time, threading
import datetime
import config.database as database_config
import config.time as time_config
from pymongo import MongoClient
from bson.objectid import ObjectId
import time
from termcolor import colored
from manager.EntityManager import EntityManager
from random import random

# instanciamos el cliente de Mongo
client = MongoClient(database_config.mongodb['connection_uri'])

# instanciamos la base de datos
db = client[database_config.mongodb['database_name']]

# instanciamos la colección
collection = db[database_config.mongodb['collection_name']]


def tick():
    entities = list(collection.find())
    
    entityManager = EntityManager(entities)
    entityManager.mutate()
    
    for modifiedEntity in entityManager.entities:
        collection.update_one(
            {
                "_id" : ObjectId(modifiedEntity['_id'])
            },
            {
                "$set": modifiedEntity
            }
        )
    

""" entity = {
    "position": {
        "x": 0,
        "y": 0,
    },
    "color": 0xFF00FF,
    "birthdate": datetime.datetime.utcnow(),
    "seeds": {
        "grow": random()
    }
}

collection.insert_one(entity) """



# inicia thread que se reproduce infinitamente (invoca a tick())
while True:
    tick()
    time.sleep(time_config.time['sleep'])



# codigo para crear una entidad