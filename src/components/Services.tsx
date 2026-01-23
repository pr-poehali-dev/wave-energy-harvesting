import Icon from '@/components/ui/icon'

const services = [
  {
    icon: 'Landmark',
    title: 'Реставрация',
    description: 'Восстановление объектов культурного наследия с сохранением исторической ценности и аутентичности'
  },
  {
    icon: 'Pencil',
    title: 'Проектирование',
    description: 'Разработка проектной документации для реконструкции и нового строительства любой сложности'
  },
  {
    icon: 'Search',
    title: 'Обследование',
    description: 'Техническая экспертиза зданий и сооружений с применением современного оборудования'
  },
  {
    icon: 'Hammer',
    title: 'Реконструкция',
    description: 'Комплексная модернизация зданий с улучшением технических и эксплуатационных характеристик'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center">
          Наши <span className="font-medium italic">услуги</span>
        </h2>
        <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Полный спектр работ от обследования до сдачи объекта
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="mb-6">
                <Icon name={service.icon} size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
