from components.entity.Entity import Entity
from behaviours.Walking import Walking

class EntityManager:
    def __init__(self, entities):
        self.entities = entities
        
    def mutate(self):
        for i in range(len(self.entities)):
            createdEntity = Entity(self.entities[i])
            
            # Add the behaviours
            if "walking" in createdEntity.entity["seeds"]:
                createdEntity.addBehaviour(Walking)

            # Execute all behaviours
            self.entities[i] = createdEntity.life()
    
