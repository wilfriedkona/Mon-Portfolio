import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const testimonials = [
    {
      name: "Jean Dupont",
      role: "Directeur Technique",
      company: "TechInnovate",
      quote: "Wilfried a démontré une capacité exceptionnelle à résoudre des problèmes complexes et à livrer des solutions innovantes.",
      image: "/images/job.jpeg"
    },
    {
      name: "Marie Laurent",
      role: "Cheffe de Projet",
      company: "WebSolutions",
      quote: "Sa passion pour le développement web et son souci du détail font de lui un développeur exceptionnel.",
      image: "/images/job.jpeg"
    },
    {
        name: "Marie Laurent",
        role: "Cheffe de Projet",
        company: "WebSolutions",
        quote: "Sa passion pour le développement web et son souci du détail font de lui un développeur exceptionnel.",
        image: "/images/job.jpeg"
    },
    {
        name: "Marie Laurent",
        role: "Cheffe de Projet",
        company: "WebSolutions",
        quote: "Sa passion pour le développement web et son souci du détail font de lui un développeur exceptionnel.",
        image: "/images/job.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900 dark:via-black dark:to-blue-900">
      {/* Section Présentation */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold mb-6 text-blue-600">
            Bonjour, je suis Wilfried KONAN
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Développeur Web Full Stack passionné, je combine créativité technique et design élégant pour créer des expériences numériques uniques. Grâce à mes compétences et à ma grande capacité d'adaptation, je transforme des concepts complexes en solutions web intuitives et performantes.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contactez-moi
            </Link>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Télécharger CV
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-white p-4 bg-gray-800 text-white rounded-full">
            <Image 
              src="/images/profil1.jpeg" 
              alt="Portrait professionnel de Wilfried KONAN"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/groupe.jpeg" 
              alt="Parcours professionnel"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              Mon Parcours Professionnel
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Développeur Web Full Stack</h3>
                <p>Wecode by Epitech, Abidjan - 2024-Présent</p>
              </li>
              <li className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Infographe Professionel</h3>
                <p>Visuals Concepts, Abidjan - 2022-2024</p>
              </li>
              {/* <li className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Développeur Frontend</h3>
                <p>WebAgency, Lyon - 2020-2022</p>
              </li>
              <li className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Développeur Frontend</h3>
                <p>WebAgency, Lyon - 2020-2022</p>
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-600">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Ce qu'ils disent de moi
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
                <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                <div className="flex flex-col items-center mb-6">
                    <div className="w-40 h-40 mb-6 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                    />
                    </div>
                    <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {testimonial.role} - {testimonial.company}
                    </p>
                    </div>
                </div>
                <p className="italic text-center text-gray-700 dark:text-gray-300 text-lg">
                    <span className="text-4xl text-blue-500 mr-2">"</span>
                    {testimonial.quote}
                    <span className="text-4xl text-blue-500 ml-2">"</span>
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
}