export interface AppState {
    user: UserInfo | null;
}

export interface FBPicture {
    url: string;
    width: number;
    height: number;
}

export interface UserInfo {
    id: string;
    email: string;
    name: string;
    picture: FBPicture;
}
