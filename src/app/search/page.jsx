'use client'

import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import { SearchUsers } from "@/components/searchUsers";
import debounce from 'lodash.debounce'

const SearchPage = () => {

  const [resault, setResault] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const input = useRef(null)

  useEffect(() => {
    if (value.length > 1) {
      setLoading(true)
      try {
        const getUsers = debounce(async () => {
          let searchUsers = []
          const { data } = await axios.get('http://localhost:3000/api/users?limit=100')

          data.users.filter(user => {
            if (user.username.includes(value)) {
              searchUsers.push(user)
            }
          })
          setResault(searchUsers)
        })

        getUsers()

        return () => { getUsers.cancel() }
      } catch (error) {
        throw new Error(error)
      } finally {
        setLoading(false)
      }
    }
    else {
      setResault([])
    }

  }, [value])




  function handleInputChange() {
    setValue(input.current.value)
    console.log(value);

  }

  return (
    <div className='flex justify-center min-h-[100vh] py-8'>
      <div className='md:w-[50%] w-[75%]'>
        <div>
          <input type="text" placeholder='Search...' className='basicForm w-[100%] pl-8 rounded-full py-2' ref={input} onChange={handleInputChange} />
          <button className=' text-lg bottom-[1.90rem] left-2 relative'>
            <FiSearch className=' text-stone-600' />
          </button>
        </div>
        <div>
          <SearchUsers users={resault} loader={loading} char={value} />
        </div>
      </div>
    </div>
  )
}

export default SearchPage