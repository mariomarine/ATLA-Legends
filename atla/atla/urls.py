from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('charsheet/', include('charsheet.urls')),
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
    path('', include('django.contrib.auth.urls')),
    path('api-auth/', include('rest_framework.urls'))
]
