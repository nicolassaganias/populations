Behaviours:
- **Walking**. If the wish to move is greater than random, the entity will move somewhere.

```
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
```

- **Watching** and **Listening** are the willing of standing still or reducing the walking speed to just watch or listen. In these moments of calmness entities evolve.

- **Available** is the rate of availability for engaging in some kind of bond.

- **Horny** is the willing to engage in a sexual bond.

- **Create** is the willing to create something. This something will be decided by previous seeds, it can be a sound, an esculpture an image, whatever the entity feels like creating in that moment. This objetcs will remain in the world and other entities can watch/hear and modify them.

- **FreeWill** decide which behaviour will leave or take

```
current_behaviour {
    [behaviour]: {
        [state]: [value]
        expire: Date
    }
}
```