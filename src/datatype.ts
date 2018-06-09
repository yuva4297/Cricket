export interface Datatype  {
    runsScored: number,
    isOut: boolean,
    dismissalType?: string,
    dismissalInfo?: {
        fielderName?: string,
        hasBatsmanCrossed?: boolean,
    },
    isExtra?: true,
        extraType?: String
        extraInfo?: {
            runsOffered?: number
        }
    batsmanName: string,
    bowlerName: string
}