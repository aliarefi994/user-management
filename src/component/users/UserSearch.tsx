'use client'

import { useUserFilterStore } from '@/store/user-filter-store'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { useEffect, useState } from 'react'

export default function UserSearch() {
  const { setSearch } = useUserFilterStore()
  const [input, setInput] = useState('')
  const debouncedInput = useDebouncedValue(input, 500)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  
  useEffect(() => {
    if (debouncedInput.trim() !== '') {
      setSearch(debouncedInput)
    } else {
      setSearch('')
    }
  }, [debouncedInput, setSearch])

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="جستجو بر اساس نام، ایمیل، تلفن یا وب‌سایت..."
        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  )
}
