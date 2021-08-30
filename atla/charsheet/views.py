from django.http import HttpResponse
from django.shortcuts import render
from charsheet.constants import PLAYBOOK_CHOICES, TRAINING_CHOICES, DEMEANOR_CHOICES
from .models import Character
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    return HttpResponse("Character Sheet Creation")

@login_required
def charsheet(request, character_id=1):
    template_name = 'charsheet.html'
    character = Character.objects.get(id=character_id)
    context = {
        'character': character.to_dict(),
        'playbook_choices': PLAYBOOK_CHOICES,
        'demeanor_choices': DEMEANOR_CHOICES,
        'training_choices': TRAINING_CHOICES,
    }

    return render(request, template_name, context)

@login_required
def charsheetList(request):
    template_name = 'characters.html'
    characters = Character.objects.filter(owner=request.user)
    context = {
        'characters': []
    }
    for character in characters:
        context['characters'].append(character.to_dict())
    return render(request, template_name, context)

@login_required
def newCharacter(request):
    template_name = 'new_character.html'
    context = {
        'playbook_choices': PLAYBOOK_CHOICES,
        'demeanor_choices': DEMEANOR_CHOICES,
        'training_choices': TRAINING_CHOICES,
    }
    return render(request, template_name, context)