from django.shortcuts import render
from django.http import HttpResponse
from .models import Tasks, Users
# Create your views here.


def index(request):
    tasks = Tasks.objects.all()
    print(tasks)
    user = Users.objects.get(name="Darshan")
    return render(request, 'index.html', {'tasks': tasks, 'user': user})

