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