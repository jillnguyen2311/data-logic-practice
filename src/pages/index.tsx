import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { initialProducts } from '@/data/information'

export default function Home() {

  const [products, setProducts] = useState(initialProducts)

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <h1>Tiny Store</h1>
      <Link href='/enumPage'>EnumPage</Link>
      <div>
        {
          products.map((product, index) => {
            return (
              <div key={index}>
                <h3>{product.name}</h3>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.name}
                />
                <div>price ${product.price}</div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
