import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  
  const [state, setState] = useState({
  
  })

  useEffect(() => {
    Promise.all([
      axios.get('/api/categories'),
      axios.get('/api/feature')
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        categories: all[0].data,
        features: all[1].data
      }))
    })
  }, [])

  return { state }
}
