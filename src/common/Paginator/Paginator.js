import React, {useEffect, useState} from "react";
import style from "../../compinents/Users/Users.module.css";


const Paginator = (props) => {
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    useEffect(() => setPortionNumber(Math.ceil(props.currentPage / portionSize)), [props.currentPage]);

    return (<>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <button className={props.currentPage === p && style.pagesActive}
                                  onClick={() => {
                                      props.onPageChange(p)
                                  }}>{p}</button>)

            }
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </>
    )
}

export default Paginator;