export class UserBidProduct {
    ProductId: string;
    UserId: string;
    BidTime: Date;
    YAUserName: string;
    Price: number;
    BidPrice: number;
    State: State;
    BidTimeDisplay: string;
    CustomerName: string;
    CustomerIdName: string;
    AccountName: string;
    EndTime: Date;
    EndTimeDisplay: string;

}
export enum State {
    Locked = 1,
    Highset = 2
}
export class UserBidProductList {
    ProductId: string;
    UserId: string;
    BidTime: Date;
    YAUserName: string;
    Price: number;
    BidPrice: number;
    State: State;
    BidTimeDisplay: string;
    CustomerName: string;
    CustomerIdName: string;
    AccountName: string;
    EndTime: Date;
    EndTimeDisplay: string;
}
