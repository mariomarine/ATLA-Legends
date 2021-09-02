from django.urls import path

from . import views

urlpatterns = [
    path('characters/', views.CharacterListCreateAPIView.as_view(), name='characters'),
    path('list-characters/', views.ListCharacters.as_view()),
    path('character/', views.CharacterDetail.as_view()),
    path('update-character-notes/', views.CharacterNotes.as_view()),
]
