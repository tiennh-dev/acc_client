export class BidExternalConfigJTable{
      Id : number; 
      YAUserName : string;
      AccountId :string;
      Description :string;
      Status:number; 
      CreatedDate :Date;
      CreatedBy:string; 
      ModifiedDate:Date; 
      ModifiedBy :string;
}

export class BidExternalConfigAdd{
      yauserName : string;
      accountId :string;
      description :string;
      status:number; 
}

export class BidExternalConfigUpdate{
      Id:number;
      yauserName : string;
      accountId :string;
      description :string;
      status:number; 
}
