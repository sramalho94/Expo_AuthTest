import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import { API_URL, useAuth } from '../app/context/AuthContext'
import axios from 'axios'

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin, onRegister } = useAuth()

  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`${API_URL}/users`)
    }
    testCall()
  }, [])

  const login = async () => {
    const result = await onLogin!(email, password)
    if (result && result.error) {
      alert(result.msg)
    }
  }

  const register = async () => {
    const result = await onRegister!(email, password)
    if (result && result.error) {
      alert(result.msg)
    } else {
      login()
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://galaxies.dev/img/logos/logo--blue.png' }}
        style={styles.image}
      />
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          style={styles.input}
        />
        <Button onPress={login} title="Sign in" />
        <Button onPress={register} title="Create Account" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain'
  },

  form: {
    gap: 10,
    width: '60%'
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },

  container: {
    alignItems: 'center',
    width: '100%'
  }
})

export default Login
