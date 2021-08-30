from django.contrib import admin
from .models import Character

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    fields = ('name', 'playbook', 'demeanor', 'training', ('creativity', 'focus', 'harmony', 'passion'), 'owner')
    list_display = ('full_name', 'demeanor', 'training')
