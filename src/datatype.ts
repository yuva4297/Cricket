export interface datatype  {
    runsScored: number,
    isOut: boolean,
    dismissalType?: string,
    dismissalInfo?: {
        fielderName: String,
        hasBatsmanCrossed: boolean,
    },
    isExtra?: true,
        extraType?: String
        extraInfo?: {
            runsOffered?: number
        }
    batsmanName: string,
    bowlerName: string
}