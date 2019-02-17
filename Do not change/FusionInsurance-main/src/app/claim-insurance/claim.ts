export class Claim {
    constructor(
        public mobileNumber?: number,
        public reasonToClaim?:string,
        public approved?: string,
        public registration?: any) { }
}