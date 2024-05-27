import Link from 'next/link'
import React from 'react'

const Parent = () => {
  return (
    <div>
      Parent Route
      <Link href='/iroutes/modal'>Open Modal</Link>
    </div>
  )
}

export default Parent
