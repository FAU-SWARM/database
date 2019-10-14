import datetime


from mongoengine import *


from . import BaseDocument


class Device(BaseDocument):
    name = StringField(max_length=128, required=True)
