interface AboutProps {
  imageUrl: string;
}

export function About({ imageUrl }: AboutProps) {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt="Profile"
              className="rounded-lg shadow-lg max-w-[300px]"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              I am working as a Java backend developer, leveraging strong programming skills 
              and a solid understanding of backend development principles. Committed to 
              contributing to the development of robust and scalable applications using Java,
              Spring, Hibernate, and RESTful APIs. Eager to work in a collaborative environment, 
              enhance skills, and deliver efficient software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}