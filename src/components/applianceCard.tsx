'use client'
import { Stack, Text, Card, CardBody, Image } from '@chakra-ui/react'

const ApplianceCard = ({appliance}: any) => {
  return (
    <Card className="max-w-sm">
      <CardBody>
        <Text className="text-xl font-bold mb-3">{appliance.name}</Text>
        <Text>This is a test card.</Text>
      </CardBody>
    </Card>
  )
}

export default ApplianceCard