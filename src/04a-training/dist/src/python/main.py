import click
import json
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import train_test_split

@click.command()
@click.argument('dataset_file_path')
def main(dataset_file_path):
    print(f"path: {dataset_file_path}")
    dataset = readFile(dataset_file_path)
    CART_decision_tree(dataset)
    df = pd.DataFrame(dataset.data, columns=dataset.feature_names)
    print(df.head)

# trains DecisionTreeClassifier
def CART_decision_tree(dataset):
    x = dataset.data[:]
    y = dataset.target

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3)
    parameters = {
        'criterion': ['gini', 'entropy'],
        'max_depth': [None, 2, 4, 8, 10]
    }
    clf = DecisionTreeClassifier()
    grid_cv = GridSearchCV(clf, parameters, cv=10, n_jobs=-1)
    grid_cv.fit(x_train, y_train)
    print(f"Parameters of best model: {grid_cv.best_params_}")
    print(f"Score of best model: {grid_cv.best_score_}")


""" 
    ===============================================================================
                            Helper functions and boilerplate
    =============================================================================== 
"""

# reads dataset.json-file and parses it to an obj
def readFile(filepath):
    file = open(filepath, "r")
    content = file.read()
    json_content = json.loads(content)
    print(json_content.keys())
    #print(json_content["data"])
    return dotdict(json_content)

class dotdict(dict):
    """dot.notation access to dictionary attributes"""
    __getattr__ = dict.get
    __setattr__ = dict.__setitem__
    __delattr__ = dict.__delitem__

if __name__ == '__main__':
    main()