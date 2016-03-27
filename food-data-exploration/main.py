#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import webapp2
import jinja2
import logging
import json
import urllib

from googleapiclient.discovery import build

from flask import Flask

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

app = Flask(__name__)

@app.route('/')
def index():
    template = JINJA_ENVIRONMENT.get_template('templates/index.html')
    return template.render()

@app.route('/foodviz1')
def foodviz1():
    template = JINJA_ENVIRONMENT.get_template('templates/foodviz1.html')
    return template.render()

@app.route('/foodviz2')
def foodviz2():
    template = JINJA_ENVIRONMENT.get_template('templates/foodviz2.html')
    return template.render()

@app.route('/foodviz3')
def foodviz3():
    template = JINJA_ENVIRONMENT.get_template('templates/foodviz3.html')
    return template.render()

@app.route('/foodviz4')
def foodviz4():
    template = JINJA_ENVIRONMENT.get_template('templates/foodviz4.html')
    return template.render()

@app.route('/references')
def references():
    template = JINJA_ENVIRONMENT.get_template('templates/references.html')
    return template.render()

