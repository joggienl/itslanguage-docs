# Recognitions

Speech recognitions can be stored and retrieved for user submitted audio using the ITSLanguage Speech API.
The actual recognitions are performed by the ITSLanguage websocket server.

Type                              | Usage
----------------------------------|------
[choice](#choice-recognition)     | Performs speech recognition on user submitted audio and selects one of the choices.


## Create a choice recognition

Submit an audio fragment for recognition.

### URL

```http
POST /challenges/choice/:challenge/recognitions HTTP/1.1
```

* challenge - **Required** The challenge identifier.

### Request parameters

Name       | Type     | Description
-----------|----------|------------
id         | `string` | **Optional** A unique identifier for the recognition. If none is given, one is generated.
studentId  | `string` | **Required** The identifier of the student that supplied the audio.
audio      | `blob`   | **Required** The actual audio. (Ogg Opus or WAV)
recognised | `string` | **Optional** The recognised string. Omit if nothing is recognised.

### Request

The request should be a `multipart/form-data` request.

```http
POST /challenges/choice/test/recognitions HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/ogg

<blob>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="studentId"

harry
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="recognised"

bike
--jhgd87g7Gy3d78--
```

### Response

The audio can be downloaded by opening the `audioUrl` in the response.

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/choice/test/recognitions/8

{
  "id": "8",
  "updated": "2014-02-13T09:39:40Z",
  "created": "2014-02-13T09:39:37Z",
  "challengeId": "8",
  "studentId": "24",
  "audioUrl": "https://api.itslanguage.nl/challenges/choice/test/recognitions/8/audio",
  "recognised": "bike"
}
```

### List choice recognitions

#### URL

```http
GET /challenges/choice/:challenge/recognitions HTTP/1.1
```

* challenge - **Required** The identifier of the challenge.

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "8",
    "updated": "2014-07-19T19:22:48Z",
    "created": "2014-07-19T19:22:48Z",
    "challengeId": "8",
    "studentId": "harry",
    "audioUrl": "https://api.itslanguage.nl/challenges/choice/test/recognitions/8/audio",
    "recognised": "bright side of life"
  },
  {
    "id": "237",
    "updated": "2014-07-19T19:22:48Z",
    "created": "2014-07-19T19:22:48Z",
    "challengeId": "237",
    "studentId": "arthur",
    "audioUrl": "https://api.itslanguage.nl/challenges/choice/test/recognitions/237/audio",
    "recognised": "spam"
  }
]
```

### Get a single choice recognition

#### URL

```http
GET /challenges/choice/:challenge/recognitions/:recognition HTTP/1.1
```

* challenge - **Required** The identifier of the challenge.
* recognition - **Required** The identifier of the recognition.

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "spam",
  "created": "2014-07-19T19:22:48Z",
  "updated": "2014-07-19T19:22:48Z",
  "challengeId": "spam",
  "studentId": "87",
  "audioUrl": "https://api.itslanguage.nl/challenges/choice/test/recognitions/spam/audio",
  "recognised": null
}
```
