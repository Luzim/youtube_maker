from django.shortcuts import render
from .serializers import FileSerializer
from rest_framework import viewsets,status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView

class FileUploadView(APIView):
    parser_class = (MultiPartParser, FormParser)

    def post(self, request):
        print('request MADED')
        print(request.data)
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.data, status=status.HTTP_400_BAD_REQUEST)

#class VideoViewSet(viewsets.ModelViewSet):
#    queryset = Video.objects.all()    
#    serializer_class = VideoSerializer
    

