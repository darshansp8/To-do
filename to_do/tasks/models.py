from django.db import models
from datetime import date
# Create your models here.


class Users(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)


class Tasks(models.Model):
    email = models.ForeignKey(Users, on_delete=models.CASCADE)
    task_desc = models.CharField(max_length=300)
    task_status = models.BooleanField(default=False)
    task_created = models.DateField(default=date.today)



