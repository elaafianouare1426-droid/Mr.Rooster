import { Shield, Heart, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "Farm Quality",
    description: "State-of-the-art facilities with modern incubation technology ensuring optimal conditions for every egg.",
  },
  {
    icon: Heart,
    title: "Healthy Chickens",
    description: "Our birds are raised with premium feed, proper vaccination schedules, and expert veterinary care.",
  },
  {
    icon: Shield,
    title: "Customer Trust",
    description: "Over 500 satisfied farmers trust us for consistent quality and reliable delivery every time.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of poultry experts available to guide you through every step of your farming journey.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-foreground text-balance tracking-tight">
            The Trusted Choice for{" "}
            <span className="text-gradient">Premium Poultry</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We combine traditional farming values with modern technology to deliver 
            the healthiest chicks and highest-quality fertile eggs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="card-premium bg-card border-0 shadow-premium overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
