
#!/usr/bin/env python2.7
# coding: utf-8

from __future__ import absolute_import
from __future__ import unicode_literals

import os

from setuptools import find_packages
from setuptools import setup


setup(
    name='itslanguage-docs',
    author='d-centralize',
    maintainer='d-centralize',
    version='0.0.0',
    packages=find_packages(),
    install_requires=[
        'aafigure==0.5',
        'mkdocs==0.14.0'],
)
