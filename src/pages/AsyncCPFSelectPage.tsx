import React, { useState } from 'react'
import { rows } from '../data/mockupData'


const ListWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortType, setSortType] = useState<any>(null)

  // Função de filtro
  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Função de ordenação 

  const sortedRows = filteredRows.sort((a: any, b: any) => { 
    if (sortType === 'alphabetical') {
      return a.name.localeCompare(b.name)
    } else if (sortType === 'year') {
      return b.edition - a.edition
    }
    return 0 
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquise por sua olimpíada"
        value={searchTerm}
        onChange={(e:any) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortType('alphabetical')}>Ordenar por Nome</button>
      <button onClick={() => setSortType('year')}>Ordenar por Ano</button>
      <ul>
        {sortedRows.map((row, index) => (
          <li key={index}>
            {row.name} - {row.edition}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListWithSearch