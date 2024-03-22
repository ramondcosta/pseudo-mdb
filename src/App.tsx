// @ts-nocheck
import React from "react";
import categories from "./data/categories.json";
import products from "./data/products.json";
import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";

import "./App.scss";

// import products from "./data/products.json";
// import categories from "./data/categories.json";
import pseudo_mdb from "./data/pseudo-imdb";
import rates from "./data/rates";

const movies = pseudo_mdb.getMovies();

function App() {
  const [rate, setRate] = React.useState(null);
  const [dataState, setDateState] = React.useState({
    sort: [{ field: "title", dir: "asc" }],
    skip: 0,
    take: 10,
  });

  const handleDropDownChange = React.useCallback(
    (event) => {
      let newDataState = { ...dataState };
      if (event.target.value.average_score !== null) {
        newDataState.filter = {
          logic: "and",
          filters: [
            {
              field: "average_score",
              operator: "eq",
              value: event.target.value.average_score,
            },
          ],
        };
        newDataState.skip = 0;
      } else {
        newDataState.filter = [];
        newDataState.skip = 0;
      }

      setRate(event.target.value.average_score);
      setDateState(newDataState);
    },
    [dataState]
  );

  const handleGridDataStateChange = (event) => {
    setDateState(event.dataState);
  };

  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <p>
        <DropDownList
          data={rates}
          dataItemKey="average_score"
          textField="average_score"
          defaultItem={{ id: null, rate: "Rates" }}
          onChange={handleDropDownChange}
        />
        &nbsp; Selected rate: <strong>{rate}</strong>
      </p>

      <Grid
        filterable={true}
        data={process(movies, dataState)}
        pageable={true}
        sortable={true}
        {...dataState}
        onDataStateChange={handleGridDataStateChange}
        style={{ height: "400px" }}
      >
        <GridColumn field="title" title="Title" />
        <GridColumn field="director" title="Director" />
        <GridColumn field="average_score" title="AverageScore" />
      </Grid>
    </div>
  );
}

const CheckboxColumn = (props) => {
  return (
    <td>
      <input
        type="checkbox"
        checked={props.dataItem[props.field]}
        disabled="disabled"
      />
    </td>
  );
};

function Movies() {
  return (
    <Grid data={movies}>
      <GridColumn field="title" />
      <GridColumn field="director" />
      <GridColumn field="average_score" />
    </Grid>
  )
}

export default App;