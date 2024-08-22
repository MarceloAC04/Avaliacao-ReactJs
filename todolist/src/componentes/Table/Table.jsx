import "./Table.css"
import Input from "../Input/Input";
import Button from "../Button/Button"
import { TiDelete } from "react-icons/ti";
import { FiEdit2 } from "react-icons/fi";


const Table = ({ dados, checkedTarefa, deleteTarefa, editaTarefa }) => {
    const handleChange = (e) => {
        checkedTarefa(e.id, !e.status)
    }

    const handleDelete = (e) => {
        deleteTarefa(e.id)
    }

    const handleEdit = (e) => {
        editaTarefa(e.id)
    }
    return (
        <table className="tab-tarefa">
            <tbody>
                {dados.map((e => {
                    return (
                        <tr className={`tab-tarefa-data ${e.status ? "tab-tarefa-data-checked" : null}`} key={e.id}>
                            <td className="tab-tarefa-data_data">
                                <Input
                                    id={"check"}
                                    value={e.status}
                                    fnChange={() => handleChange(e)}
                                    type={"checkbox"}
                                />
                            </td>
                            <td className={`tab-tarefa-data_data tab-tarefa-data_title ${e.status ? "tab-tarefa-data_title_checked" : null}`}>{e.nome}</td>
                            <td className="tab-tarefa-data_data">
                                <Button
                                    classe={`tabela-button ${e.status ? "checked-tabela-button" : "nochecked-tabela-button"}`}
                                    textButton={<TiDelete size={27} color={`${e.status ? "#FCFCFC" : "#1E123B"}`} />}
                                    onClick={() => handleDelete(e)}
                                />
                                <Button
                                    classe={`tabela-button ${e.status ? "checked-tabela-button" : "nochecked-tabela-button"}`}
                                    textButton={<FiEdit2 size={20} color={`${e.status ? "#FCFCFC" : "#1E123B"}`} />}
                                    onClick={() => handleEdit(e)}
                                />
                            </td>

                        </tr>
                    )
                }))}
            </tbody>
        </table>
    );
};

export default Table;