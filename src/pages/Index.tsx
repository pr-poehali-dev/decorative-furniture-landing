import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/45feb2f1-fef2-4b58-81c6-36bcaf8f3d30.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-32 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
            Декоративная мебель
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-light leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)' }}>
            Уникальные предметы интерьера, созданные с вниманием к деталям и эстетике минимализма
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-foreground">Журнальные столики</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden group hover-scale border-none shadow-sm bg-card">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/f72b8c4d-7cde-4fe5-9420-136e1a544b5e.jpeg"
                alt="Деревянный журнальный столик"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Card>

          <Card className="overflow-hidden group hover-scale border-none shadow-sm bg-card">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/23c30f49-38f1-4bf1-9e75-0f4c0f175346.jpeg"
                alt="Стол из натурального дерева"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Card>

          <Card className="overflow-hidden group hover-scale border-none shadow-sm bg-card">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/5d3c2344-ac8a-44e5-acbf-f663614f6b7d.jpeg"
                alt="Круглый стол со скульптурным основанием"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-foreground">
            Контакты
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="Phone" size={24} className="text-muted-foreground" />
              <a href="tel:+79001234567" className="story-link text-foreground hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="Mail" size={24} className="text-muted-foreground" />
              <a href="mailto:info@furniture.ru" className="story-link text-foreground hover:text-primary transition-colors">
                info@furniture.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="MapPin" size={24} className="text-muted-foreground" />
              <span className="text-muted-foreground">Москва, ул. Примерная, 123</span>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" className="px-8 py-6 text-base font-normal">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Декоративная мебель. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;