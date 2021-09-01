from django.urls import path

from . import views

urlpatterns = [
    path('', views.charsheetList, name='characters-index'),
    path('<int:character_id>', views.charsheet, name='charsheet'),
    path('my-characters', views.charsheetList, name='my-characters'),
    path('new-character', views.newCharacter, name='new-character'),
]
