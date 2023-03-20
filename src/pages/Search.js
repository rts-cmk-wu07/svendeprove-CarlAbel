// Importerer React og SearchField-komponenten
import React from 'react'
import SearchField from '../components/SearchField'

// Definerer Search-funktionen
export default function Search() {
  // Returnerer søgesiden
  return (
    <div>
      <h1 className="text-[36px] text-white py-4 font-ubuntu ml-6">Søg</h1>
      <SearchField />
    </div>
  )
}
