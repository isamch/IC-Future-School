
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (Grade 4)",
      rating: 5,
      text: "Bright Future School has exceeded our expectations in every way. Emma loves going to school every day, and we've seen tremendous growth in her confidence and academic abilities. The teachers truly care about each child's individual needs.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Parent of David (Grade 7)",
      rating: 5,
      text: "The transition to middle school can be challenging, but the staff at Bright Future made it seamless for David. The academic programs are rigorous yet supportive, and the emphasis on character development is exactly what we were looking for.",
      avatar: "MC",
    },
    {
      name: "Lisa Rodriguez",
      role: "Parent of Sofia (Grade 2)",
      rating: 5,
      text: "As a working parent, I appreciate the school's communication and involvement opportunities. Sofia has flourished in this environment, especially in her love for reading and mathematics. The small class sizes make a real difference.",
      avatar: "LR",
    },
    {
      name: "Robert Williams",
      role: "Parent of Twin Boys (Grade 5)",
      rating: 5,
      text: "Both of our sons have different learning styles, and the teachers at Bright Future School have embraced those differences. They've helped each boy develop his strengths while supporting areas that need improvement.",
      avatar: "RW",
    },
    {
      name: "Jennifer Davis",
      role: "Parent of Olivia (Grade 9)",
      rating: 5,
      text: "The high school program has prepared Olivia exceptionally well for college. The AP courses are challenging, and the college counseling has been invaluable. We couldn't be happier with our choice.",
      avatar: "JD",
    },
    {
      name: "David Thompson",
      role: "Parent of Alex (Grade 6)",
      rating: 5,
      text: "Alex struggled with confidence in his previous school, but Bright Future has transformed him. The supportive environment and dedicated teachers have helped him discover his passion for science and leadership.",
      avatar: "DT",
    },
    {
      name: "Maria Garcia",
      role: "Parent of Isabella (Grade 3)",
      rating: 5,
      text: "The arts program at Bright Future is outstanding. Isabella has discovered her love for music and painting here. The school truly values creativity alongside academic excellence.",
      avatar: "MG",
    },
    {
      name: "James Anderson",
      role: "Parent of Noah (Grade 8)",
      rating: 5,
      text: "The middle school years can be tough, but the guidance counselors and teachers at Bright Future have been incredible support systems for Noah. He's developed strong study habits and leadership skills.",
      avatar: "JA",
    },
    {
      name: "Amanda Brown",
      role: "Parent of Grace (Grade 1)",
      rating: 5,
      text: "Grace's first year of school has been magical thanks to her wonderful teacher and the warm school community. She's excited to learn every day and has made lasting friendships.",
      avatar: "AB",
    },
  ];

  const stats = [
    { number: "98%", label: "Parent Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Would Recommend" },
    { number: "500+", label: "Happy Families" },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Parents Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the families who have chosen
              Bright Future School for their children's educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Quote className="h-6 w-6 text-blue-200" />
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-blue-100">
            <CardContent className="p-8 text-center">
              <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                "Choosing Bright Future School was the best decision we made for our children's education.
                The holistic approach to learning, combined with the caring faculty and strong community,
                has given our kids the foundation they need for lifelong success."
              </blockquote>
              <div className="flex justify-center mb-4">
                {renderStars(5)}
              </div>
              <div className="flex items-center justify-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                    KM
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Karen Martinez
                  </h4>
                  <p className="text-gray-600">
                    Parent of Three Students
                  </p>
                  <p className="text-sm text-gray-500">
                    Family at BFS for 8 years
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our parent community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-6 border-l-blue-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-blue-700 font-medium">Parent Interview #{video}</p>
                    <p className="text-blue-600 text-sm">Click to watch</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Parent Experience Story
                  </h3>
                  <p className="text-sm text-gray-600">
                    A heartfelt conversation about their child's journey at Bright Future School.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our School Family
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become part of a community that values excellence, character, and the individual potential of every child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Visit
              </Button>
            </Link>
            <Link to="/admissions">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Application
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
