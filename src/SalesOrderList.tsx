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
import Button from "@material-ui/core/Button";
import "./styles.css";
import { IHsales, ISalesOrder } from "./Interfaces";

interface IProps {
  data: ISalesOrder[];
  onClick: any;
  header: IHsales;
}

interface IState {
  data: ISalesOrder[];
}
export default class SalesOrderList extends React.Component<
  IProps,
  IState,
  string | number
> {
  constructor(props: IProps) {
    super(props);
  }
  onClickHandel = (event: any) => {
    this.props.onClick({
      index: Number(event.currentTarget.id),
      type: "ISalesOrder"
    });
    console.log(event.currentTarget.id);
  };
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
                  key={item.MfgPartNo}
                  onMouseOver={this.handelMouseOver}
                  onMouseLeave={this.handelMouseLeave}
                >
                  {Object.values(item).map((item2, index2: number) => (
                    <TableCell key={index} align="left">
                      {item2}
                    </TableCell>
                  ))}

                  <TableCell align="left">
                    {" "}
                    <Button
                      size="small"
                      id={index + ""}
                      onClick={this.onClickHandel}
                      color="primary"
                      variant="contained"
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
