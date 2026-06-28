from fastapi import FastAPI
from routers import interactions

app = FastAPI(title="AROGGO ML Drug Safety Service", version="0.1.0")
app.include_router(interactions.router, prefix="/api/interactions", tags=["interactions"])

@app.get("/health")
def health():
    return {"status": "ok"}
