"use client"

import { Egg, Bird, Feather, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Egg,
    title: "Fertile Eggs Supply",
    description: "Premium fertile eggs from our carefully selected breeding stock. Each egg is tested and guaranteed for optimal hatch rates.",
    features: ["Quality tested", "High fertility rate", "Fresh collection daily"],
  },
  {
    icon: Bird,
    title: "Day-old Chicks",
    description: "Healthy, vaccinated day-old chicks ready to start their journey. Perfect for farmers seeking to build their flock from scratch.",
    features: ["Vaccinated", "Health certified", "Multiple breeds"],
  },
  {
    icon: Feather,
    title: "One-month-old Chicks",
    description: "Well-developed month-old chicks that have passed the critical early stage. Lower risk and faster returns for your farm.",
    features: ["Fully grown feathers", "Stronger immunity", "Ready to grow"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-foreground text-balance tracking-tight">
            Premium Poultry{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From fertile eggs to ready-to-grow chicks, we provide comprehensive 
            poultry solutions tailored to your farming needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-premium bg-card border-0 shadow-premium overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Icon Header */}
                <div className="h-56 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="relative w-24 h-24 rounded-3xl bg-white shadow-premium flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-12 w-12 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 pt-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto gap-2 group/btn mt-4 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
