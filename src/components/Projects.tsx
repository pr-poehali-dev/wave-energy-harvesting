const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/c3babb35-6d32-40a7-8f3a-4f471e6d1b7f/files/3793e378-7903-4390-b572-408580f6efc6.jpg',
    title: 'Реставрация исторического фасада',
    category: 'Культурное наследие',
    year: '2024'
  },
  {
    image: 'https://cdn.poehali.dev/projects/c3babb35-6d32-40a7-8f3a-4f471e6d1b7f/files/2a1435ee-f605-4f2f-a306-4005a30dfb58.jpg',
    title: 'Реконструкция бизнес-центра',
    category: 'Коммерческая недвижимость',
    year: '2024'
  },
  {
    image: 'https://cdn.poehali.dev/projects/c3babb35-6d32-40a7-8f3a-4f471e6d1b7f/files/35c7d6fb-dc33-4c76-8430-0f5af4532ca4.jpg',
    title: 'Восстановление усадебного комплекса',
    category: 'Объект культурного наследия',
    year: '2023'
  },
  {
    image: 'https://cdn.poehali.dev/projects/c3babb35-6d32-40a7-8f3a-4f471e6d1b7f/files/0c118558-dec4-4627-adcc-406c4f19bc35.jpg',
    title: 'Техническое обследование ТЦ',
    category: 'Экспертиза конструкций',
    year: '2024'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center">
          Реализованные <span className="font-medium italic">проекты</span>
        </h2>
        <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Более 200 успешно завершённых объектов за 19 лет работы
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white/60 text-xs uppercase tracking-wide mb-2">
                  {project.category} • {project.year}
                </div>
                <h3 className="text-white text-xl font-medium">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
