import React from 'react'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import StatusCheckbox from './StatusCheckbox'
import EditItem from './EditItem'

const el = (item) => (
    item.editStatus ? <EditItem id = { item.id } text = { item.text }/> : item.text
)

const Item = ({ item }) => (
    <tr>
        <td>
        <StatusCheckbox status = { item.status } id = { item.id }></StatusCheckbox>
        </td>
        <td>
            { el(item) }
        </td>
        <td>
            <DeleteButton id = {item.id} text = {item.text}></DeleteButton>
            <EditButton id = {item.id}></EditButton>
        </td>
    </tr>
)

export default Item