# Generated by Django 2.2.4 on 2019-08-22 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='videoUrl',
            field=models.CharField(default=False, max_length=200),
        ),
    ]
