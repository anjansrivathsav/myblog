from django.db import models
from django.utils import timezone
from django.core.urlresolvers import reverse

class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length = 200)
    text = models.TextField()
    image = models.ImageField(null=True,blank=True ,height_field='height_field',width_field='width_field')
    height_field = models.IntegerField(default = 0)
    width_field = models.IntegerField(default = 0)
    created_date = models.DateTimeField(default = timezone.now)
    published_date = models.DateTimeField(blank = True,null = True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def get_absolute_url(self):
        return reverse("post_detail",kwargs={'pk':self.pk})

    def approve_comment(self):
        return self.comments.filte(approved_comment= True)

    def __str__(self):
        return self.title



class Comment(models.Model):
    post = models.ForeignKey('blog.Post',related_name = 'comments')
    author = models.CharField(max_length = 200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default = False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def get_absolute_url(self):
        return reverse("post_list")

    def __str__(self):
        return self.text
