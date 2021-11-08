from sklearn.metrics import confusion_matrix
from sklearn import metrics
from sklearn.metrics import classification_report as cp
from sklearn.metrics import mean_absolute_error
from matplotlib import pyplot

def evaluate(model, x_test, y_test, feature_names, top_n=5):
    y_pred = model.predict(x_test)
    classification_report(y_test, y_pred)
    regression_report(y_test, y_pred)

    # Find most import features used in above decision tree 
    if(hasattr(model, 'feature_importances_')):
        importance = model.feature_importances_
        feature_importance(importance, top_n, feature_names)
   
def classification_report(y_test, y_pred):
    report = cp(y_test, y_pred)
    cm = confusion_matrix(y_test, y_pred) # x-Achse: Actual Values, y-Achse: Predicted Values
    print(report)
    print("\nx-axis: actual values, y-axis: predicted values")
    print(cm)

def regression_report(y_test, y_pred):
    # not yet fully implemented | rather used for classification
    mean_abs_err = mean_absolute_error(y_test, y_pred)
    print(f"Mean absolute error: {mean_abs_err}")


def feature_importance(importances, top_n, feature_names):
     # summarize feature importance
    print(f"Top {top_n} most important features:")
    important_features_dict = {}
    for idx, val in enumerate(importances):
        important_features_dict[idx] = val

    important_features_list = sorted(important_features_dict,
                                    key=important_features_dict.get,
                                    reverse=True)

    top_features = [feature_names[x] for x in important_features_list[:top_n]]
    top_feature_importances = [important_features_dict[x] for x in important_features_list[:top_n]]
    for idx, val in enumerate(top_features):
        print("\t", top_features[idx], " ", top_feature_importances[idx])

    print("\nMost important features: x-Axis: feature, y-Axis: importance")
    # plot feature importance
    pyplot.bar([x for x in range(len(importances))], importances)
    pyplot.show()