# Recordings

Audio can be stored using the ITSLanguage Speech API.
It can optionally be retrieved for processing or playback at a later time.

Type     | Usage
---------|------
`speech` | Record user submitted audio for a speech challenge.

## List all speech recordings

### URL

```http
GET /challenges/speech/:challenge/recordings HTTP/1.1
```

* challenge - **Required** The challenge identifier.

### Request

```http
GET /challenges/speech/test/recordings HTTP/1.1
Accept: application/json
```

### Response

The response is a JSON list with speech recordings.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "recording_1",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
    "studentId": "24"
  },
  {
    "id": "14",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-Xaq",
    "studentId": "24"
  }
]
```


## Get a single speech recording

### URL

```http
GET /challenges/speech/:challenge/recordings/:recording HTTP/1.1
```

* challenge - **Required** The challenge identifier.
* recording - **Required** The recording identifier.

### Request

```http
GET /challenges/speech/speech_1/recordings/recording_1 HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "speech_1",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
  "studentId": "24"
}
```


## Create a speech recording

Submit a new audio recording to persist without immediate analysis.

### URL

```http
POST /challenges/speech/:challenge/recordings HTTP/1.1
```

* challenge - **Required** The challenge identifier.

### Request parameters

Name      | Type     | Description
----------|----------|------------
id        | `string` | **Optional** The recording identifier. If none is given, one is generated.
studentId | `string` | **Required** The id of the student that supplied the audio.
audio     | `blob`   | **Required** The actual audio. (Ogg Opus or WAV)

### Request

The request should be a `multipart/form-data`.

```http
POST /challenges/speech/test/recordings HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary="YvHKkjjzXfysYJVHMoOAoNczae"

--YvHKkjjzXfysYJVHMoOAoNczae
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/ogg

<audio blob>
--YvHKkjjzXfysYJVHMoOAoNczae
Content-Disposition: form-data; name="studentId"

24
--YvHKkjjzXfysYJVHMoOAoNczae--
```

### Response

If the audio was persisted correctly:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "34",
  "updated": "2014-02-13T09:39:40Z",
  "created": "2014-02-13T09:39:37Z",
  "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
  "studentId": "24"
}
```
