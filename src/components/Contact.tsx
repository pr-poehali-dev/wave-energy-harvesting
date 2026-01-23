import Icon from '@/components/ui/icon'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
          Готовы <span className="font-medium italic">обсудить</span> проект?
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами для получения консультации и расчёта стоимости работ
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            <Icon name="MessageCircle" size={20} />
            Написать в Telegram
          </a>
          
          <a
            href="tel:+79999999999"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
          >
            <Icon name="Phone" size={20} />
            +7 (999) 999-99-99
          </a>
        </div>
        
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-white font-medium mb-2">Адрес</h3>
              <p className="text-white/60 text-sm">
                г. Москва, ул. Примерная, д. 1
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Email</h3>
              <a href="mailto:info@stroyrestav.ru" className="text-white/60 text-sm hover:text-white transition-colors">
                info@stroyrestav.ru
              </a>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Режим работы</h3>
              <p className="text-white/60 text-sm">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: выходной
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
