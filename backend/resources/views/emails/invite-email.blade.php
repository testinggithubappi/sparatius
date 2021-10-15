@component('mail::message')
    # Invitation Email

    Dear User,

    You have been invited by {{ $name }}, Please click the button below to join.

    @component('mail::button', ['url' => $link])
        Accept Invitation
    @endcomponent

    If you did not create an account, no further action is required.

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
