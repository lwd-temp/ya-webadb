
// See https://developer.android.com/reference/android/media/MediaCodecInfo.CodecProfileLevel
export enum AndroidCodecProfile {
    Baseline = 0x01,
    Main = 0x02,
    Extended = 0x04,
    High = 0x08,
    High10 = 0x10,
    High422 = 0x20,
    High444 = 0x40,
    ConstrainedBaseline = 0x10000,
    ConstrainedHigh = 0x80000,
}

export enum AndroidCodecLevel {
    Level1 = 0x01,
    Level1b = 0x02,
    Level11 = 0x04,
    Level12 = 0x08,
    Level13 = 0x10,
    Level2 = 0x20,
    Level21 = 0x40,
    Level22 = 0x80,
    Level3 = 0x100,
    Level31 = 0x200,
    Level32 = 0x400,
    Level4 = 0x800,
    Level41 = 0x1000,
    Level42 = 0x2000,
    Level5 = 0x4000,
    Level51 = 0x8000,
    Level52 = 0x10000,
    Level6 = 0x20000,
    Level61 = 0x40000,
    Level62 = 0x80000,
}
