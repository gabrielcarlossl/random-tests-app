import React, { useEffect, useState } from 'react'
import BackButton from '../components/button/BackButton'
import { useLocation } from 'react-router-dom'

const Card = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const initialPage = parseInt(queryParams.get('page') || '1', 10) // Use '1' como valor padrão se 'page' for null

    const [currentPage, setCurrentPage] = useState(initialPage)

    useEffect(() => {
        const newPage = parseInt(queryParams.get('page') || '1', 10) // Use '1' como valor padrão se 'page' for null
        setCurrentPage(newPage)
    }, [location.search])

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

    const itemsPerPage = 1

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const nextPage = () => {
        setCurrentPage(current => Math.min(current + 1, totalPages - 1))
    }

    const prevPage = () => {
        setCurrentPage(current => Math.max(current - 1, 0))
    }

    const renderCards = () => {
        const startIndex = currentPage * itemsPerPage
        const endIndex = Math.min(startIndex + itemsPerPage, data.length)

        return data.slice(startIndex, endIndex).map(item => (
            <div key={item.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                <p>ID: {item.id}</p>
                <p>Content Module ID: {item.content_module_id}</p>
                <p>Content Module Item ID: {item.content_module_item_id}</p>
                <p>Question Value: {item.question_value}</p>
            </div>
        ))
    }

    return (
        <>
            <BackButton url='/'>Voltar</BackButton>
            <div>
                {renderCards()}
                <div style={{ marginTop: '20px' }}>
                    <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
                    <span style={{ margin: '0 10px' }}>{currentPage + 1} de {totalPages}</span>
                    <button onClick={nextPage} disabled={currentPage === totalPages - 1}>Próximo</button>
                </div>
            </div>
        </>
    )
}

export default Card