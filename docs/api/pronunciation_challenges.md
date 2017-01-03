# Pronunciation Challenges

A text transcription with reference audio allow a detailed, phoneme level analysis on user submitted audio.


## List all pronunciation challenges

### URL

```http
GET /challenges/pronunciation HTTP/1.1
```


### Request

```http
GET /challenges/pronunciation HTTP/1.1
Accept: application/json
```

### Response

The response is a JSON list with pronunciation challenges.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "pronunciation_1",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "transcription": "You could take the baby with you",
    "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
    "status": "preparing",
    "alignment": null
  },
  {
    "id": "12",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "transcription": "tap",
    "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu6-Abq",
    "status": "prepared",
    "alignment": {
      "confidenceScore": -3.44,
      "words": [
        {
          "chunks": [
            {
              "graphemes": "t",
              "phonemes": [
                {
                  "start": 0.25,
                  "end": 0.45,
                  "confidenceScore": -2.8149,
                  "ipa": "t"
                }
              ]
            },
            {
              "graphemes": "a",
              "phonemes": [
                {
                  "start": 0.45,
                  "end": 0.67,
                  "confidenceScore": -0.7412,
                  "ipa": "ae"
                }
              ]
            },
            {
              "graphemes": "p",
              "phonemes": [
                {
                  "start": 0.67,
                  "end": 0.84,
                  "confidenceScore": -6.7516,
                  "ipa": "p"
                }
              ]
            }
          ]
        }
      ]
    }
  }
]
```


## Get a single pronunciation challenge

### URL

```http
GET /challenges/pronunciation/:challenge HTTP/1.1
```

* `challenge` - **Required** The pronunciation challenge identifier.

### Request

```http
GET /challenges/pronunciation/pronunciaton_1 HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "12",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "transcription": "tap",
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu6-Abq",
  "status": "prepared",
  "alignment": {
    "confidenceScore": -3.44,
    "words": [
      {
        "chunks": [
          {
            "phonemes": [
              {
                "start": 0.25,
                "ipa": "t",
                "end": 0.45,
                "confidenceScore": -2.8149
              }
            ],
            "graphemes": "t"
          },
          {
            "phonemes": [
              {
                "start": 0.45,
                "ipa": "ae",
                "end": 0.67,
                "confidenceScore": -0.7412
              }
            ],
            "graphemes": "a"
          },
          {
            "phonemes": [
              {
                "start": 0.67,
                "ipa": "p",
                "end": 0.84,
                "confidenceScore": -6.7516
              }
            ],
            "graphemes": "p"
          }
        ]
      }
    ]
  }
}
```


## Create a pronunciation challenge

### URL

```http
POST /challenges/pronunciation HTTP/1.1
```

### Request parameters

Name             | Type     | Description
-----------------|----------|------------
`id`             | `string` | **Optional** The pronunciation challenge identifier. If none is given, one is generated.
`transcription`  | `string` | **Required** The spoken word or sentence as plain text.
`referenceAudio` | `blob`   | **Required** The reference audio fragment.

### Request

```http
POST /challenges/pronunciation HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="referenceAudio"; filename="blob"
Content-Type: audio/ogg

<blob>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="transcription"

You could take the baby with you
--jhgd87g7Gy3d78--
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/pronunciation/4

{
  "id": "4",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "transcription": "You could take the baby with you",
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ",
  "status": "preparing",
  "alignment": null
}
```


## Update a pronunciation challenge

### URL

```http
PUT /challenges/pronunciation/:challenge HTTP/1.1
```

* `challenge` - **Required** The pronunciation challenge identifier.

Update one or more properties of an existing pronunciation challenge.

### Request parameters

Name             | Type     | Description
-----------------|----------|------------
`transcription`  | `string` | **Optional** The spoken word or sentence in plain text.
`referenceAudio` | `blob`   | **Optional** The reference audio fragment.
`status`         | `string` | **Optional** The status of the challenge (unprepared, preparing, prepared).
`alignment`      | `object` | **Optional** The alignment of the challenge.


### Request

```http
PUT /challenges/pronunciation/4 HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="transcription"

tap
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="referenceAudio"; filename="blob"
Content-Type: audio/ogg

<blob>
Content-Disposition: form-data; name="status"

prepared
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="aignment"
Content-Type: application/json

{"confidenceScore": -3.44, "words": [....]}
--jhgd87g7Gy3d78--
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/pronunciation/4

{
  "id": "4",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "transcription": "You could take the baby with you",
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-Abc",
  "status": "prepared",
  "alignment": {"confidenceScore": -3.44, "words": [....]}
}
```

## Delete a single pronunciation challenge

### URL

```http
DELETE /challenges/pronunciation/:challenge HTTP/1.1
```

* `challenge` - **Required** The choice challenge identifier.

### Request

```http
DELETE /challenges/pronunciation/choice_1 HTTP/1.1
```

### Response

```http
HTTP/1.1 204 No Content
```
