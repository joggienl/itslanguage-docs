# Analyses

Speech analyses can be applied to user submitted audio using the ITSLanguage Speech API.

Type            | Usage
----------------|------
`pronunciation` | Compares reference audio to user submitted audio and provides an analysis on phoneme level.


## Create a pronunciation analysis

When creating a pronunciation analysis, the analysis is created as the current
user.

### URL

```http
POST /challenges/pronunciation/:challenge/analyses HTTP/1.1
```

* `challenge` - **Required** The challenge identifier.

### Request parameters

Name        | Type       | Description
------------|------------|------------
id          | `string`   | **Optional** A unique identifier for the analysis.
audio       | `blob`     | **Required** The actual audio. (Ogg Opus or WAV)
score       | `float`    | **Optional** The overall score of the pronunciation between 0 and 1. Required if ``words`` is given.
words       | `json`     | **Optional** A JSON encoded list of analysed words, forming the spoken sentence. Required if ``score`` is given.

A word is represented as a list of graphemes. Each grapheme contains of the
following attributes:

Name      | Type       | Description
----------|------------|------------
graphemes | `string`   | **Required** A string containing the assessed graphemes.
phonemes  | `object[]` | **Required** A list of phonemes found in the assessed grapheme.
score     | `float`    | **Required** The score of the assessed graphemes between 0 and 1.
verdict   | `string`   | **Required** The textual representation of the score. This should be `bad`, `good` or `moderate,

Each phoneme should have the following properties:

Name    | Type     | Description
--------|----------|------------
ipa     | `string` | **Required** IPA representation of the analysed graphemes.
score   | `float`  | **Required** The score of the assessed phoneme between 0 and 1.
verdict | `string` | **Required** The textual representation of the score. This should be `bad`, `good` or `moderate`.
start   | `float`  | **Required** Starting point offset from the beginning of the audio.
end     | `float`  | **Required** Ending point offset from the beginning of the audio.

### Request

The request should be a `multipart/form-data`.

```http
POST /challenges/pronunciation/test/analyses HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary="4c1plRsNM5mLpzT7UvYG"

--4c1plRsNM5mLpzT7UvYG
Content-Disposition: form-data; name="id"

35
--4c1plRsNM5mLpzT7UvYG
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/ogg

<audio blob>
--4c1plRsNM5mLpzT7UvYG
Content-Disposition: form-data; name="score"

0.75
--4c1plRsNM5mLpzT7UvYG
Content-Disposition: form-data; name="words"
Content-Type: application/json:

[
  {
    "chunks": [
      {
        "score": 0.9,
        "verdict": "good",
        "graphemes": "b",
        "phonemes": [
          {
            "ipa": "b",
            "score": 0.9,
            "verdict": "good",
            "start": 0.112,
            "end": 0.171
          }
        ]
      },
      {
        "score": 0.4,
        "verdict": "bad",
        "graphemes": "o",
        "phonemes": [
          {
            "ipa": "\u0251",
            "score": 0.4,
            "verdict": "bad",
            "start": 0.171,
            "end": 0.227
          }
        ]
      },
      {
        "score": 0.5,
        "verdict": "moderate",
        "graphemes": "x",
        "phonemes": [
          {
            "ipa": "k",
            "score": 0.4,
            "verdict": "bad",
            "start": 0.227,
            "end": 0.264
          },
          {
            "ipa": "s",
            "score": 0.6,
            "verdict": "moderate",
            "start": 0.264,
            "end": 0.339
          }
        ]
      }
    ]
  }
]

--4c1plRsNM5mLpzT7UvYG--
```

### Response

The analysed audio can be downloaded by opening the `audioUrl` in the
response.

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "35",
  "updated": "2014-02-13T09:39:40Z",
  "created": "2014-02-13T09:39:37Z",
  "audioUrl": "https://api.itslanguage.nl/challenges/pronunciation/test/analyses/35/audio",
  "userId": "24",
  "score": 0.75,
  "words": [
    {
      "chunks": [
        {
          "score": 0.9,
          "verdict": "good",
          "graphemes": "b",
          "phonemes": [
            {
              "ipa": "b",
              "score": 0.9,
              "verdict": "good",
              "start": 0.112,
              "end": 0.171
            }
          ]
        },
        {
          "score": 0.4,
          "verdict": "bad",
          "graphemes": "o",
          "phonemes": [
            {
              "ipa": "\u0251",
              "score": 0.4,
              "verdict": "bad",
              "start": 0.171,
              "end": 0.227
            }
          ]
        },
        {
          "score": 0.5,
          "verdict": "moderate",
          "graphemes": "x",
          "phonemes": [
            {
              "ipa": "k",
              "score": 0.4,
              "verdict": "bad",
              "start": 0.227,
              "end": 0.264
            },
            {
              "ipa": "s",
              "score": 0.6,
              "verdict": "moderate",
              "start": 0.264,
              "end": 0.339
            }
          ]
        }
      ]
    }
  ]
}
```


## List pronunciation analyses

### URL

```http
GET /challenges/pronunciation/:challenge/analyses HTTP/1.1
```

* `challenge` - **Required** The challenge identifier.

### Request parameters

Name        | Type      | Description
------------|-----------|------------
`userId` | `string`  | **Optional** The id of the user that supplied the audio.

### Request

```http
GET /challenges/pronunciation/test/analyses?userId=24 HTTP/1.1
Accept: application/json
```

### Response

The response is a JSON list with pronunciation analyses of `userId` '24'.

Note:

* The apostrophe in *Bob's* is included in the `graphemes` field of the *s*.
* When a phoneme represents more than one grapheme like *yo* in *your*, they're grouped in the same `graphemes` field.
* The *c* in *uncle* exists of two phonemes. The `score` and `verdict` are shown
  per phoneme, along with the `ipa` notation.


```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "34",
    "updated": "2014-02-13T09:39:40Z",
    "created": "2014-02-13T09:39:37Z",
    "audioUrl": "https://api.itslanguage.nl/challenges/pronunciation/test/analyses/34/audio",
    "userId": "24",
    "score": 0.75,
    "words": [
      {
        "chunks": [
          {
            "score": 0.99,
            "verdict": "good",
            "graphemes": "B",
            "phonemes": [
              {
                "ipa": "b",
                "score": 0.99,
                "verdict": "good",
                "start": 1.07,
                "end": 1.15
              }
            ]
          },
          {
            "score": 0.77,
            "verdict": "good",
            "graphemes": "O",
            "phonemes": [
              {
                "ipa": "oh",
                "score": 0.77,
                "verdict": "good",
                "start": 1.15,
                "end": 1.22
              }
            ]
          },
          {
            "score": 0.92,
            "verdict": "good",
            "graphemes": "B",
            "phonemes": [
              {
                "ipa": "b",
                "score": 0.92,
                "verdict": "good",
                "start": 1.22,
                "end": 1.35
              }
            ]
          },
          {
            "score": 0.59,
            "verdict": "moderate",
            "graphemes": "'S",
            "phonemes": [
              {
                "ipa": "z",
                "score": 0.59,
                "verdict": "moderate",
                "start": 1.35,
                "end": 1.42
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "35",
    "updated": "2014-02-13T09:39:40Z",
    "created": "2014-02-13T09:39:37Z",
    "audioUrl": "https://api.itslanguage.nl/challenges/pronunciation/test/analyses/35/audio",
    "userId": "24",
    "score": 0.75,
    "words": [
      {
        "chunks": [
          {
            "score": 0.89,
            "verdict": "good",
            "graphemes": "YO",
            "phonemes": [
              {
                "ipa": "y",
                "score": 0.89,
                "verdict": "good",
                "start": 1.42,
                "end": 1.51
              }
            ]
          },
          {
            "score": 0.48,
            "verdict": "moderate",
            "graphemes": "UR",
            "phonemes": [
              {
                "ipa": "ao",
                "score": 0.48,
                "verdict": "moderate",
                "start": 1.51,
                "end": 1.61
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "36",
    "updated": "2014-02-13T09:39:40Z",
    "created": "2014-02-13T09:39:37Z",
    "audioUrl": "https://api.itslanguage.nl/challenges/pronunciation/test/analyses/36/audio",
    "userId": "24",
    "score": 0.75,
    "words": [
      {
        "chunks": [
          {
            "score": 0.81,
            "verdict": "good",
            "graphemes": "U",
            "phonemes": [
              {
                "ipa": "ah",
                "score": 0.81,
                "verdict": "good",
                "start": 1.61,
                "end": 1.69
              }
            ]
          },
          {
            "score": 0.95,
            "verdict": "good",
            "graphemes": "N",
            "phonemes": [
              {
                "ipa": "ng",
                "score": 0.95,
                "verdict": "good",
                "start": 1.69,
                "end": 1.74
              }
            ]
          },
          {
            "score": 0.99,
            "verdict": "good",
            "graphemes": "C",
            "phonemes": [
              {
                "ipa": "k",
                "score": 0.99,
                "verdict": "good",
                "start": 1.74,
                "end": 1.83
              },
              {
                "ipa": "ax",
                "score": 0.94,
                "verdict": "good",
                "start": 1.83,
                "end": 1.88
              }
            ]
          },
          {
            "score": 0.97,
            "verdict": "good",
            "graphemes": "LE",
            "phonemes": [
              {
                "ipa": "l",
                "score": 0.97,
                "verdict": "good",
                "start": 1.88,
                "end": 2.08
              }
            ]
          }
        ]
      }
    ]
  }
]
```


## Get a single pronunciation analysis

### URL

```http
GET /challenges/pronunciation/:challenge/analyses/:analysis HTTP/1.1
```

* `challenge` - **Required** The challenge identifier.
* `analysis` - **Required** The analysis identifier.

### Request

```http
GET /challenges/pronunciation/test/analyses/25 HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "25",
  "updated": "2014-02-13T09:37:40Z",
  "created": "2014-02-13T09:37:37Z",
  "audioUrl": "https://api.itslanguage.nl/challenges/pronunciation/test/analyses/25/audio",
  "userId": "24",
  "score": 0.75,
  "words": [
    {
      "chunks": [
        {
          "score": 0.9,
          "verdict": "good",
          "graphemes": "b",
          "phonemes": [
            {
              "ipa": "b",
              "score": 0.9,
              "verdict": "good"
            }
          ]
        },
        {
          "score": 0.4,
          "verdict": "bad",
          "graphemes": "o",
          "phonemes": [
            {
              "ipa": "\u0251",
              "score": 0.4,
              "verdict": "bad"
            }
          ]
        },
        {
          "score": 0.5,
          "verdict": "moderate",
          "graphemes": "x",
          "phonemes": [
            {
              "ipa": "k",
              "score": 0.4,
              "verdict": "bad"
            },
            {
              "ipa": "s",
              "score": 0.6,
              "verdict": "moderate"
            }
          ]
        }
      ]
    }
  ]
}
```
