from django.contrib import admin
from .models import Character

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    fields = ('name',
              'playbook',
              'demeanor',
              'background',
              'training',
              ('creativity', 'focus', 'harmony', 'passion'),
              'fatigue',
              'balance',
              ('afraid', 'angry', 'foolish', 'guilty', 'insecure'),
              'owner',
              'campaign',
              'notes')
    list_display = ('full_name', 'background', 'demeanor', 'training', 'owner', 'campaign')
