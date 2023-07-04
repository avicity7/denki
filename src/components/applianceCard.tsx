'use client'
import { Stack, Text, Card, CardBody, Image } from '@chakra-ui/react'

const ApplianceCard = ({appliance}: any) => {
  return (
    <Card className="group max-w-sm hover:bg-zinc-700">
      <CardBody>
        <Text className="text-xl font-bold mb-3 group-hover:text-violet-300">{appliance.name}</Text>
        <Text className="group-hover:text-white">This is a test card.</Text>
      </CardBody>
    </Card>
  )
}

export default ApplianceCard