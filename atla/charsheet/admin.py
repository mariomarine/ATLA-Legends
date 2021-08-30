from django.contrib import admin
from .models import Character

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    fields = ('name',
              'playbook',
              'demeanor',
              'training',
              ('creativity', 'focus', 'harmony', 'passion'),
              'fatigue',
              'balance',
              ('afraid', 'angry', 'foolish', 'guilty', 'insecure'),
              'owner',
              'campaign')
    list_display = ('full_name', 'demeanor', 'training', 'owner', 'campaign')
