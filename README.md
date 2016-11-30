ITSLanguage developer documentation
===================================

Instructions for building the ITS documentation website.


Rendering a static website
--------------------------

Install the dependencies of the help site:

    npm install

Setup and activate the Python environment:

    RND=$RANDOM
    virtualenv /tmp/venv$RND
    source /tmp/venv$RND/bin/activate

Download the dependencies and install:

    pip install -e .

Render the markdown sources to HTML:

    mkdocs build --clean
