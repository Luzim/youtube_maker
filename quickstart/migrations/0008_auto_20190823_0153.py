# Generated by Django 2.2.4 on 2019-08-23 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0007_delete_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(upload_to=''),
        ),
    ]
