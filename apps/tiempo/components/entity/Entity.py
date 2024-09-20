class Entity:
    def __init__(self, entity):
        self.entity = entity
        self.behaviours = []
    
    ####################################
    # Method call from all behavours
    # to add a method to be invoke
    # on life() 
    def addBehaviour(self, BehaviourClass):
        self.behaviours.append(BehaviourClass)

    ####################################
    # Method that will create
    # life on entity. Will call all the
    # behavours related
    def life(self):
        for behaviour in self.behaviours:
            instanceBehaviour = behaviour(self.entity)
            self.entity = instanceBehaviour.render()
            print(self.entity)
        
        return self.entity