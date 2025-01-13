import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { CircleCheckBig } from 'lucide-react'
import { type Feature } from "../../Types"

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="h-full bg-card text-card-foreground">
      <CardContent className="p-6">
        <div className="aspect-video relative mb-4">
          <Image
            src={feature.image}
            alt={`${feature.title} illustration`}
            fill
            className="rounded-lg object-cover"
            unoptimized
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
        <ul className="space-y-2 text-sm">
          {feature.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CircleCheckBig className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

