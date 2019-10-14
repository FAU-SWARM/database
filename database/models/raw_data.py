import datetime


from mongoengine import *


from . import BaseDocument


class RawData(BaseDocument):
    raw = StringField(max_length=8192, required=True)
