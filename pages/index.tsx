import React  from "react"

import { ColorType, FontType, Text } from "../src/component/Text"
import { Button } from "../src/component/Button"
import { ProductCard, BorderType } from "../src/component/Card/ProductCard"

export default function Home() {
  return ( 
    <>
      <Text type='h1' font={FontType.HEADING_XL} color={ColorType.PRIMARY} >Template 1</Text>  
      <Button type='button'>Click here</Button>
      <ProductCard variant={BorderType.DASHED} />
    </>
  )
}
