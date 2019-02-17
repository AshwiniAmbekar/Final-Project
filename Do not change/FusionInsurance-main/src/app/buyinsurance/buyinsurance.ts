export class BuyInsurance {
    constructor(public planDuration?:number,
        public planType?:number,
        public vehicleType?: String,
        public vehicleModel?: String,
        public drivingLicence?:LongRange,
        public engineNumber?:String,
        public registration?:any
    ){
    }
}