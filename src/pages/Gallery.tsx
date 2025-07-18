
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  Palette,
  Trophy,
  Music,
  Camera,
  X,
} from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Photos", icon: <Camera className="h-4 w-4" /> },
    { id: "classroom", name: "Classroom", icon: <BookOpen className="h-4 w-4" /> },
    { id: "activities", name: "Activities", icon: <Users className="h-4 w-4" /> },
    { id: "arts", name: "Arts & Crafts", icon: <Palette className="h-4 w-4" /> },
    { id: "sports", name: "Sports", icon: <Trophy className="h-4 w-4" /> },
    { id: "events", name: "Events", icon: <Music className="h-4 w-4" /> },
  ];

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      title: "Science Lab Discovery",
      category: "classroom",
      description: "Students exploring chemistry experiments in our modern science laboratory.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      title: "Reading Corner",
      category: "classroom",
      description: "Cozy reading spaces that encourage a love of literature and learning.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
      title: "Art Studio Creativity",
      category: "arts",
      description: "Students expressing their creativity in our well-equipped art studio.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      title: "Mathematics in Action",
      category: "classroom",
      description: "Interactive math lessons that make learning engaging and fun.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      title: "Sports Day Champion",
      category: "sports",
      description: "Annual sports day celebrating teamwork and athletic achievement.",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=600&h=400&fit=crop",
      title: "Music Performance",
      category: "events",
      description: "Students showcasing their musical talents at our spring concert.",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
      title: "Group Learning",
      category: "activities",
      description: "Collaborative learning activities that build teamwork skills.",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      title: "Drama Club",
      category: "activities",
      description: "Students developing confidence through dramatic arts and performance.",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      title: "Graduation Ceremony",
      category: "events",
      description: "Celebrating our graduates as they move on to their next adventure.",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      title: "Creative Writing",
      category: "classroom",
      description: "Inspiring young authors in our creative writing workshops.",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600&h=400&fit=crop",
      title: "Outdoor Learning",
      category: "activities",
      description: "Taking education beyond the classroom with outdoor exploration.",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      title: "Technology Lab",
      category: "classroom",
      description: "Modern computer lab where students learn digital literacy skills.",
    },
  ];

  const filteredPhotos = selectedCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through life at Bright Future School. See our students
              learning, creating, and growing in our vibrant educational community.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <Card
                key={photo.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(photo.src)}
              >
                <div className="relative group">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(cat => cat.id === photo.category)?.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {photo.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See More in Person
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a visit to experience our vibrant school community firsthand
            and see where your child's bright future begins.
          </p>
          <Button
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 transition-colors duration-200 font-semibold px-6 py-3 shadow-lg"
          >
            Schedule a Campus Tour
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
