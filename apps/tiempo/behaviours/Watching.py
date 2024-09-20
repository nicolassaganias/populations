from random import choice,random
from behaviours.Walking import Walking,walkingRate

class Watching:
    def __init__(self, entity):
        # the entity stays still, just watching
        # also, if there is something near, it can trigger
        # the "curiosity" and so, the watching
        # add "curiosity" seed

        self.speed = 0 
        self.entity = entity

    def render(self):
        watchingRate = self.entity["seeds"]["watching"]

        # if the wish to slow down
        # and just watch is greater 
        # than the willing of walking
        # it will just calm down and watch

        if (watchingRate >= walkingRate): 
            self.slowDown()
    
    def slowDown(self):
        # que agarre position "x" y position "y" y las vaya bajando hasta 0
        self.entity['speed']['x'] -= 1
        self.entity['speed']['y'] -= 1

        # hacer un if que si es positivo va para abajo y si es negativo va para arriba y lo mismo en y
        if(self.entity['speed']['x'] > 0):
            self.entity['speed']['x'] -= 1
        
        if(self.entity['speed']['y'] > 0):
            self.entity['speed']['y'] -= 1