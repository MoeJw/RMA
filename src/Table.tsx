import * as React from "react";
import List from "./SalesOrderList";
import "./styles.css";
import info from "./data.json";
import RmaRequestLine from "./RmaRequestLine";
import InvoicesList from "./InvoicesList";
import InvoiceLine_Items from "./InvoicesLine";
import {
  IHsales,
  IRmaRequestLineItems,
  ISalesOrder,
  IinvoicesList,
  InvoiceLine
} from "./Interfaces";
let Sales_header = {
  MnjPartNo: "MNJ Part No",
  UnitCost: "Unit Cost",
  Description: "Description",
  QtyOrderd: "Qty Orderd",
  UnitPrice: "Unit Price",
  MfgPartNo: "MFG Part No",
  pricingCode: "Pricing Code",
  AddToRmaRequest: "Add To Rma Request"
} as IHsales;
let InvoicesList_header = {
  InvoiceNo: "Invoice No",
  QtyShipped: "Qty Shipped",
  PfInvoiceNo: "Pf Invoice No",
  PoNo: "Po No",
  Total: "Total"
};
let InvoicesLine_header = {
  SeqNo: "Seq No",
  MfgPartNo: "MFG Part No",
  TotalQty: "Total Qty",
  AddToRmaRequest: "Add To Rma Request"
};

interface IState {
  head2: ISalesOrder[];
  data2: IinvoicesList[];
  data3: InvoiceLine[];
  result: IRmaRequestLineItems[];
}
export default class Table extends React.Component<{}, IState> {
  constructor(props: string) {
    super(props);
    this.state = { head2: [], data2: [], data3: [], result: [] };
  }
  componentWillMount() {
    //bring data here from API

    this.setState({
      head2: info["Sales order Line  Items"],
      data2: info["Invoices List"],
      data3: info["Invoice Line Items"]
    });
  }
  check = (obj: IRmaRequestLineItems) => {
    return (
      this.state.result.filter(
        (obj2, indedx) => obj.MnjPartNo == obj2.MnjPartNo
      ).length == 0
    );
  };
  onClickhandel = (ev: { index: number; type: string }) => {
    // Handel Clicks
    if (ev.type == "InvoiceLine") {
      /// the type here is InvoiceLine
      let temp = info["Invoice Line Items"][ev.index];
      let temp2 = info["Sales order Line  Items"].filter(
        obj => obj.MfgPartNo == temp.MfgPartNo
      );

      let temp3: IRmaRequestLineItems = {
        MnjPartNo: temp2[0].MnjPartNo,
        MfgPartNo: temp2[0].MfgPartNo,
        RejectedQty: "",
        Description: temp2[0].Description,
        ReturnQty: "",
        OriginalQty: "",
        ReturnReason: "",
        InvoiceNo: "",
        SerialNos: "",
        price: temp2[0].UnitPrice,
        ExtPrice: temp2[0].UnitPrice,
        NoOfLabels: ""
      };
      if (this.check(temp3)) {
        this.setState((state, props) => ({ result: [...state.result, temp3] }));
      } else {
        alert("It's already added!");
      }

      console.log(temp2);
    } else {
      // the type is IsalseOrder
      let temp2 = info["Sales order Line  Items"][ev.index];

      let temp3: IRmaRequestLineItems = {
        MnjPartNo: temp2.MnjPartNo,
        MfgPartNo: temp2.MfgPartNo,
        RejectedQty: "",
        Description: temp2.Description,
        ReturnQty: "",
        OriginalQty: "",
        ReturnReason: "",
        InvoiceNo: "",
        SerialNos: "",
        price: temp2.UnitPrice,
        ExtPrice: temp2.UnitPrice,
        NoOfLabels: ""
      };
      if (this.check(temp3)) {
        this.setState((state, props) => ({ result: [...state.result, temp3] }));
      } else {
        alert("It's already added!");
      }
    }
    /*this.setState((state:IState,props)=>(
                {result:[...state.head2,ev]}

            ))*/
  };

  render() {
    return (
      <div>
        <h4 style={{ margin: 0 }}>Sales order Line Items</h4>
        <List
          onClick={this.onClickhandel}
          data={this.state.head2}
          header={Sales_header}
        />
        <br />
        <h4 style={{ margin: 0 }}>Invoice List</h4>
        <InvoicesList
          onClick={this.onClickhandel}
          data={this.state.data2}
          header={InvoicesList_header}
        />
        <br />
        <h4 style={{ margin: 0 }}>Invoice Line Items</h4>

        <InvoiceLine_Items
          onClick={this.onClickhandel}
          data={this.state.data3}
          header={InvoicesLine_header}
        />
        <br />
        <h4 style={{ margin: 0 }}>RMA Request Line Items</h4>
        <RmaRequestLine result={this.state.result} />
      </div>
    );
  }
}
