from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register out own model admin, based on the default UserAdmin
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    readonly_fields = [
        'date_joined',
    ]
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        is_superuser = request.user.is_superuser

        if not is_superuser:
            form.base_fields['username'].disabled = True
            form.base_fields['is_superuser'].disabled = True
            form.base_fields['user_permissions'].disabled = True
            form.base_fields['username'].disabled = True
            form.base_fields['password'].disabled = True
        if not is_staff:
            form.base_fields['is_staff'].disabled = True

        return form