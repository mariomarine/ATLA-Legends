from django.db import models
from .constants import ERA_CHOICES
from core.models import User

class Campaign(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(
        max_length=255,
    )
    era = models.CharField(
        max_length=25,
        choices=ERA_CHOICES,
    )
    scope = models.TextField(blank=True)
    group_focus = models.CharField(
        max_length=255,
        blank=True,
    )
    group_focus_details = models.TextField(blank=True)
    act_one = models.TextField(blank=True)
    act_two = models.TextField(blank=True)
    act_three = models.TextField(blank=True)
    non_player_characters = models.TextField(blank=True)
    other_notes = models.TextField(blank=True)

    def __str__(self):
        return f'{self.name} ({self.era}) by {self.owner}'
