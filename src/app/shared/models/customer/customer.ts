export interface User {
  id: string;
  name: string;
  email: string;
  company: Company;
  mobileNumber: number;
  mediaHandles: string[];
}

export interface Customer extends User {

}

export interface Company {
  name: string;
  category: Object;
}
