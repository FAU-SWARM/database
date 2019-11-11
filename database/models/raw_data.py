from mongoengine import ReferenceField, DictField

# database imports
from . import BaseDocument


class RawData(BaseDocument):
    # raw = StringField(max_length=8192, required=True)
    device = ReferenceField('Device')
    raw = DictField(required=True)
