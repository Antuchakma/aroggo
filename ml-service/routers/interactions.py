from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class InteractionRequest(BaseModel):
    patientId: str
    medicines: list[str]
    allergies: list[str] = []
    conditions: list[str] = []
    currentMedications: list[str] = []


class InteractionFlag(BaseModel):
    drugA: str
    drugB: str
    severity: str
    explanation: str


class AllergyFlag(BaseModel):
    drug: str
    allergen: str
    severity: str
    explanation: str


class ConditionFlag(BaseModel):
    drug: str
    condition: str
    severity: str
    explanation: str


class InteractionResponse(BaseModel):
    interactions: list[InteractionFlag] = []
    allergyFlags: list[AllergyFlag] = []
    conditionFlags: list[ConditionFlag] = []


@router.post("/check", response_model=InteractionResponse)
def check_interactions(request: InteractionRequest) -> InteractionResponse:
    return InteractionResponse()
