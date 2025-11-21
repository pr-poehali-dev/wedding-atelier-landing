import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    date: ''
  });

  const services = [
    { title: 'Пошив свадебного платья', description: 'Создание уникального образа по индивидуальным меркам', icon: 'Sparkles' },
    { title: 'Индивидуальный дизайн', description: 'Разработка эксклюзивного эскиза с учётом ваших пожеланий', icon: 'Pencil' },
    { title: 'Подгонка и корректировка', description: 'Идеальная посадка на любую фигуру', icon: 'Scissors' },
    { title: 'Вышивка и декор', description: 'Ручная работа с элитными материалами', icon: 'Star' }
  ];

  const portfolio = [
    { id: 1, title: 'Классика', subtitle: 'Шёлковый атлас' },
    { id: 2, title: 'Минимализм', subtitle: 'Благородная простота' },
    { id: 3, title: 'Романтика', subtitle: 'Кружево ручной работы' },
    { id: 4, title: 'Модерн', subtitle: 'Архитектурные линии' }
  ];

  const testimonials = [
    { name: 'Анна М.', text: 'Платье превзошло все ожидания. Каждая деталь продумана с любовью.', rating: 5 },
    { name: 'Екатерина Л.', text: 'Профессионализм и тонкое чувство стиля. Благодарна за волшебство.', rating: 5 },
    { name: 'Мария К.', text: 'Это было платье моей мечты. Спасибо за идеальный день.', rating: 5 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
    setFormData({ name: '', phone: '', email: '', service: '', message: '', date: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-wider text-foreground">ATELIER</div>
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#home" className="hover:text-accent transition-colors">Главная</a>
            <a href="#collection" className="hover:text-accent transition-colors">Коллекция</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-accent transition-all">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-4">Запись на консультацию</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="date">Предпочитаемая дата</Label>
                  <Input 
                    id="date" 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-accent">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground tracking-tight leading-none">
              Свадебное ателье
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
              Создаём платья для самого важного дня
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-delay">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-accent text-lg px-8">
                    Записаться на примерку
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center mb-4">Запись на примерку</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name2">Имя</Label>
                      <Input 
                        id="name2" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone2">Телефон</Label>
                      <Input 
                        id="phone2" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="date2">Предпочитаемая дата</Label>
                      <Input 
                        id="date2" 
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-accent">
                      Записаться
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary hover:bg-secondary">
                Посмотреть коллекцию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Коллекция
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift overflow-hidden border-none">
              <div className="h-96 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-6xl">👰</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2">Классическая коллекция</h3>
                <p className="text-muted-foreground">Вневременная элегантность, проверенная десятилетиями</p>
              </CardContent>
            </Card>
            <Card className="hover-lift overflow-hidden border-none">
              <div className="h-96 bg-gradient-to-br from-background to-secondary flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2">Современная коллекция</h3>
                <p className="text-muted-foreground">Смелые решения для современной невесты</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Услуги ателье
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover-lift p-8 border-border">
                <Icon name={service.icon as any} size={40} className="text-accent mb-4" />
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {portfolio.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden border-none">
                <div className="h-80 bg-gradient-to-br from-background via-secondary to-muted flex flex-col items-center justify-center">
                  <h4 className="text-2xl mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Отзывы
          </h2>
          <div className="space-y-8">
            {testimonials.map((review, idx) => (
              <Card key={idx} className="p-8 border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg mb-4 text-foreground italic">"{review.text}"</p>
                <p className="text-muted-foreground">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
              <p>+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-accent" />
              <p>info@atelier.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
              <p>Москва, ул. Тверская, 10</p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent text-primary hover:bg-background text-lg px-8">
                Записаться на консультацию
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-4">Запись на консультацию</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name3">Имя</Label>
                  <Input 
                    id="name3" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="phone3">Телефон</Label>
                  <Input 
                    id="phone3" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email3">Email</Label>
                  <Input 
                    id="email3" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="message3">Сообщение</Label>
                  <Textarea 
                    id="message3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-primary hover:bg-background">
                  Отправить
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <footer className="py-8 px-6 bg-primary text-muted-foreground text-center border-t border-accent/20">
        <p className="text-sm">© 2024 ATELIER. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
