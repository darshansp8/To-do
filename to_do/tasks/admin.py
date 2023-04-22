from django.contrib import admin
from .models import Users, Tasks
# Register your models here.

models = [Users, Tasks]
admin.site.register(models)
