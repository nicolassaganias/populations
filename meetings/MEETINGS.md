# Meetings

## 7/7/2021

### Definiciones

- Vamos a usar `python` para el live de las poblaciones
- Cada indivudio va a tener ciertos parámetros que son modificables aleatoreamente y por el contexto donde se desarrollen
- Los contextos se van a definir de una forma aleatoria entre ciertos parámetros pre-definidos.
- Ver la posibilidad de que haya un pseudo-aprendizaje a nivel individual/colectivo.

### Ideas

- Posibilidad de generar imágenes automáticamente y publicarlas
- Ver si usamos openframeworks, threejs, processing
- Estadísticas (tasa mortalidad, natalidad, etc)
- Pensar en etapas/releases/etc
- Pensar en la consciencia colectiva
- Palanca para subir/bajar velocidad

### Tareas

### nico
- Pensar características de los individuos y de los contextos
- 

### pol
- armar un hola mundo con python + mongo
- conseguir un servicio de hosting con python y una base de datos mongodb


## Próxima meet 12/7/2021 (15ARG - 20ESP)

### Dudas
- Código en esp/eng?
- Para la posición usamos x,y o lat,long?

### Meeting 19/7:

- Debatimos sobre el atributo `current behaviour`: qué está haciendo y hace cuanto.
- Hablamos sobre hacer un comparador general tipo `behaviourDecision`.
- Hacer un atributo más en Mongodb que sea el current behaviour y cuando expira pregunta denuevo.
- Habrán behaviours excluyentes y no excluyentes por ej(caminar y frenar son excluyentes porque si decido frenarme, dejaré de caminar para hacerlo.)
- Hablamos de hacer parametros globales y locales.
- Crear una nueva coleccion en mongo para el terreno 
- Poder “plantar” objetos en el mundo y que estos sigan su desarrollo independientemente de su creador/a.
- Se hizo una API en Node que recibe ticks de `main.py` y del mapa ya sea 2D o 3D y que actualiza los datos recibidos de mongo.
- Se hizo flow diagram

### Tareas:
- Hacer la newClass Entity donde estarán las características de cada entidad
- Comenzar a hacer mapa 2D
