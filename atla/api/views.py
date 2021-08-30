from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CharacterSerializer
from charsheet.models import Character
from rest_framework import status

class CharacterListCreateAPIView(ListCreateAPIView):
    serializer_class = CharacterSerializer
    queryset = Character.objects.all()

class ListCharacters(APIView):
    def get(self, request, format=None):
        characters = Character.objects.all()
        serializer = CharacterSerializer(characters, many=True)
        return Response(serializer.data)

class CharacterDetail(APIView):
    def post(self, request, format=None):
        serializer = CharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
