# Speech Challenges

Guide the student in speaking through an optional topic and optional reference audio.


## List all speech challenges

### URL

```http
GET /challenges/speech HTTP/1.1
```

### Request

```http
GET /challenges/speech HTTP/1.1
Accept: application/json
```

### Response

The response is a JSON list with speech challenges.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "speech_1",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "topic": "What do you know about babies?",
    "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
    "srtUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
    "imageUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe"
  },
  {
    "id": "12",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "topic": "Book",
    "referenceAudioUrl": null,
    "srtUrl": null,
    "imageUrl": null
  }
]
```


## Get a single speech challenge

### URL

```http
GET /challenges/speech/:challenge HTTP/1.1
```

* `challenge` - **Required** The speech challenge identifier.

### Request

```http
GET /challenges/speech/speech_1 HTTP/1.1
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
  "topic": "What do you know about babies?",
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
  "srtUrl": "https://api.itslanguage.nl/download/zVXLJJuGyhBHQbfX",
  "imageUrl": "https://api.itslanguage.nl/download/dlnBo-dotLpnhN-a"
}
```


## Create a speech challenge

### URL

```http
POST /challenges/speech HTTP/1.1
```

### Request parameters

Name             | Type     | Description
-----------------|----------|------------
`id`             | `string` | **Optional** The speech challenge identifier. If none is given, one is generated.
`topic`          | `string` | **Optional** A question or topic serving as guidance to the student.
`referenceAudio` | `blob`   | **Optional** The reference audio fragment.
`srt`            | `blob`   | **Optional** The transcription of the challenge in `.srt` format.
`image`          | `blob`   | **Optional** An image to show with the challenge.


#### Request

```http
POST /challenges/speech HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="referenceAudio"; filename="blob"
Content-Type: audio/ogg

<blob>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="topic"

What do you know about babies?
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="srt"; filename="chal.srt"
Content-Type: text/plain

<blob>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="image"; filename="img.png"
Content-Type: image/png

<blob>
--jhgd87g7Gy3d78--
```


### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/speech/4

{
  "id": "4",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "topic": "What do you know about babies?",
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
  "srtUrl": "https://api.itslanguage.nl/download/QEYduwrFRHeufiru",
  "imageUrl": "https://api.itslanguage.nl/download/h-JJREJRCFAeA-nl"
}
```


## Update a speech challenge

### URL

```http
PUT /challenges/speech/:challenge HTTP/1.1
```

* `challenge` - **Required** The speech challenge identifier.

Update one or more properties of an existing speech challenge.

### Request parameters

Name             | Type     | Description
-----------------|----------|------------
`topic`          | `string` | **Optional** A question or topic serving as guidance to the student.
`referenceAudio` | `blob`   | **Optional** The reference audio fragment.
`srt`            | `blob`   | **Optional** The transcription of the challenge in `.srt` format.
`image`          | `blob`   | **Optional** An image to show with the challenge.


### Request

```http
PUT /challenges/speech/4 HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "topic": "What do you know about the baby?"
}
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/speech/4

{
  "id": "4",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "topic": "What do you know about the baby?",
  "referenceAudioUrl": "https://api.itslanguage.nl/download/cxtczOCmVbvVsIFw",
  "srtUrl": "https://api.itslanguage.nl/download/acfRSlgOorYdeYcP",
  "imageUrl": "https://api.itslanguage.nl/download/xCbFikceYVgUIHqc"
}
```
