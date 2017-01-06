from datetime import datetime
from django.http import HttpResponse
def hello(request):
    return HttpResponse("What happens when super Meat Boy touches salt, he turns into Kosher Meat Boy! Lol!")
def time(request):
    return HttpResponse("The time is {}".format(datetime.now()))
from django.shortcuts import render
def hello_template(request, yourname):
  return render(request, "hello.html", { "yourname": yourname, "foobar": 1000000000000000 ,"img_url": "http://images2.fanpop.com/image/polls/409000/409366_1270068967595_full.jpg"})
