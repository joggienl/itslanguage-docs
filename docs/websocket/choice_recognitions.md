# Choice Recognitions

Performing a choice recognition is broken up into various calls.

## Initialising a choice recognition

This is the starting point for a choice recognition. A unique recognition id
is generated, which serves a leading role in the recognition. Each other call
requires the recognition id as a parameter.

If other RPCs are called without this RPC being called first, the error
`nl.itslanguage.session_not_initialised` will be returned.

### URI

```
nl.itslanguage.choice.init_recognition
```

### Response

The unique recognition id is returned as a string. The id is used in other calls
to identify the current recognition.


## Initialising audio for uploading

The audio that is to be uploaded for recognition is streamed to the server. Some
information is required in order for the server to be able to store and
use the audio correctly.

### URI

```
nl.itslanguage.choice.init_audio
```

### Parameters

Name           | Type     | Description
---------------|----------|------------
recognition_id | `string` | **Required** The id of the recognition to initialise the audio for.
audio_format   | `string` | **Required** The mimetype of the audio to upload.

Depending on the `audio_format`, additional parameters may be required.
Please see [the audio documentation](audio.md) for which audio formats are
supported and what parameters they require.


## Initialise choice challenge

Before performing the recognition, a WFST needs to be prepared for the
challenge. When the RPC is called, the challenge is initialised asynchronously.
When the challenge is to be used, the server automatically waits for the
challenge initialisation to finish. If the initialisation results in an error,
the error is relayed to the client.

### URI

```
nl.itslanguage.choice.init_challenge
```

### Parameters

Name            | Type     | Description
----------------|----------|------------
recognition_id  | `string` | **Required** The id of the recognition to prepare the challenge for.
organisation_id | `string` | **Required** The id of the organisation in which to find the challenge.
challenge_id    | `string` | **Required** The id of the challenge to prepare.


## Stream recognition audio

The audio to be recognised can now be streamed to the server. The streaming
works by repeatedly calling this RPC. Each time the RPC is called, the data
will be appended to an audio file on the server.

### URI

```
nl.itslanguage.choice.write
```

### Parameters

Name           | Type     | Description
---------------|----------|------------
recognition_id | `string` | **Required** The id of the recognition for which to upload the audio.
data           | `bytes`  | **Required** The data to stream to the server. This can be any length.
encoding       | `string` | **Optional** The encoding in which the data is sent. This should be `base64` if the data is base64 encoded.


## Perform the recognition

After completing the streaming of the audio, the recognition can be performed.

### URI

```
nl.itslanguage.choice.recognise
```

### Parameters

Name           | Type     | Description
---------------|----------|------------
recognition_id | `string` | **Required** The id of the recognition to perform.

### Response

A JSON object with the recognition results and metadata is returned.

Example:
```json
{"id": "g93h844",
 "audioUrl": "https://api-dot-itslanguage.nl:80/organisations/1/challenges/choice/4/recognitions/g93h844/audio",
 "recognised": "Unicorns"}
```

The RPC can return various errors:

* `nl.itslanguage.recognition_failed` If the recognition of the audio failed.
* `nl.itslanguage.no_such_organisation` If the organisation doesn't exist.
* `nl.itslanguage.no_such_challenge` If the challenge doesn't exist.
