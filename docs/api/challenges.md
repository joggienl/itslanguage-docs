# Challenges

Several types of challenges can be created using the ITSLanguage Speech API.

Type                                                | Usage
----------------------------------------------------|------
[speech](#list-all-speech-challenges)               | Guide the student in speaking through an optional topic and optional reference audio.
[pronunciation](#list-all-pronunciation-challenges) | A text transcription with reference audio allow a detailed, phoneme level analysis on user submitted audio.
[choice](#list-all-choice-challenges)               | One set of transcription choices is used to perform speech recognition to selects one of the choices.


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
    "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ"
  },
  {
    "id": "12",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "topic": "Book"
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
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ"
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
  "referenceAudioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ"
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
  "topic": "What do you know about the baby?"
}
```


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


## List all choice challenges

### URL

```http
GET /challenges/choice HTTP/1.1
```

### Request

```http
GET /challenges/choice HTTP/1.1
Accept: application/json
```

### Response fields

Name     | Type     | Description
---------|----------|------------
`status` | `string` | **Required** The status of the challenge's preparation. Either 'unprepared', 'preparing' or 'prepared'. Only a 'prepared' challenge is ready to perform a speech recognition on.

### Response

The response is a JSON list with choice challenges.

The second entry shows that _choice challenges_ can also be used to recognise one specific sentence.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "13",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "question": "The Pitcairn Islands are ... in the South Pacific Ocean",
    "choices": [
      {
        "choice": "located",
        "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ"
      }, {
        "choice": "sited",
        "audioUrl": null
      }, {
        "choice": "stationed",
        "audioUrl": null
      }, {
        "choice": "settled",
        "audioUrl": null
      }
    ],
    "status": "prepared"
  },
  {
    "id": "14",
    "created": "2014-01-28T21:25:10Z",
    "updated": "2014-01-28T21:25:10Z",
    "question": "Ik heb erge hoofdpijn.",
    "choices": [
      {
        "choice": "I have a very bad headache.",
        "audioUrl": null
      }
    ],
    "status": "preparing"
  }
]
```

## Get a single choice challenge

### URL

```http
GET /challenges/choice/:challenge HTTP/1.1
```

* `challenge` - **Required** The choice challenge identifier.

### Request

```http
GET /challenges/choice/choice_1 HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "13",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "question": "The Pitcairn Islands are ... in the South Pacific Ocean",
  "choices": [
    {
      "choice": "located",
      "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ"
    }, {
      "choice": "sited",
      "audioUrl": null
    }, {
      "choice": "stationed",
      "audioUrl": null
    }, {
      "choice": "settled",
      "audioUrl": null
    }
  ],
  "status": "prepared"
}
```


## Create a choice challenge

### URL

```http
POST /challenges/choice HTTP/1.1
```

### Request parameters

Name       | Type       | Description
-----------|------------|------------
`id`       | `string`   | **Optional** The choice challenge identifier. If none is given, one is generated.
`question` | `string`   | **Optional** A hint or question related to the choices.
`choices`  | `string[]` | **Required** The sentences of which at most one may be recognised.
`audio`    | `blob[]`   | **Optional** Audible sentences that match the ones in `choices` at the same index.

### Request

```http
POST /challenges/choice HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="choices"

located
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="choices"

sited
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/ogg

<spoken audio: located>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/wav

<spoken audio: sited>
--jhgd87g7Gy3d78--
```

### Response fields

Name     | Type     | Description
---------|----------|------------
`status` | `string` | **Required** The status of the challenge's preparation. Either 'unprepared', 'preparing' or 'prepared'. After creating a choice challenge, the status is 'preparing' for a short while, after it'll become 'prepared' to indicate the challenge is ready to perform a speech recognition on, or it'll be 'unprepared' in case the preparation failed for any reason.

### Response

```http
HTTP/1.1 202 Accepted
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/choice/4

{
  "id": "4",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "question": "The Pitcairn Islands are ... in the South Pacific Ocean",
  "choices": [
    {
      "choice": "located",
      "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsJ"
    }, {
      "choice": "sited",
      "audioUrl": "https://api.itslanguage.nl/download/YsjdG37bUGseu8-bsK"
    }
  ],
  "status": "preparing"
}
```


## Update a choice challenge

Update one or more properties of an existing choice challenge.

### URL

```http
PUT /challenges/choice/:challenge HTTP/1.1
```

* `challenge` - **Required** The choice challenge identifier.

### Request Parameters

Name       | Type       | Description
-----------|------------|------------
`question` | `string`   | **Optional** A hint or question related to the choices.
`choices`  | `string[]` | **Optional** The sentences of which at most one may be recognised.
`audio`    | `blob[]`   | **Optional** Audible sentences that match the ones in `choices`.

### Request

```http
PUT /challenges/choice/4 HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "choices": [
    "located",
    "sited",
    "stationed",
    "settled"
  ]
}
```

Or, with a preference for a web form submit:

```http
PUT /challenges/choice HTTP/1.1
Content-Type: application/x-www-form-urlencoded

choices=located&choices=sited&choices=stationed&choices=settled
```

### Response fields

Name     | Type     | Description
---------|----------|------------
`status` | `string` | **Required** The status of the challenge's preparation. Either 'unprepared', 'preparing' or 'prepared'. After updating a choice challenge, the status is 'preparing' for a short while, after it'll become 'prepared' to indicate the challenge is ready once more to perform a speech recognition on, or it'll be 'unprepared' in case the preparation failed for any reason. Note that once a choice challenge has been updated, no speech recognitions can be performed on it until the status becomes 'prepared' again, even though the choice challenge was 'prepared' before the update.

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json
Location: https://api.itslanguage.nl/challenges/choice/4

{
  "id": "4",
  "created": "2014-01-28T21:25:10Z",
  "updated": "2014-01-28T21:25:10Z",
  "question": "The Pitcairn Islands are ... in the South Pacific Ocean",
  "choices": [
    "located",
    "sited",
    "stationed",
    "settled"
  ],
  "status": "preparing"
}
```

## Delete a single choice challenge

### URL

```http
DELETE /challenges/choice/:challenge HTTP/1.1
```

* `challenge` - **Required** The choice challenge identifier.

### Request

```http
DELETE /challenges/choice/choice_1 HTTP/1.1
```

### Response

```http
HTTP/1.1 204 No Content
```
