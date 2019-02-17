export class BuyInsurance {
    constructor(public planDuration?:string,
        public planType?:string,
        public dateAndTime?: Date,
        public vehicleType?: String,
        public model?: String,
        public drivingLicense?:String,
        public engineNumber?:String
    ){}
}