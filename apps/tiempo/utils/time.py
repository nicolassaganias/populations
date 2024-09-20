import asyncio

# Recibe una función {callback} 
# que se ejecutará cada {seconds} segundos

def async_call_later(callback, seconds):
    async def schedule():
        await asyncio.sleep(seconds)

        if asyncio.iscoroutinefunction(callback):
            await callback()
        else:
            callback()

    asyncio.ensure_future(schedule())