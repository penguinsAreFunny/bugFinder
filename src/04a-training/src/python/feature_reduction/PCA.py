import joblib
import pathlib
from sklearn.decomposition import PCA

def pca(x, min_explained_variance_ratio):
    # PCA
    n_components = 0
    for i in range(len(x)):
        n_components = i
        pca = PCA(n_components=i, copy=True)
        pca.fit(x)
        explained_variance_ratio = sum(pca.explained_variance_ratio_)
        print(f"Sum of Explained Variance Ratio: {round(explained_variance_ratio, 4)} with: {i} components.")

        if explained_variance_ratio > min_explained_variance_ratio:
            break
        else:  
            best_explained_variance_ratio = explained_variance_ratio

    pca = PCA(n_components=n_components, copy=True)
    pca.fit(x)
    
    print(f"Explained Variance:\n{pca.explained_variance_}")
    print(f"Explained Variance Ratio:\n{pca.explained_variance_ratio_}")
    print(f"Sum of Exmplained Variance Ratio:\n{sum(pca.explained_variance_ratio_)}")
    print(f"n_components: {n_components}")
    
    model_name = "PCA" 
    joblib.dump(pca, pathlib.Path(__file__).parent.joinpath("feature_reduction_dumps").joinpath(model_name + ".feature_reduction").resolve())

    return pca.transform(x)