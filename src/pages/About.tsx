
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart, Award, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Compassion",
      description: "We create a caring environment where every child feels valued and supported.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for the highest standards in education and character development.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community",
      description: "We believe in the power of collaboration between students, families, and educators.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Growth",
      description: "We foster continuous learning and personal development in all our students.",
    },
  ];

  const staff = [
    {
      name: "Dr. Emily Carter",
      position: "Principal",
      experience: "15 years in educational leadership",
      description: "Passionate about creating innovative learning environments that inspire students to reach their full potential.",
    },
    {
      name: "Michael Rodriguez",
      position: "Vice Principal",
      experience: "12 years in education",
      description: "Dedicated to fostering a positive school culture and supporting both students and teachers.",
    },
    {
      name: "Sarah Thompson",
      position: "Head of Academics",
      experience: "10 years in curriculum development",
      description: "Committed to designing engaging curricula that meet diverse learning needs and styles.",
    },
    {
      name: "David Chen",
      position: "Student Counselor",
      experience: "8 years in student support",
      description: "Focused on helping students navigate challenges and develop essential life skills.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About IC Future School
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to provide exceptional education that prepares students
              for success in an ever-changing world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Established in 2008, IC Future School began as a small community school
                  with a big dream: to create an educational environment where every child could
                  thrive and reach their full potential.
                </p>
                <p>
                  Over the years, we have grown from a modest beginning to become one of the
                  most respected educational institutions in our community. Our success is built
                  on a foundation of academic excellence, character development, and a genuine
                  care for each student's individual journey.
                </p>
                <p>
                  Today, we serve over 500 students from diverse backgrounds, providing them
                  with the tools, knowledge, and confidence they need to succeed in their
                  academic pursuits and beyond.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
                <div className="text-4xl font-bold text-green-600 mb-2 mt-4">500+</div>
                <div className="text-gray-600">Students Served</div>
                <div className="text-4xl font-bold text-yellow-600 mb-2 mt-4">25</div>
                <div className="text-gray-600">Dedicated Educators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide a nurturing and challenging educational environment that empowers
                  students to become confident, creative, and responsible global citizens who
                  are prepared to make meaningful contributions to society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-10 w-10 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be recognized as a leading educational institution that cultivates
                  excellence, character, and innovation in every student, preparing them
                  for success in their future endeavors and lifelong learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced educators dedicated to your child's success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {member.position}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {member.experience}
                      </p>
                      <p className="text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Accreditation & Recognition
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            IC Future School is proud to be accredited by the National Association
            of Independent Schools and recognized for our commitment to educational excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">NAIS Accredited</h3>
              <p className="text-blue-100 text-sm">National Association of Independent Schools</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Excellence Award</h3>
              <p className="text-blue-100 text-sm">State Education Excellence Recognition</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Top School</h3>
              <p className="text-blue-100 text-sm">Regional Top Private School 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
