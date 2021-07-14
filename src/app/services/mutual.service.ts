import { Injectable } from '@angular/core';
import {Mutual} from 'src/app/models/mutual';

@Injectable({
  providedIn: 'root'
})
export class MutualService {



    mutuals: Mutual[]=[
  
      new Mutual(1,"ICCI Mutual Fund :",'ICICI Bank Limited is a privately owned Indian development finance institution with its registered office in Vadodara.',890.92,"https://cdn.freelogovectors.net/wp-content/uploads/2020/02/icici-bank-logo.png"),
      new Mutual(2,"Kotak Mutual Fund :",'Kotak Mahindra Bank Limited is an Indian private sector bank headquartered in Mumbai, Maharashtra, India',450.10,"https://finity.in/wp-content/uploads/2018/12/kotak_mahindra_new.png"),
      new Mutual(3,"Canara Mutual Fund :",'Canara Robeco Mutual Fund is the second oldest Mutual Fund in India, established in December 1987 as Canbank Mutual Fund.',127.04,"https://yt3.ggpht.com/ytc/AAUvwnjqkQWt-555f9yi7ETVicFjJ2tgL3WdOL0NalGX=s900-c-k-c0x00ffffff-no-rj"),
      new Mutual(4,"Axis Mutual Fund :",'Axis Bank Limited is an Indian private sector bank headquartered in Mumbai',651.02,"https://static.paytmmoney.com/amc-logo/AXSMF.png"),
      new Mutual(5,"SBIFMPL Mutual Fund :",'SBIFMPL is a joint venture between the State Bank of India, an Indian public sector bank, and Amundi, a European asset management company',875.74,"https://www.sbimf.com/_catalogs/masterpage/images/homepage/SBIMF-Logo.png"),
      new Mutual(6,"IDFC Mutual Fund :",'Infrastructure Development Finance Company Limited, more commonly known as IDFC',500.20,"https://static.paytmmoney.com/amc-logo/IDFMF.png"),
      new Mutual(7,"Nipon Mutual Fund :",'Nippon India Liquid Fund Direct Growth is a Debt Mutual Fund Scheme launched by Nippon India Mutual Fund. ',750.80,"https://static.paytmmoney.com/amc-logo/RELMF.png"),
      new Mutual(8,"HDFC Mutual Fund :",'HDFC Bank Limited is an Indian banking and financial services company, headquartered in Mumbai, Maharashtra.',499.56,"https://proficientgroup.in/wp-content/uploads/2017/07/hdfc.png"),
     
      new Mutual(9,"Mirae Asset Mutual Fund :",'Mirae Asset Financial Group is a financial services group headquartered in Seoul, South Korea',352.25,"https://static.paytmmoney.com/amc-logo/MIRAS.png"),
      new Mutual(10,"Quant Mutual Fund :",'Quant Absolute Fund Direct-Growth is a Aggressive Hybrid mutual fund scheme from Quant Mutual Fund. ',810.40,"https://static.paytmmoney.com/amc-logo/ESCMF.png"),
      new Mutual(11,"LIC Mutual Fund :",'Life Insurance Corporation of India is an Indian government owned insurance and investment corporation.',447.92,"https://investeek.com/wp-content/uploads/2020/10/LICMF.png"),
      new Mutual(12,"DSP Mutual Fund :",'DSP group is a financial firm with a legacy of 152 years. It has a been in the asset management avenue for over 20 years headed by Mr. Hemendra Kothari.',278.20,"https://5.imimg.com/data5/CY/YW/MY-12893814/dsp-250x250.jpg"),
      
    ]
  
    constructor() { }
  
    getMutual(): Mutual[]
    {
     return this.mutuals;
    }
  }

 
