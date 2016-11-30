# Permissions and roles

All users in the ITSLanguage framework have at least one role.
Along with a role comes a set of permissions.
Each API call in the system requires a certain permission.

## Roles

Roles in the ITSLanguage framework

Role        | Description
------------|------------
`STUDENT`   | A student
`ORGANISATION`   | An organisation
`TENANT`    | A tenant


## Permissions

* Role: Tenant
Permissions:
    * AUDIO_ANALYSIS_CREATE,
    * AUDIO_ANALYSIS_LIST,
    * CHALLENGE_EDIT,
    * CHALLENGE_LIST,
    * CHALLENGE_DELETE,
    * ORGANISATION_CREATE,
    * ORGANISATION_LIST,
    * SPEECH_RECORDING_LIST,
    * STUDENT_CREATE,
    * STUDENT_LIST
            
* Role: Organisation
Permissions:
    * AUDIO_ANALYSIS_CREATE,
    * AUDIO_ANALYSIS_LIST,
    * AUDIO_RECOGNITION_LIST,
    * CHALLENGE_CREATE,
    * CHALLENGE_DELETE,
    * CHALLENGE_EDIT,
    * CHALLENGE_LIST,
    * CHOICE_CHALLENGE_CREATE,
    * CHOICE_CHALLENGE_DELETE,
    * CHOICE_CHALLENGE_LIST,
    * DOWNLOAD,
    * SPEECH_RECORDING_LIST,
    * STUDENT_LIST

* Role: Student
    * AUDIO_ANALYSIS_CREATE,
    * AUDIO_ANALYSIS_LIST,
    * AUDIO_RECOGNITION_CREATE,
    * AUDIO_RECOGNITION_LIST,
    * CHALLENGE_LIST,
    * CHOICE_CHALLENGE_LIST,
    * DOWNLOAD,
    * SPEECH_RECORDING_CREATE,
    * SPEECH_RECORDING_LIST

If a call is made with an invalid scope gained from an OAuth2 Token and thus with insufficient permissions,
a `403 Forbidden` response is returned.