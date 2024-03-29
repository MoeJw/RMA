import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { IHinvoiceList, IinvoicesList, InvoiceLine } from "./Interfaces";

import "./styles.css";

interface IProps {
  data: IinvoicesList[];
  onClick: any;
  header: IHinvoiceList;
}

export default class InvoicesList extends React.Component<
  IProps,
  string | number
> {
  constructor(props: IProps) {
    super(props);
  }
  handelMouseLeave = (event: any) => {
    let tr = event.target.closest("tr"); // (1)

    if (!tr) return; // (2)
    tr.style.backgroundColor = "white";
    console.dir(tr.style);
  };
  handelMouseOver = (event: any) => {
    let tr = event.target.closest("tr"); // (1)

    if (!tr) return; // (2)
    tr.style.backgroundColor = "#f1efef";
    //console.dir( tr.style);
  };
  render() {
    const { onClick, data } = this.props;
    return (
      <div>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.values(this.props.header).map((item: string, index) => (
                  <TableCell
                    key={index}
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    {item as string}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map((item, index: number) => (
                <TableRow
                  key={item.InvoiceNo}
                  onMouseOver={this.handelMouseOver}
                  onMouseLeave={this.handelMouseLeave}
                >
                  {Object.values(item).map((item2, index2: number) => (
                    <TableCell key={index} align="left">
                      {item2}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
