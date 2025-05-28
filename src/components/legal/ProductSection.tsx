
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductSectionProps {
  product: {
    subtitle: string;
    benefits: string[];
    plans: Array<{
      name: string;
      setup: string;
      monthly: string;
      features?: string[];
      popular?: boolean;
      stripeLink?: string;
    }>;
  };
  title: string;
  icon: any;
  refProp: React.RefObject<HTMLDivElement>;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  product,
  title,
  icon: Icon,
  refProp
}) => {
  return (
    <div ref={refProp}>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Icon className="mx-auto mb-6 w-12 h-12 text-cyan-700" />
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
              <p className="text-lg text-gray-600">
                {product.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {product.plans.map((plan, index) => (
                <div key={index} className="relative">
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 bg-cyan-700 text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-slate-900">
                        {plan.name}
                      </CardTitle>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          One-time setup: {plan.setup}
                        </p>
                        <p className="text-2xl font-bold text-cyan-700">
                          {plan.monthly}
                        </p>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3">
                        {(plan.features || product.benefits).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="mr-3 flex-shrink-0 mt-1 w-5 h-5 text-cyan-700" />
                            <span className="text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter>
                      <Button
                        className="w-full bg-cyan-700 hover:bg-cyan-800 text-white transition-all duration-300 hover:scale-105"
                        onClick={() => plan.stripeLink && window.open(plan.stripeLink, '_blank')}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
