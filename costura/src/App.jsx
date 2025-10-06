import { useState, useEffect } from 'react';
import { Button } from '../src/components/ui/button';
import { Card, CardContent } from '../src/components/ui/card';
import { Input } from '../src/components/ui/input';
import { Scissors, Star, Users, Award, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css'; // Importa o arquivo CSS finalizado
import atelier1 from './assets/atelie-moderno.jpg';
import atelier2 from './assets/atelie.jpg';
import costureira1 from './assets/costurando.jpg';
import costureira2 from './assets/costureira.jpg';

function App() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pelo interesse! Em breve você receberá mais informações no email: ${email}`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.div
            className="hero-text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-badge"
            >
              <Sparkles className="icon-small" />
              <span className="font-semibold">Oferta Exclusiva por Tempo Limitado!</span>
            </motion.div>

            <h1 className="hero-title">Desvende o Mundo da Costura</h1>
            <p className="hero-subtitle">Transforme sua Paixão em Habilidade: O Guia Completo para Costurar Roupas do Zero ao Avançado!</p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Button
                className="hero-cta-button"
                onClick={() => document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Quero Começar Agora! <ArrowRight className="icon-inline" />
              </Button>
            </motion.div>

            <motion.div className="countdown-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <div className="countdown-item">
                <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="countdown-label">Horas</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="countdown-label">Minutos</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="countdown-label">Segundos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="wave-decoration">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div className="container" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="stats-grid">
            {[
              { icon: Users, number: '10.000+', label: 'Alunos Satisfeitos' },
              { icon: Star, number: '4.9/5', label: 'Avaliação Média' },
              { icon: Award, number: '100%', label: 'Garantia de Satisfação' },
              { icon: Clock, number: '24/7', label: 'Acesso Vitalício' }
            ].map((stat, index) => {
              const Icon = stat.icon; // Correção: Atribuir a uma variável com letra maiúscula
              return (
                <motion.div key={index} variants={fadeInUp} className="stat-item">
                  <div className="stat-icon-wrapper">
                    <Icon className="icon-large" />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Problem/Solution Section */}
      <section className="problem-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-header">
            <h2 className="section-title">Este Infoproduto é Para Você Que:</h2>
          </motion.div>
          <div className="problem-grid">
            {[
              'Quer aprender a costurar do zero, mas não sabe por onde começar',
              'Já tem alguma experiência, mas deseja aprimorar suas técnicas',
              'Sonha em ter um guarda-roupa exclusivo, feito sob medida',
              'Busca uma nova paixão, hobby relaxante ou fonte de renda extra',
              'Está cansada de roupas que não vestem bem',
              'Quer expressar sua criatividade através da moda'
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="problem-card">
                  <CardContent className="problem-card-content">
                    <CheckCircle className="icon-medium" />
                    <p className="problem-card-text">{item}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-header">
            <h2 className="section-title">Veja o Que Você Vai Conquistar</h2>
            <p className="section-subtitle">Crie seu próprio atelier dos sonhos e desenvolva habilidades profissionais de costura! Clique nas imagens abaixo para descobrir mais sobre o que você conquistará</p>

          </motion.div>
          <div className="gallery-grid">
            {[
              { src: atelier1, alt: 'Fundamentos e a Técnica' },
              { src: costureira1, alt: 'Técnicas de Acabamento e Montagem' },
              { src: atelier2, alt: 'Carreira e Empreendedorismo' },
              { src: costureira2, alt: ' Como Viver de Costura (O Negócio)' }
            ].map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="gallery-item">
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <p className="gallery-text">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-header">
            <h2 className="section-title">O Que Você Vai Aprender e Conquistar</h2>
            <p className="section-subtitle">Um programa completo que te guia do básico ao avançado com técnicas profissionais</p>
          </motion.div>
          <div className="benefits-grid">
            {[
              { title: 'Dominar os Fundamentos', description: 'Conheça os tipos de tecidos, linhas, agulhas e máquinas de costura. Aprenda a manusear sua máquina com segurança e eficiência.', icon: Scissors },
              { title: 'Modelagem Simplificada', description: 'Entenda como tirar medidas, interpretar moldes e fazer ajustes para criar peças que se encaixam perfeitamente.', icon: Star },
              { title: 'Técnicas Essenciais', description: 'Aprenda a cortar tecidos com precisão, costurar retas e curvas, fazer acabamentos impecáveis e muito mais.', icon: Award },
              { title: 'Crie Peças Variadas', description: 'De saias e blusas simples a vestidos complexos e peças de alfaiataria, você terá o conhecimento completo.', icon: Sparkles },
              { title: 'Desenvolva Sua Criatividade', description: 'Liberte sua imaginação e personalize suas criações, transformando ideias em realidade.', icon: Star },
              { title: 'Confiança e Independência', description: 'Sinta a satisfação de vestir algo feito por você, com seu toque pessoal e qualidade superior.', icon: CheckCircle }
            ].map((benefit, index) => {
              const Icon = benefit.icon; // Correção
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="benefit-card">
                    <CardContent className="benefit-card-content">
                      <div className="benefit-icon-wrapper">
                        <Icon className="icon-large" />
                      </div>
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-header">
            <h2 className="section-title">Conteúdo do Infoproduto</h2>
            <p className="section-subtitle">4 módulos completos + bônus exclusivos para acelerar seu aprendizado</p>
          </motion.div>
          <div className="modules-container">
            {[
              { module: 'Módulo 1', title: 'Primeiros Passos na Costura', topics: ['Introdução à máquina de costura: tipos e funcionamento', 'Materiais e ferramentas essenciais', 'Como escolher tecidos e linhas', 'Exercícios práticos de costura reta e curva'] },
              { module: 'Módulo 2', title: 'Modelagem e Medidas', topics: ['Tirando medidas do corpo corretamente', 'Entendendo e adaptando moldes', 'Ajustes básicos de modelagem'] },
              { module: 'Módulo 3', title: 'Técnicas de Costura Intermediárias', topics: ['Acabamentos: bainhas, costuras francesas, overloque', 'Inserção de zíperes e botões', 'Criação de golas e punhos'] },
              { module: 'Módulo 4', title: 'Projetos Práticos e Avançados', topics: ['Costura de saias, blusas, calças e vestidos', 'Técnicas de alfaiataria básica', 'Customização e upcycling de roupas'] }
            ].map((module, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="module-card">
                  <CardContent className="module-card-content">
                    <div className="module-number">
                      <span className="module-number-text">{index + 1}</span>
                    </div>
                    <div className="module-details">
                      <div className="module-tag">{module.module}</div>
                      <h3 className="module-title">{module.title}</h3>
                      <ul className="module-topics">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="module-topic-item">
                            <CheckCircle className="icon-small" />
                            <span className="module-topic-text">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="bonus-card">
                <CardContent className="bonus-card-content">
                  <div className="bonus-header">
                    <div className="bonus-badge">
                      <Sparkles className="icon-small" />
                      BÔNUS EXCLUSIVOS
                    </div>
                  </div>
                  <div className="bonus-grid">
                    {[
                      'Biblioteca de moldes prontos para download',
                      'Comunidade VIP de alunos para troca de experiências',
                      'Aulas ao vivo mensais para tirar dúvidas'
                    ].map((bonus, index) => (
                      <div key={index} className="bonus-item">
                        <Star className="icon-medium" />
                        <span className="bonus-text">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-header">
            <h2 className="section-title">O Que Nossos Alunos Dizem</h2>
            <p className="section-subtitle">Milhares de pessoas já transformaram suas vidas com nosso infoproduto</p>
          </motion.div>
          <div className="testimonials-grid">
            {[
              { name: 'Maria Silva', role: 'Iniciante', text: 'Nunca imaginei que conseguiria costurar tão bem! O curso é incrível e super didático. Já fiz meu primeiro vestido!', rating: 5 },
              { name: 'Ana Paula', role: 'Empreendedora', text: 'Comecei como hobby e hoje tenho meu próprio ateliê. Este infoproduto mudou minha vida profissional!', rating: 5 },
              { name: 'Juliana Costa', role: 'Designer', text: 'As técnicas ensinadas são profissionais e muito bem explicadas. Recomendo para todos os níveis!', rating: 5 }
            ].map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="testimonial-card">
                  <CardContent className="testimonial-card-content">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="icon-small star-filled" />
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div>
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-role">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="cta-inner-container">
            <h2 className="cta-title">Não Perca Mais Tempo!</h2>
            <p className="cta-subtitle">Comece Hoje Mesmo a Criar a Moda que Você Sempre Sonhou!</p>
            <div className="cta-box">
              <div className="price-original">R$ 497</div>
              <div className="price-final">R$ 197</div>
              <div className="price-discount">Desconto de 60% - Oferta por Tempo Limitado!</div>
              <form onSubmit={handleSubmit} className="cta-form">
                <div className="cta-form-group">
                  <Input type="email" placeholder="Seu melhor e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="cta-input" />
                  <Button type="submit" className="cta-submit-button">Garantir Minha Vaga!</Button>
                </div>
              </form>
              <div className="cta-info">
                <CheckCircle className="icon-small" />
                <span>Acesso imediato após a confirmação</span>
              </div>
            </div>
            <div className="guarantees-grid">
              <div className="guarantee-item">
                <CheckCircle className="icon-large" />
                <div className="font-semibold">Garantia de 30 Dias</div>
              </div>
              <div className="guarantee-item">
                <CheckCircle className="icon-large" />
                <div className="font-semibold">Acesso Vitalício</div>
              </div>
              <div className="guarantee-item">
                <CheckCircle className="icon-large" />
                <div className="font-semibold">Certificado de Conclusão</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <Scissors className="icon-large" />
            <span className="footer-title">Infoproduto de Costura</span>
          </div>
          <p className="footer-subtitle">Transforme sua paixão em habilidade profissional</p>
          <div className="footer-copyright">© 2025 Infoproduto de Costura. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;