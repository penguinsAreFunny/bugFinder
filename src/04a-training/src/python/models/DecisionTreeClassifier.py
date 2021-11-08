import joblib
import pathlib
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV

def model(x_train, y_train):
   print("Grid search: finding best hyperparameter for DecisionTreeClassifier...")
   # Grid search: finding best hyperparameters
   parameters = {
      'criterion': ['gini', 'entropy'],
      'splitter': ['best', 'random'],
      'max_depth': [None, 2, 4, 8, 10]
   }
   clf = DecisionTreeClassifier()
   grid_cv = GridSearchCV(clf, parameters, cv=10, n_jobs=-1)
   grid_cv.fit(x_train, y_train)
   print(f"Parameters of best model: {grid_cv.best_params_}")
   print(f"Score of best model: {grid_cv.best_score_}")

   # Use best hyperparameters to train model
   clf = DecisionTreeClassifier(criterion=grid_cv.best_params_["criterion"], max_depth=grid_cv.best_params_["max_depth"]) 
   clf.fit(x_train, y_train)

   model_name = "DecisionTreeClassifier" 
   joblib.dump(clf, pathlib.Path(__file__).parent.joinpath("trained_model_dumps").joinpath(model_name + ".model").resolve())
   return clf