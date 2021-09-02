from rest_framework import serializers
from charsheet.models import Character

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ('id', 'name', 'playbook', 'background', 'demeanor', 'training', 'creativity', 'harmony', 'focus', 'passion', 'fatigue', 'balance', 'afraid', 'angry', 'foolish', 'guilty', 'insecure')