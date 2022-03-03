import { useState } from 'react'

const useForm = (state = {}) => {
  
    const [formValues, setformValues] = useState(state);

    const handleInputChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value 
        })
    }

    const resetForm = () => {
        setformValues(state)
    }

    return [formValues, handleInputChange, resetForm]

}

export default useForm