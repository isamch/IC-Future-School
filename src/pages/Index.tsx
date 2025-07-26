
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Excellence in Education",
      description: "Comprehensive curriculum designed to nurture young minds and foster academic achievement.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Experienced Faculty",
      description: "Dedicated educators with years of experience in child development and learning.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Caring Environment",
      description: "A safe, nurturing space where children can grow, learn, and develop confidence.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Proven Results",
      description: "Consistent track record of student success and parent satisfaction.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "500+", label: "Happy Students" },
    { number: "25", label: "Expert Teachers" },
    { number: "98%", label: "Parent Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nurturing
                <span className="text-blue-600 block">Bright Futures</span>
                Together
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                At IC Future School, we believe every child deserves an exceptional education
                that prepares them for success in life. Join our community of learners, dreamers,
                and achievers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Start Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Excellence in Education
                  </h3>
                  <p className="text-gray-600 text-center">
                    Where every child's potential is unlocked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IC Future School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive educational experience that goes beyond academics
              to develop well-rounded, confident, and capable young individuals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive education from early childhood through high school
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Childhood",
                age: "Ages 3-5",
                features: ["Play-based learning", "Social development", "Creative arts", "Basic literacy"],
              },
              {
                title: "Elementary",
                age: "Ages 6-11",
                features: ["Core subjects", "STEM programs", "Language arts", "Physical education"],
              },
              {
                title: "Middle & High School",
                age: "Ages 12-18",
                features: ["Advanced academics", "College prep", "Leadership programs", "Career guidance"],
              },
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{program.age}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/programs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-white font-medium mb-6">
            "IC Future School has exceeded our expectations in every way. Our daughter loves
            going to school every day, and we've seen tremendous growth in her confidence and
            academic abilities."
          </blockquote>
          <p className="text-blue-100">Sarah Johnson, Parent</p>
          <div className="mt-8">
            <Link to="/testimonials">
              <Button
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 transition-colors duration-200 font-semibold px-6 py-3 shadow-lg"
              >
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the next step in your child's educational journey. We're here to help them shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
