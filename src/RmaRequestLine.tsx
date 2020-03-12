import * as React from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@material-ui/core"
import data from "./data.json"
import "./styles.css";
import {InvoiceLine,ISalesOrder, IRmaRequestLineItems} from "./Interfaces"

let IHrmaRequestLineItems={
    MnjPartNo:"MNJ Part No",    
    MfgPartNo:"MFG Part No",
    RejectedQty:"Rejected Qty",
    DescriptionQty:"Description Qty",
    ReturnQty:"Return Qty",
    OriginalQty:"OriginalQty",
    ReturnReason:"ReturnReason",
    InvoiceNo:"Invoice No",
    SerialNos:"Serial Nos",
    price:"Price",
    ExtPrice:"Ext Price",
    NoOfLabels:"No Of Labels ",
}
interface IState{
    result:(ISalesOrder|InvoiceLine|IRmaRequestLineItems)[]
}
export  default class List2 extends React.Component<IState>{
    
    constructor(props:IState){
        super(props)
        }
        handelMouseLeave=(event:any)=>{
            let tr = event.target.closest('tr'); // (1)
            
            if (!tr) return; // (2)
            tr.style.backgroundColor="white"
            console.dir( tr.style);
        }
        handelMouseOver=(event:any)=>{
            let tr = event.target.closest('tr'); // (1)
            
            if (!tr) return; // (2)
            tr.style.backgroundColor="#f1efef"
            //console.dir( tr.style);
            
        }
    render(){
        
        return(<div>
                <TableContainer component={Paper} style={{}} >

            <Table  size="small" aria-label="simple table" > 
        <TableHead>
           
          <TableRow>  
              {Object.values(IHrmaRequestLineItems).map((item)=>
                 <TableCell align="left" style={{fontWeight: "bold",fontSize: "13px"}}>{item as string}</TableCell>
              )}
           
          </TableRow>
        </TableHead>
        <TableBody>
                {this.props.result.map((item,index1)=>
                      <TableRow key={index1+""}  onMouseOver={this.handelMouseOver}  onMouseLeave={this.handelMouseLeave} >
                          {
                             Object.values(item).map((value,index)=>
                                
                                <TableCell key={index+""} align="left">{value}</TableCell>
                                )
                          }
                            
                       </TableRow>
                    )}
        </TableBody>
      </Table>            
      </TableContainer>

            </div>);
    }

}