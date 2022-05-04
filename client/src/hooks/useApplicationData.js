import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  
  const [state, setState] = useState({
  
    categories: {}

  })

  useEffect(() => {
    Promise.all([
      axios.get('/api/categories'),
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        categories: all[0].data,
      }))
    })
  }, [])

  return { state }
}
