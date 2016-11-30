# Audio

Various RPCs accept audio uploads. Supported audio formats are documented here.

## WAV

### Mimetypes

The WAV format has multiple mimetypes associated with it. The following are
supported by ITSLanguage:

* `audio/wav`
* `audio/wave`
* `audio/x-wav`

### Parameters

name         | type  | description
-------------|-------|------------
channels     | `int` | **Required** The number of channels.
frame_rate   | `int` | **Required** The frame rate in Hertz.
sample_width | `int` | **Required** The sample width in bits.
