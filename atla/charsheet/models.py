from django.db import models
from charsheet.constants import PLAYBOOK_CHOICES, DEMEANOR_CHOICES, TRAINING_CHOICES
from core.models import User

def get_readable_playbook(playbook_choice):
    return [playbook_pair[1] for playbook_pair in PLAYBOOK_CHOICES if playbook_pair[0] == playbook_choice][0]

class Character(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
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
    creativity = models.IntegerField(null=True)
    focus = models.IntegerField(null=True)
    harmony = models.IntegerField(null=True)
    passion = models.IntegerField(null=True)

    def _str_(self):
        playbook_full = get_readable_playbook(self.playbook)
        return self.name + ', ' + playbook_full

    def full_name(self):
        return self._str_()

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
