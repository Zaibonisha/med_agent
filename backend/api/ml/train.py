import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
import joblib


# generate or read sample CSV


df = pd.read_csv('../../data/sample_reports.csv')
# simple feature engineering


df['pct_female'] = df['num_female'] / df['num_patients'].replace(0,1)
df['symptom_fever'] = df['top_symptoms'].str.contains('fever').astype(int)
df['label'] = ((df['num_patients']>30) | df['stock_shortage'] | df['symptom_fever']).astype(int)


X = df[['num_patients','pct_female','avg_age','symptom_fever','stock_shortage']]
y = df['label']


X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2,random_state=42)


pipe = Pipeline([
('impute', SimpleImputer(strategy='mean')),
('scale', StandardScaler()),
('clf', RandomForestClassifier(n_estimators=50, random_state=42))
])
pipe.fit(X_train, y_train)
print('train score', pipe.score(X_train, y_train))
print('test score', pipe.score(X_test, y_test))
joblib.dump(pipe, './model.joblib')