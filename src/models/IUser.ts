export interface TypeAccount {
    name: string;
}

export default interface IUser {
    id: number;
    type_account: TypeAccount;
    user_photo: string | null;
    first_name: string;
    last_name: string | null;
    email: string;
    phone: string;
    know_about_us: string;
    user_description: string | null;
    date_created: string;
    email_confirmed: boolean;
    account_verified: boolean;
    type_verification: string;
    balance: number;
    count_houses: number;
}
