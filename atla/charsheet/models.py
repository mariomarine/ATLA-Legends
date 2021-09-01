from django.db import models
from charsheet.constants import PLAYBOOK_CHOICES, DEMEANOR_CHOICES, TRAINING_CHOICES, CONDITIONS
from django.conf import settings
from campaign.models import Campaign
from django.core.validators import MaxValueValidator, MinValueValidator

def get_readable_playbook(playbook_choice):
    return [playbook_pair[1] for playbook_pair in PLAYBOOK_CHOICES if playbook_pair[0] == playbook_choice][0]

class Character(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    campaign = models.ForeignKey(
        Campaign,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    playbook = models.CharField(
        max_length=15,
        choices=PLAYBOOK_CHOICES
    )
    name = models.CharField(max_length=100)
    demeanor = models.CharField(
        max_length=15,
        choices=DEMEANOR_CHOICES
    )
    training = models.CharField(
        max_length=15,
        choices=TRAINING_CHOICES
    )
    creativity = models.IntegerField(
        null=True,
        blank=True,
        )
    focus = models.IntegerField(
        null=True,
        blank=True,
    )
    harmony = models.IntegerField(
        null=True,
        blank=True,
    )
    passion = models.IntegerField(
        null=True,
        blank=True,
    )
    fatigue = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(0),
        ]
    )
    balance = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(3),
            MinValueValidator(-3),
        ]
    )
    afraid = models.BooleanField(default=False)
    angry = models.BooleanField(default=False)
    foolish = models.BooleanField(default=False)
    guilty = models.BooleanField(default=False)
    insecure = models.BooleanField(default=False)

    def __str__(self):
        playbook_full = get_readable_playbook(self.playbook)
        return self.name + ', ' + playbook_full

    def full_name(self):
        return self.__str__()

    def to_dict(self):
        return {
            'id': self.id,
            'playbook': get_readable_playbook(self.playbook),
            'name': self.name,
            'demeanor': self.demeanor,
            'training': self.training,
            'creativity': self.creativity,
            'focus': self.focus,
            'harmony': self.harmony,
            'passion': self.passion,
        }
