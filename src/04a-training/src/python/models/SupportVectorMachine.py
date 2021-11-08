import joblib
import pathlib
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

def model(x_train, y_train):
    print("Grid search: finding best hyperparameter for SupportVectorMachine...")
    number_features = len(x_train[0])
    # Kernel: rbf, linear, poly, sigmoid
    # C: low <=> smooth dec. boundary, high <=> acc. more important
    # gamma: low <=> higher influence, high <=> lower influence
    kernel = "poly"
    C = 0.5
    gamma = 1 / number_features

    # GridSearch
    parameters = {
        'kernel': ['kernel', 'rbf', 'linear', 'poly', 'sigmoid'],
        'gamma': [1 / number_features],
        'C': [0.2, 0.5, 0.7],
    }

    clf = SVC(verbose=1)
    grid_cv = GridSearchCV(clf, parameters, cv=10, n_jobs=-1)
    grid_cv.fit(x_train, y_train)

    # Use best hyperparameters to train model
    clf = SVC(kernel=grid_cv.best_params_["kernel"], C=grid_cv.best_params_["C"], gamma=grid_cv.best_params_["gamma"], verbose=True)
    y_train_flat = [item for sublist in y_train for item in sublist]
    clf.fit(x_train, y_train_flat)

    model_name = "SupportVectorMachine" 
    joblib.dump(clf, pathlib.Path(__file__).parent.joinpath("trained_model_dumps").joinpath(model_name + ".model").resolve())
    return clf

