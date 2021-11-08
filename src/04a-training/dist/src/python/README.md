# Running script with anaconda
    conda activate ./ml_env
    python main.py $path-to-dataset.json
or
    conda activate ./ml_env
    jupyter nbconvert --to python main.ipynb
    
# Used Version
    Anaconda3 2021.05 (Python 3.8.8 64-bit)

# Creating new local env
    1. conda create -p ./$env_name
    2. conda activate ./$env_name
    3. pip install -r requirements.txt