
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Palette,
  Calculator,
  Globe,
  Music,
  Trophy,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Early Childhood Program",
      ageRange: "Ages 3-5",
      description: "A nurturing environment focused on social, emotional, and cognitive development through play-based learning.",
      color: "bg-pink-100 border-pink-200",
      iconColor: "text-pink-600",
      icon: <Heart className="h-8 w-8" />,
      features: [
        "Play-based learning approach",
        "Social and emotional development",
        "Creative arts and crafts",
        "Early literacy and numeracy",
        "Music and movement",
        "Outdoor exploration",
      ],
      subjects: ["Pre-Reading", "Pre-Math", "Creative Arts", "Music", "Physical Development", "Social Skills"],
    },
    {
      title: "Elementary Program",
      ageRange: "Ages 6-11",
      description: "Comprehensive academic foundation with emphasis on critical thinking, creativity, and character development.",
      color: "bg-blue-100 border-blue-200",
      iconColor: "text-blue-600",
      icon: <BookOpen className="h-8 w-8" />,
      features: [
        "Core academic subjects",
        "STEM integration",
        "Language arts focus",
        "Social studies exploration",
        "Physical education",
        "Character education",
      ],
      subjects: ["English Language Arts", "Mathematics", "Science", "Social Studies", "Art", "Music", "Physical Education"],
    },
    {
      title: "Middle School Program",
      ageRange: "Ages 12-14",
      description: "Transitional program preparing students for high school with advanced academics and leadership opportunities.",
      color: "bg-green-100 border-green-200",
      iconColor: "text-green-600",
      icon: <Users className="h-8 w-8" />,
      features: [
        "Advanced coursework",
        "Leadership development",
        "Extracurricular activities",
        "College preparation",
        "Community service",
        "Peer mentoring",
      ],
      subjects: ["Advanced Math", "Literature", "Science Lab", "World History", "Foreign Language", "Fine Arts", "Technology"],
    },
    {
      title: "High School Program",
      ageRange: "Ages 15-18",
      description: "College preparatory program with AP courses, career guidance, and extensive extracurricular opportunities.",
      color: "bg-purple-100 border-purple-200",
      iconColor: "text-purple-600",
      icon: <Trophy className="h-8 w-8" />,
      features: [
        "AP and honors courses",
        "College counseling",
        "Career exploration",
        "Internship programs",
        "Student government",
        "Graduation preparation",
      ],
      subjects: ["AP Courses", "Advanced Sciences", "College Prep English", "Calculus", "World Languages", "Visual Arts", "Economics"],
    },
  ];

  const specialPrograms = [
    {
      title: "STEM Excellence",
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      description: "Hands-on science, technology, engineering, and mathematics programs with state-of-the-art labs.",
    },
    {
      title: "Arts & Creativity",
      icon: <Palette className="h-6 w-6 text-pink-600" />,
      description: "Comprehensive arts education including visual arts, music, drama, and creative writing.",
    },
    {
      title: "Global Languages",
      icon: <Globe className="h-6 w-6 text-green-600" />,
      description: "World language instruction in Spanish, French, and Mandarin with cultural immersion opportunities.",
    },
    {
      title: "Music & Performance",
      icon: <Music className="h-6 w-6 text-purple-600" />,
      description: "Band, choir, orchestra, and individual music lessons with regular performance opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Programs & Curriculum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture academic excellence,
              character development, and lifelong learning from early childhood through high school.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={index % 2 === 0 ? "" : "lg:flex-row-reverse"}>
                <Card className={`${program.color} hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`mr-4 ${program.iconColor}`}>
                            {program.icon}
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                              {program.title}
                            </h2>
                            <Badge variant="secondary" className="text-sm">
                              {program.ageRange}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                          {program.description}
                        </p>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Key Features:
                          </h3>
                          <ul className="space-y-2">
                            {program.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Core Subjects:
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {program.subjects.map((subject, subjectIndex) => (
                            <Badge key={subjectIndex} variant="outline" className="text-sm">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <div className="bg-white/50 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Program Highlights</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            Small class sizes, individualized attention, and a curriculum
                            designed to meet each student's unique learning style and pace.
                          </p>
                          <Link to="/admissions">
                            <Button className="w-full sm:w-auto">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Programs & Enrichment
            </h2>
            <p className="text-xl text-gray-600">
              Additional opportunities to explore interests and develop talents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Educational Philosophy
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            We believe in a holistic approach to education that develops the whole child -
            academically, socially, emotionally, and physically. Our curriculum is designed
            to challenge students while providing the support they need to succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Academic Excellence</h3>
              <p className="text-blue-100 text-sm">Rigorous curriculum that challenges and inspires</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Character Development</h3>
              <p className="text-blue-100 text-sm">Building integrity, empathy, and leadership</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Individual Support</h3>
              <p className="text-blue-100 text-sm">Personalized attention for every learner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Explore Our Programs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a visit to see our programs in action and meet our dedicated educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                Schedule a Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/admissions">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Admission Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
