from random import choice,random


class Walking:
    def __init__(self, entity):
        self.speed = 1
        self.entity = entity

    def render(self):
        walkingRate = self.entity["seeds"]["walking"]

        # if the wish to move is grater 
        # than random will move the entity
        if (walkingRate >= random()):
            position = self.entity['position']
            position['x'] = choice([self.moveLeft, self.moveRight])(position['x'])
            position['y'] = choice([self.moveTop, self.moveBottom])(position['y'])
            self.entity['position'] = position

        return self.entity
    
    def moveTop(self, y):
        
        return y - self.speed
    
    def moveBottom(self, y):
        return y + self.speed

    def moveLeft(self, x):
        return x - self.speed
    
    def moveRight(self, x):
        return x + self.speed