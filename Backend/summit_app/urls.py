from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('schedule/', ScheduleView.as_view(), name='schedule_view'),
    path('speakers/', SpeakerView.as_view(), name='speaker_view'),
    path('speakers/<int:pk>/', SpeakerView.as_view(), name='speaker_view'),
    path('comments/' , CommentView.as_view(), name='comment_view'),
    path('agenda/', AgendaView.as_view(), name='agenda_view'),
    path('careers/', JobView.as_view()),
    path('jobApplication/', JobApplicationView.as_view()),
    path('contact/', ContactView.as_view()),
    path('register/', UserRegistrationView.as_view()),
    path('token/', TokenObtainPairView.as_view())
]