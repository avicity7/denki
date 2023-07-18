'use client'
import { Stack, Text, Card, CardBody, Image } from '@chakra-ui/react'

const ApplianceCard = ({appliance}: any) => {
  return (
    <Card className="group max-w-sm hover:bg-zinc-700">
      <CardBody>
        <Text className="text-xl font-medium mb-3 group-hover:text-violet-300">{appliance.name}</Text>
        <Text className={"group-hover:text-white text-center text-3xl mt-8 mb-2 font-bold "+(
          parseFloat(appliance.currentUsage) >= 0.7 ? "text-red-400" : parseFloat(appliance.currentUsage) >= 0.5 ? "text-orange-400" : "text-green-400"
        )}>{appliance.currentUsage}</Text>
        <Text className="text-neutral-400 text-lg font-medium text-center">kWh</Text>
      </CardBody>
    </Card>
  )
}

export default ApplianceCard