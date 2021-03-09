import React from 'react'
import { SignupForm } from '../../components/Form'

import styles from '../../style/Home.module.css'

export function Home () {
  return (
    <div className={styles.container}>
      <h1>Preencha o formulário:</h1>
      <SignupForm />
    </div>
  )
}