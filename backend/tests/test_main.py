from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_balance_sheet():
    response = client.get("/api/balance-sheet")
    assert response.status_code == 200
    assert "Reports" in response.json()
