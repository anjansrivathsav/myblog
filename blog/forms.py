from django import forms
from blog.models import Post,Comment


class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields=('author','title','text','image',)

        widgets = {
            'title':forms.TextInput(attrs={'class':'textinputclass'}),
            'text':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'})

        }



class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields=('author','text',)

        widget = {

           'author':forms.TextInput(attrs={'class':'textinputclass'}),
           'text':forms.Textarea(attrs={'class':'editable medium-editor-textarea '})
        }
class ContactForm(forms.Form):
    subject = forms.CharField(max_length=100)
    message = forms.CharField(widget = forms.Textarea)
    from_email = forms.EmailField()
