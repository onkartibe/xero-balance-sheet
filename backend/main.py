from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

XERO_API_URL = "http://mock-xero-api:3000/api.xro/2.0/Reports/BalanceSheet"

@app.get("/api/balance-sheet")
async def get_balance_sheet():
    print('I am here can you read me')
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(XERO_API_URL)
            response.raise_for_status()
            return response.json()
    except httpx.RequestError as exc:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {exc}")
    except httpx.HTTPStatusError as exc:
        raise HTTPException(status_code=exc.response.status_code, detail=f"Error response {exc.response.status_code}: {exc.response.text}")
