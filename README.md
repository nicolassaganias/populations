# POBLACIONES

this is "poblaciones" wiki. WORK IN PROGRESS
Poblaciones (Life As We Know It) it's a project created by polbac && nicolás saganías to explore the limits and possibilities of generative programming + 2D and 3D representation. We pretend to create kind of a digital world that will be populated with autonomous entities or beings that will act as a seed: they will be born with some intrinsic characteristics and then evolve in time being affected not only by randomness but by the environment. we want to explore new ways of "living" different than humanity. entities will move freely around the map, interacting with others and satisfying their own needs such as belonging to a group, emancipate, reproduce, hang out, or whatever behaviours we can program. maybe they won't need to eat or shit. they won't have memory, so they will live in a constant present, just listening to their own senses. every time they meet another being, they will know it from cero, as if they did not meet before. they are gender-less and have unique shapes and colours (these are inherited or just given) and as older they get, the more spectacular they look. for interacting with others, these ents are surrounded by a "interaction zone" that acts kind of an aura, in which they reflect their actual state: weather if they are willing to mate, or to join a group or if they don't want interaction in that moment. respect for those feelings will rule this interactions, no insistence or violence will exist.
technical structure:
LAWKI is a real-time noSQL database hosted in MongoDB's Atlas Database. Afterwards, a web page, will be handling the graphic representation through openFrameworks or three.js.
for sound design we will be using SuperCollider or similar.
Behaviours
Each entity will have "behaviours" that will make them decide what to do next. These behaviours are temporal states that will fluctuate based on  a "seed" that is an interactive algorithm that, as a seed, gives the first piece of information and then starts living and changing.
(see more about seed and behaviours in "seeds and behaviours" in docs/tech)

## Documentación
### Tech

- [Infraestructura](docs/tech/INFREAESTRUCTURA.md)
