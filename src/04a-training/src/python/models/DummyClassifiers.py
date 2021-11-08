from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.dummy import DummyClassifier
import numpy as np 

class DummyModel:
    model = {}
    strategy = ""

    def __init__(self, model, strategy):
        self.model = model
        self.strategy = strategy

# Returns different usefull dummy models. You should evaluate each dummy model and compare them to your best model
def models(x_train, y_train):
    dummy_models = []
    clfs = []

    clfs.append(DummyClassifier(strategy="stratified"))
    clfs[-1].fit(x_train, y_train)
    dummy_models.append(DummyModel(clfs[-1], "'stratified': " + 
        "generates predictions by respecting the training set’s class distribution."))

    clfs.append(DummyClassifier(strategy="most_frequent"))
    clfs[-1].fit(x_train, y_train)
    dummy_models.append(DummyModel(clfs[-1], "'most_frequent': " + 
        "always predicts the most frequent label in the training set."))

    clfs.append(DummyClassifier(strategy="prior"))
    clfs[-1].fit(x_train, y_train)
    dummy_models.append(DummyModel(clfs[-1], "'prior': " + 
        "always predicts the class that maximizes the class prior" + 
        " (like “most_frequent”) and predict_proba returns the class prior."))

    clfs.append(DummyClassifier(strategy="uniform"))
    clfs[-1].fit(x_train, y_train)
    dummy_models.append(DummyModel(clfs[-1], "'uniform': generates predictions uniformly at random."))

    unique_targets = np.unique(y_train)
    for val in unique_targets:
        clfs.append(DummyClassifier(strategy="constant", constant=val))
        clfs[-1].fit(x_train, y_train)
        dummy_models.append(DummyModel(clfs[-1], f"'constant: {val}':" +
            "always predicts a the constant label"))

    return dummy_models