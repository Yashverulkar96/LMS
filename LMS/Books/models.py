from unicodedata import category
from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    category=models.CharField(max_length=30)
    price = models.IntegerField()
    