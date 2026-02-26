import joblib
import numpy as np
MODEL_PATH = './model.joblib'
try:
  model = joblib.load(MODEL_PATH)
except Exception:
  model = None


def predict_from_row(row):
# row: dict with fields
  import pandas as pd
  df = pd.DataFrame([{
      'num_patients': row.get('num_patients',0),
      'pct_female': (row.get('num_female',0) / max(1,row.get('num_patients',1))),
      'avg_age': row.get('avg_age',30),
      'symptom_fever': 1 if 'fever' in (row.get('top_symptoms','').lower()) else 0,
      'stock_shortage': 1 if row.get('stock_shortage') else 0,
  }])
  if model is None:
     return 0.0
  proba = model.predict_proba(df)[:,1][0]
  return float(proba)