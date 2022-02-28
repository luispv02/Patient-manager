import { useState } from 'react'

const useForm = (state = {}) => {
  
    const [formValues, setformValues] = useState(state);

    const handleInputChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value 
        })
    }

    return [formValues, handleInputChange]

}

export default useForm