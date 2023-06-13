import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../app/context/AuthContext'

type Props = {}

const Home = (props: Props) => {
  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`${API_URL}/users`)
      console.log('🚀 ~ file: Home.tsx:12 ~ testCall ~ result:', result)
    }
    testCall()
  }, [])
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
