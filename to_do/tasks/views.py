from django.shortcuts import render
from django.http import HttpResponse
from .models import Tasks, Users
from django.utils import timezone
import datetime

# Create your views here.


def index(request):
    current_date = timezone.now().date()
    start_week = current_date - datetime.timedelta(current_date.weekday())
    end_week = start_week + datetime.timedelta(7)
    tasks_today = Tasks.objects.filter(task_created=current_date)
    tasks_tomorrow = Tasks.objects.filter(task_created=current_date+datetime.timedelta(days=1))
    tasks_week = Tasks.objects.filter(task_created__range=[start_week, end_week])
    filtered_tasks_week = [task for task in tasks_week if task not in tasks_today]

    no_task_today = False if tasks_today else True
    no_task_tomorrow = False if tasks_tomorrow else True
    no_task_week = False if filtered_tasks_week else True

    user = Users.objects.get(name="Darshan")

    context = {
        'tasks_today': tasks_today,
        'tasks_tomorrow': tasks_tomorrow,
        'tasks_week': filtered_tasks_week,
        'user': user,
        'no_task_today': no_task_today,
        'no_task_tomorrow': no_task_tomorrow,
        'no_task_week': no_task_week,
    }
    return render(request, 'index.html', context)

