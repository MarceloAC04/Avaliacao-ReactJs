import React, { useEffect, useState } from "react";
import "./Table.css"
import Input from "../Input/Input";
import Img from "../Img/Img";



const Table = ({ dados }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked)
    }

    useEffect(() => {
    },[dados])
    return (
        <table className="tab-tarefa">
            <tbody>
                {dados.map((e => {
                    return (
                        <tr className={`tab-tarefa-data ${checked ? "tab-tarefa-data-checked" : null}`} key={e.id}>
                            <td className="tab-tarefa-data_data">
                                <Input
                                    id={"check"}
                                    value={checked}
                                    fnChange={() => handleChange()}
                                    type={"checkbox"}
                                />
                            </td>
                            <td className="tab-tarefa-data_data tab-tarefa-data_title ">{e.nome}</td>
                            <td className="tab-tarefa-data_data">
                                <Img imageRender={'../../assets/img/delete.png'} />
                            </td>
                            <td className="tab-tarefa-data_data">
                                <Img imageRender={'../../assets/img/lapis.png'} />
                            </td>
                        </tr>
                    )
                }))}
            </tbody>
        </table>
    );
};

export default Table;