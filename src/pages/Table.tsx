import React from 'react'
import BackButton from '../components/button/BackButton'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Table = () => {
    const data = [
        {
            "id": 187584,
            "content_module_id": 4102,
            "content_module_item_id": 32895,
            "question_value": 1.25
        },
        {
            "id": 187583,
            "content_module_id": 4102,
            "content_module_item_id": 32896,
            "question_value": 1.25
        },
        {
            "id": 187575,
            "content_module_id": 4102,
            "content_module_item_id": 32897,
            "question_value": 1.25
        },
        {
            "id": 55657,
            "content_module_id": 5747,
            "content_module_item_id": 7979,
            "question_value": 1.25
        }
    ]
    const history = useNavigate() 
    const itemsPerPage = 1

    const handleClick = (index) => {
        const page = Math.floor(index / itemsPerPage) + 1
        history(`/card?page=${page-1}`)
    }

    return (
        <Box >
            <BackButton url='/'>Voltar</BackButton>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1>Table</h1>
                <div style={{ marginTop: '34px' }}>
                    <table style={{ border: '1px solid black' }}>
                        <thead >
                            <tr>
                                <th style={{ border: '1px solid black' }}>ID</th>
                                <th style={{ border: '1px solid black' }}>Content Module ID</th>
                                <th style={{ border: '1px solid black' }}>Content Module Item ID</th>
                                <th style={{ border: '1px solid black' }}>Question Value</th>
                                <th style={{ border: '1px solid black' }}>Actions</th> {/* Adicione uma nova coluna para os botões */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ border: '1px solid black' }}>{item.id}</td>
                                    <td style={{ border: '1px solid black' }}>{item.content_module_id}</td>
                                    <td style={{ border: '1px solid black' }}>{item.content_module_item_id}</td>
                                    <td style={{ border: '1px solid black' }}>{item.question_value}</td>
                                    <td style={{ border: '1px solid black' }}>
                                        <button onClick={() => handleClick(index)}>View Card</button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Box>
        </Box>
    )
}

export default Table
