
// - MARK - Data Models for a typical API response MemberApi and for the POST & Table model with IMember
export interface MemberApi {
    members: IMember[];
    count: number;
}

export interface IMember {
    emailAddress: string;
    emailTypeId: number;
    isPrimary: boolean;
    description: string;
    timeCreated: number;
}