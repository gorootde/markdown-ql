import { DataSource } from "./data-sources/data-source";
import { ParseError } from "./parse-error";
import { KeyValueObject, Query } from "./query";
import { QueryResult } from "./query-result";
import { Table } from "./table";

export class QueryExecutor {
  constructor(private dataSource: DataSource) {}

  execute(query: Query): QueryResult {
    let data: KeyValueObject[];

    //Get data from corresponding table
    switch (query.table) {
      case Table.TASKS:
        data = this.dataSource.tasks();
        break;
      case Table.DOCUMENTS:
        data = this.dataSource.documents();
        break;
      default:
        throw new ParseError(
          `Executor doesn't support table '${query.table}' yet`
        );
    }

    //Execute filters
    for (const filter of query.filter) {
      data = filter.apply(data);
    }

    //Sort data
    if (query.sorter) {
      data = query.sorter.apply(data);
    }

    //Select fields based on fields array
    data = data.map((d) => {
      const filteredObject: Record<string, any> = {};
      for (const key of query.fields) {
        if (d.hasOwnProperty(key)) {
          filteredObject[key] = d[key];
        }
      }
      //force copying of all internal fields prefixed with $
      for (const key of Object.keys(d).filter((k) => k.startsWith("$"))) {
        filteredObject[key] = d[key];
      }
      return filteredObject;
    });

    return new QueryResult(query, data);
  }
}
