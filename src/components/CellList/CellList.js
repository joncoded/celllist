import {React, useMemo, useState} from 'react';

const CellList = (props) => {

  const { config } = props;
  const { items, sortBy, sortSetting } = GetSortableData(props.items, config.defaultSortField, config.defaultSortOrder);
  const getClassNamesFor = field => {
    if (!sortSetting) {
      return;
    }
    return sortSetting.field === field ? sortSetting.order : undefined;
  }

  return (
    <>      
      <h2>{config.caption}</h2>
      <p>Data source: <a href={config.dataSource.url} target="_blank">{config.dataSource.title}</a> </p>

      <table>
        <caption>Table of {config.caption}</caption>
        <thead>
          <tr>
            {Object.getOwnPropertyNames(items[0]).map((column, indexHeader) => {
              return (
                <th key={`columnHead-${indexHeader}`}>
                  <button onClick={() => sortBy(column)} className={getClassNamesFor(column)}>{column}</button>                  
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((row, indexRow) => {
            return (
            <tr key={`row-${indexRow}`}>
              {Object.getOwnPropertyNames(items[0]).map((column, indexColumn) => {
                // only format if the field has numbers
                const cell = (typeof row[column] == "number") ? row[column].toLocaleString() : row[column];
                return (<td key={`columnBody-${indexColumn}`}>{cell}</td>)
              })}
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )

}

const GetSortableData = (items, defaultSortField, defaultSortOrder) => {
  
  const [ sortSetting, setSortSetting ] = useState({field: defaultSortField, order : defaultSortOrder});

  const sortedItems = useMemo(() => {

    let sortableItems = [...items];
    
    if (sortSetting !== null) {            

      sortableItems.sort((a,b) => {       

        if (a[sortSetting.field] < b[sortSetting.field]) {
          return sortSetting.order === 'asc' ? -1 : 1;
        } 
        if (a[sortSetting.field] > b[sortSetting.field]) {
          return sortSetting.order === 'asc' ? 1 : -1;        
        }
        return 0;

      });          
          
    }

    sortableItems.sort(Intl.Collator().compare);

    return sortableItems;

  }, [items, sortSetting]); 

  const sortBy = field => {
    
    let order = 'asc';    
    
    if (sortSetting && sortSetting.field === field && sortSetting.order === 'asc') {
      order = 'desc';
    }
    
    setSortSetting({field, order});

  }

  return { items: sortedItems, sortBy, sortSetting };
  
}

export default CellList;