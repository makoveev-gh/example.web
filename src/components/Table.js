import React from "react";

const Table = ({data, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    } 
    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Code</th>
                <th>Value</th>
            </tr>
            {
               
                data.map((object, i) => (
                    <tr>
                        <th>{object.id}</th>
                        <th>{object.code}</th>
                        <th>{object.value}</th>    
                    </tr>
                ))
            }      
        </table>
    )
}

export default Table;