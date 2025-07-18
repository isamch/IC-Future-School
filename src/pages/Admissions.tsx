
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Calendar,
  DollarSign,
  CheckCircle,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with basic information about your child.",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      timeline: "By March 1st",
    },
    {
      step: 2,
      title: "Schedule Interview",
      description: "Meet with our admissions team and take a tour of our facilities.",
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      timeline: "March - April",
    },
    {
      step: 3,
      title: "Submit Documents",
      description: "Provide required documents including transcripts and recommendations.",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      timeline: "Within 2 weeks",
    },
    {
      step: 4,
      title: "Receive Decision",
      description: "Get notification about admission status and next steps.",
      icon: <CheckCircle className="h-6 w-6 text-yellow-600" />,
      timeline: "By May 1st",
    },
  ];

  const tuitionInfo = [
    {
      program: "Early Childhood (Ages 3-5)",
      tuition: "$12,500",
      description: "Half-day and full-day options available",
    },
    {
      program: "Elementary (Grades K-5)",
      tuition: "$15,800",
      description: "Includes all materials and activities",
    },
    {
      program: "Middle School (Grades 6-8)",
      tuition: "$17,200",
      description: "Advanced curriculum and extracurriculars",
    },
    {
      program: "High School (Grades 9-12)",
      tuition: "$19,500",
      description: "College prep with AP courses",
    },
  ];

  const requirements = [
    "Completed application form",
    "Previous school transcripts",
    "Teacher recommendations (2)",
    "Student interview",
    "Parent/guardian interview",
    "Birth certificate copy",
    "Immunization records",
    "Application fee ($100)",
  ];

  const financialAid = [
    {
      title: "Need-Based Aid",
      description: "Financial assistance based on family income and circumstances",
      amount: "Up to 50% of tuition",
    },
    {
      title: "Merit Scholarships",
      description: "Awards for exceptional academic or artistic achievement",
      amount: "Up to $5,000 annually",
    },
    {
      title: "Sibling Discount",
      description: "Reduced tuition for additional children in the same family",
      amount: "10% off second child",
    },
  ];

  const importantDates = [
    { date: "January 15", event: "Application Opens", status: "completed" },
    { date: "March 1", event: "Application Deadline", status: "upcoming" },
    { date: "March 15", event: "Interviews Begin", status: "upcoming" },
    { date: "April 30", event: "Interview Deadline", status: "upcoming" },
    { date: "May 1", event: "Admission Decisions", status: "upcoming" },
    { date: "May 15", event: "Enrollment Deadline", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Admission Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome families who share our commitment to academic excellence,
              character development, and creating a bright future for every child.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {admissionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Step {step.step}: {step.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {step.timeline}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Application Fee</span>
                    <span className="font-semibold">$100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Class Size</span>
                    <span className="font-semibold">Max 18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Student-Teacher Ratio</span>
                    <span className="font-semibold">8:1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Acceptance Rate</span>
                    <span className="font-semibold">75%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Apply Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    Start your child's journey at Bright Future School today.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Begin Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tuition & Fees
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for exceptional education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tuitionInfo.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {program.program}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {program.tuition}
                  </div>
                  <p className="text-sm text-gray-600">per year</p>
                  <Separator className="my-4" />
                  <p className="text-sm text-gray-600">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What's Included in Tuition:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "All academic materials",
                "Technology access",
                "Library resources",
                "Art supplies",
                "Science lab materials",
                "Physical education",
                "Music programs",
                "Field trip activities",
                "Student support services",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Assistance
            </h2>
            <p className="text-xl text-gray-600">
              Making quality education accessible to all families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financialAid.map((aid, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {aid.title}
                    </h3>
                    <Badge variant="secondary" className="text-sm">
                      {aid.amount}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-center">
                    {aid.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Financial Aid Statistics
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                <p className="text-gray-600">of students receive aid</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.1M</div>
                <p className="text-gray-600">awarded annually</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$6,200</div>
                <p className="text-gray-600">average aid amount</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Application Requirements
              </h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Important Dates
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {importantDates.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${item.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                            }`}></div>
                          <div>
                            <span className="font-semibold text-gray-900">
                              {item.date}
                            </span>
                            <p className="text-sm text-gray-600">{item.event}</p>
                          </div>
                        </div>
                        <Badge
                          variant={item.status === 'completed' ? 'default' : 'outline'}
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our admissions team is here to help guide you through the process.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">admissions@brightfuture.edu</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">Schedule a campus tour</p>
            </div>
          </div>

          <Button
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 transition-colors duration-200 font-semibold px-6 py-3 shadow-lg"
          >
            Schedule a Meeting
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
