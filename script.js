// =============================================================================
// DADOS DOS IMÓVEIS
// =============================================================================

const properties = [
    {
        id: 1,
        nome: "Casa Moderna com Piscina",
        tipo: "Casa",
        valor: 850000,
        localizacao: "Centro",
        quartos: 4,
        banheiros: 3,
        vagas: 2,
        arCondicionado: true,
        descricao: "Linda casa moderna com piscina, área gourmet e acabamento de primeira qualidade.",
        imagens: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
        ],
        badge: "novo"
    },
    {
        id: 2,
        nome: "Apartamento Alto Padrão",
        tipo: "Apartamento",
        valor: 650000,
        localizacao: "Jardim Paraíso",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        arCondicionado: true,
        descricao: "Apartamento luxuoso com vista panorâmica, próximo a todos os serviços.",
        imagens: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502672260066-6bc36a7d217c?w=800&h=600&fit=crop"
        ],
        badge: "destaque"
    },
    {
        id: 3,
        nome: "Terreno Comercial",
        tipo: "Terreno",
        valor: 450000,
        localizacao: "Vila Nova",
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        arCondicionado: false,
        descricao: "Terreno comercial em localização privilegiada, ideal para empreendimentos.",
        imagens: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
        ],
        badge: null
    },
    {
        id: 4,
        nome: "Sobrado Espaçoso",
        tipo: "Casa",
        valor: 1200000,
        localizacao: "Bairro Alto",
        quartos: 5,
        banheiros: 4,
        vagas: 4,
        arCondicionado: true,
        descricao: "Sobrado luxuoso com amplos ambientes, perfeito para famílias grandes.",
        imagens: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
        ],
        badge: "destaque"
    },
    {
        id: 5,
        nome: "Apartamento Compacto",
        tipo: "Apartamento",
        valor: 320000,
        localizacao: "Centro",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        arCondicionado: false,
        descricao: "Apartamento bem localizado, ideal para solteiros ou casais.",
        imagens: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
        ],
        badge: null
    },
    {
        id: 6,
        nome: "Casa em Condomínio",
        tipo: "Casa",
        valor: 980000,
        localizacao: "Jardim Paraíso",
        quartos: 4,
        banheiros: 3,
        vagas: 3,
        arCondicionado: true,
        descricao: "Casa em condomínio fechado com segurança 24h e área de lazer completa.",
        imagens: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop"
        ],
        badge: "novo"
    },
    {
        id: 7,
        nome: "Cobertura Duplex",
        tipo: "Cobertura",
        valor: 1800000,
        localizacao: "Centro",
        quartos: 4,
        banheiros: 4,
        vagas: 3,
        arCondicionado: true,
        descricao: "Cobertura duplex com piscina privativa e vista espetacular da cidade.",
        imagens: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
        ],
        badge: "destaque"
    },
    {
        id: 8,
        nome: "Apartamento Garden",
        tipo: "Apartamento",
        valor: 520000,
        localizacao: "Vila Nova",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        arCondicionado: true,
        descricao: "Apartamento garden com jardim privativo e churrasqueira.",
        imagens: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
        ],
        badge: null
    },
    {
        id: 9,
        nome: "Casa Colonial",
        tipo: "Casa",
        valor: 720000,
        localizacao: "Bairro Alto",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        arCondicionado: false,
        descricao: "Charmosa casa colonial completamente reformada, mantendo características originais.",
        imagens: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"
        ],
        badge: null
    },
    {
        id: 10,
        nome: "Studio Moderno",
        tipo: "Apartamento",
        valor: 280000,
        localizacao: "Centro",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        arCondicionado: true,
        descricao: "Studio moderno e funcional, perfeito para investimento ou moradia.",
        imagens: [
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop"
        ],
        badge: "novo"
    },
    {
        id: 11,
        nome: "Casa com Quintal Amplo",
        tipo: "Casa",
        valor: 680000,
        localizacao: "Jardim Paraíso",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        arCondicionado: false,
        descricao: "Casa térrea com amplo quintal, ideal para quem tem pets ou crianças.",
        imagens: [
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop"
        ],
        badge: null
    },
    {
        id: 12,
        nome: "Loft Industrial",
        tipo: "Apartamento",
        valor: 550000,
        localizacao: "Vila Nova",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        arCondicionado: true,
        descricao: "Loft estilo industrial com pé-direito alto e decoração exclusiva.",
        imagens: [
            "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&h=600&fit=crop"
        ],
        badge: "destaque"
    },
    {
        id: 13,
        nome: "Barracão",
        tipo: "Barracão",
        valor: 0,
        localizacao: "Av. Presidente Vargas, 2433, Centro - Rolândia/PR",
        quartos: 0,
        banheiros: 1,
        vagas: 0,
        arCondicionado: false,
        descricao: "Salão do lado esquerdo de quem olha de frente para o imóvel. O imóvel é composto por um salão com área total aproximada de 306,46 m², sendo 254,26 m² do salão principal (térreo), 5,05 m² de copa, 2,59 m² de área de serviços, 3,58 m² de sanitário (todos no térreo) e 40,95 m² de mezanino localizado na parte superior do salão principal, além de um pequeno corredor aos fundos. ITENS INCLUSOS: 16 luminárias de teto; 21 caixas de interruptores e energia; 2 portas de madeira (novas); 1 vaso sanitário com tampa e descarga (ambos novos); 1 pia de lavabo (nova); 1 caixa de energia na copa; 1 tanque (novo) na área de serviços; 3 janelas novas (área de serviços, copa e sanitário); 1 portão eletrônico com motor (novo); 1 escada para acesso ao mezanino; Vidros do mezanino (novos); Caixas de padrão de energia; Pisos de porcelanato novos e em perfeitas condições nas áreas de serviços, sanitário e copa, e azulejos no banheiro e na área de serviço.",
        imagens: [
            "Imovel-BarracaoTeste/Imovel1.jpg",
            "Imovel-BarracaoTeste/Imagem2.jpg",
            "Imovel-BarracaoTeste/Imagem4.png",
            "Imovel-BarracaoTeste/Imagem5.jpg",
            "Imovel-BarracaoTeste/Imagem6.jpg",
            "Imovel-BarracaoTeste/Imagem7.png",
            "Imovel-BarracaoTeste/Imagem8.png",
            "Imovel-BarracaoTeste/Imagem9.png",
            "Imovel-BarracaoTeste/Imagem10.png",
            "Imovel-BarracaoTeste/Imagem11.png",
            "Imovel-BarracaoTeste/Imagem12.png",
            "Imovel-BarracaoTeste/Imagem13.png",
            "Imovel-BarracaoTeste/Imagem14.png",
            "Imovel-BarracaoTeste/Imagem15.png",
            "Imovel-BarracaoTeste/Imagem16.png",
            "Imovel-BarracaoTeste/Imagem17.png",
            "Imovel-BarracaoTeste/Imagem18.jpg",
            "Imovel-BarracaoTeste/Imagem19.png"
        ],
        badge: "novo"
    }
];

// =============================================================================
// ESTADO DA APLICAÇÃO
// =============================================================================

let filteredProperties = [...properties];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Filtros ativos
let activeFilters = {
    tipo: '',
    localizacao: '',
    valorMax: 2000000,
    quartosMin: 0,
    searchTerm: ''
};

// =============================================================================
// INICIALIZAÇÃO
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Renderizar imóveis em destaque imediatamente (só na página inicial)
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        renderFeaturedProperties();
    }
    
    // Simular carregamento (skeleton) para grid principal (só na página de imóveis)
    const propertiesGrid = document.getElementById('propertiesGrid');
    if (propertiesGrid && !featuredGrid) {
        setTimeout(() => {
            renderProperties(properties);
            updatePropertiesCount();
        }, 1500);
    }
    
    // Inicializar event listeners
    initEventListeners();
    
    // Atualizar display do filtro de valor (se existir)
    updateValueDisplay();
    
    // Inicializar tabs do hero (se existirem)
    initHeroTabs();
    
    // Inicializar scroll effect do header
    initHeaderScroll();
    
    console.log('✅ Site carregado com sucesso!');
    console.log(`📊 Total de imóveis: ${properties.length}`);
    console.log(`⭐ Imóveis em destaque: ${document.getElementById('featuredGrid') ? 'Renderizados' : 'Não encontrado'}`);
});

// =============================================================================
// EVENT LISTENERS
// =============================================================================

function initEventListeners() {
    // Busca
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    // Filtros (só existem na página imoveis.html)
    const filterValor = document.getElementById('filterValor');
    const filterTipo = document.getElementById('filterTipo');
    const filterLocalizacao = document.getElementById('filterLocalizacao');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    console.log('🎯 Inicializando event listeners...');
    console.log('Encontrado filterValor:', !!filterValor);
    console.log('Encontrado filterTipo:', !!filterTipo);
    console.log('Encontrado filterLocalizacao:', !!filterLocalizacao);
    console.log('Encontrado applyFiltersBtn:', !!applyFiltersBtn);
    console.log('Encontrado clearFiltersBtn:', !!clearFiltersBtn);
    
    if (filterValor) {
        filterValor.addEventListener('input', updateValueDisplay);
    }
    
    if (filterTipo) {
        filterTipo.addEventListener('change', () => {
            console.log('📝 Tipo de imóvel alterado para:', filterTipo.value);
        });
    }
    
    if (filterLocalizacao) {
        filterLocalizacao.addEventListener('change', () => {
            console.log('📍 Localização alterada para:', filterLocalizacao.value);
        });
    }
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            console.log('✨ Botão "Aplicar Filtros" clicado');
            applyFilters();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            console.log('🔄 Botão "Limpar Filtros" clicado');
            clearFilters();
        });
    }
    
    // Botões de quartos
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('🔘 Botões de filtro encontrados:', filterBtns.length);
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log('🖱️ Clique no botão:', e.target.dataset.quartos);
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                applyFilters(); // IMPORTANTE: Chamar applyFilters após selecionar
            });
        });
    }
    
    // Menu mobile
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// =============================================================================
// HERO TABS
// =============================================================================

function initHeroTabs() {
    const tabs = document.querySelectorAll('.hero-tab');
    const searchInput = document.getElementById('searchInput');
    
    if (tabs.length === 0 || !searchInput) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active de todos
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adiciona active no clicado
            tab.classList.add('active');
            
            // Pegar tipo selecionado
            const tipo = tab.dataset.tipo;
            
            // Se for cidade, focar no campo de busca
            if (tipo === 'cidade') {
                searchInput.focus();
                searchInput.placeholder = 'Digite a cidade (ex: Londrina, Cambé, Ibiporã...)';
            } else {
                searchInput.placeholder = 'Rua, bairro, cidade, empreendimento, código';
            }
        });
    });
}

// =============================================================================
// HEADER SCROLL EFFECT
// =============================================================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =============================================================================
// RENDERIZAÇÃO DE IMÓVEIS
// =============================================================================

function renderFeaturedProperties() {
    const grid = document.getElementById('featuredGrid');
    
    if (!grid) return;
    
    // Pegar os 4 primeiros imóveis (com prioridade para os com badge)
    let featured = properties.filter(p => p.badge).slice(0, 4);
    
    // Se não houver 4 com badge, completar com os primeiros disponíveis
    if (featured.length < 4) {
        const remaining = properties.filter(p => !p.badge).slice(0, 4 - featured.length);
        featured = [...featured, ...remaining];
    }
    
    if (featured.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhum imóvel disponível</p>';
        return;
    }
    
    grid.innerHTML = featured.map(property => createPropertyCard(property)).join('');
    
    // Adicionar event listeners aos cards
    attachPropertyEventListeners();
}

function renderProperties(propertiesToRender) {
    const grid = document.getElementById('propertiesGrid');
    
    if (propertiesToRender.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem; color: #6c757d;">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <h3 style="color: var(--text-dark); margin-bottom: 0.5rem;">Nenhum imóvel encontrado</h3>
                <p style="color: var(--text-gray);">Tente ajustar os filtros para encontrar o que procura.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = propertiesToRender.map(property => createPropertyCard(property)).join('');
    
    // Adicionar event listeners aos cards
    attachPropertyEventListeners();
}

function createPropertyCard(property) {
    const isFavorite = favorites.includes(property.id);
    const badgeHTML = property.badge ? `
        <span class="property-badge badge-${property.badge}">
            ${property.badge === 'novo' ? 'Novo' : 'Destaque'}
        </span>
    ` : '';
    
    return `
        <div class="property-card fade-in" data-id="${property.id}">
            ${badgeHTML}
            
            <button class="property-favorite ${isFavorite ? 'active' : ''}" 
                    data-id="${property.id}" 
                    aria-label="Adicionar aos favoritos">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            
            <img src="${property.imagens[0]}" 
                 alt="${property.nome}" 
                 class="property-image"
                 loading="lazy">
            
            <div class="property-content">
                <p class="property-type">${property.tipo}</p>
                <h3 class="property-title">${property.nome}</h3>
                
                <div class="property-location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${property.localizacao}</span>
                </div>
                
                <p class="property-price">R$ ${formatPrice(property.valor)}</p>
                
                ${property.quartos > 0 ? `
                    <div class="property-features">
                        <div class="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            <span>${property.quartos} ${property.quartos === 1 ? 'quarto' : 'quartos'}</span>
                        </div>
                        <div class="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0l-1 1a1.5 1.5 0 0 0 0 1L7 9"></path>
                                <path d="m21 15-3-3-1.5 1.5a1.5 1.5 0 0 1-1 .5 1.5 1.5 0 0 1-1-.5L9 9"></path>
                                <path d="M7 13v5a2 2 0 0 0 2 2h5"></path>
                                <circle cx="17" cy="17" r="5"></circle>
                            </svg>
                            <span>${property.banheiros} ${property.banheiros === 1 ? 'banheiro' : 'banheiros'}</span>
                        </div>
                        ${property.vagas > 0 ? `
                            <div class="feature">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
                                    <circle cx="6.5" cy="16.5" r="2.5"></circle>
                                    <circle cx="16.5" cy="16.5" r="2.5"></circle>
                                </svg>
                                <span>${property.vagas} ${property.vagas === 1 ? 'vaga' : 'vagas'}</span>
                            </div>
                        ` : ''}
                        ${property.arCondicionado ? `
                            <div class="feature">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                                <span>Ar-cond.</span>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
                
                <button class="property-action" data-id="${property.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Falar com corretor
                </button>
            </div>
        </div>
    `;
}

function attachPropertyEventListeners() {
    // Favoritos
    document.querySelectorAll('.property-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(parseInt(btn.dataset.id));
        });
    });
    
    // WhatsApp
    document.querySelectorAll('.property-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            contactWhatsApp(parseInt(btn.dataset.id));
        });
    });
}

// =============================================================================
// FUNCIONALIDADES
// =============================================================================

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchSelect = document.getElementById('searchSelect');
    
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedType = searchSelect ? searchSelect.value.toLowerCase() : '';
    
    // Detectar se estamos na página inicial
    const isIndexPage = !window.location.pathname.includes('imoveis.html');
    
    // Se estamos na página inicial, redirecionar para página de imóveis com parâmetros
    if (isIndexPage) {
        let queryParams = [];
        
        if (searchTerm) {
            queryParams.push(`search=${encodeURIComponent(searchTerm)}`);
        }
        
        if (selectedType) {
            queryParams.push(`tipo=${encodeURIComponent(selectedType)}`);
        }
        
        const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
        
        // Obter o caminho base correto
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
        window.location.href = basePath + 'imoveis.html' + queryString;
        return;
    }
    
    // Se estamos na página de imóveis, aplicar filtros
    activeFilters.searchTerm = searchTerm;
    
    if (selectedType) {
        activeFilters.tipo = selectedType;
        const filterTipo = document.getElementById('filterTipo');
        if (filterTipo) {
            filterTipo.value = selectedType.charAt(0).toUpperCase() + selectedType.slice(1);
        }
    }
    
    filteredProperties = properties.filter(property => {
        let matches = true;
        
        // Filtro de busca
        if (activeFilters.searchTerm) {
            matches = matches && (
                property.nome.toLowerCase().includes(activeFilters.searchTerm) ||
                property.tipo.toLowerCase().includes(activeFilters.searchTerm) ||
                property.localizacao.toLowerCase().includes(activeFilters.searchTerm) ||
                property.descricao.toLowerCase().includes(activeFilters.searchTerm) ||
                property.id.toString().includes(activeFilters.searchTerm)
            );
        }
        
        // Filtro de tipo
        if (activeFilters.tipo) {
            matches = matches && property.tipo.toLowerCase() === activeFilters.tipo.toLowerCase();
        }
        
        return matches;
    });
    
    renderProperties(filteredProperties);
    updatePropertiesCount();
}

// Aplicar filtros da URL quando carregar a página de imóveis
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const tipoParam = urlParams.get('tipo');
    
    if (searchParam || tipoParam) {
        const searchInput = document.getElementById('searchInput');
        const filterTipo = document.getElementById('filterTipo');
        
        if (searchParam && searchInput) {
            searchInput.value = searchParam;
            activeFilters.searchTerm = searchParam.toLowerCase();
        }
        
        if (tipoParam && filterTipo) {
            const tipoCapitalized = tipoParam.charAt(0).toUpperCase() + tipoParam.slice(1);
            filterTipo.value = tipoCapitalized;
            activeFilters.tipo = tipoCapitalized;
        }
        
        // Aplicar filtros
        applyFilters();
    }
});

function applyFilters() {
    console.log('🔍 APPLYFILTERS CHAMADO');
    
    // Obter valores dos filtros
    const filterTipo = document.getElementById('filterTipo');
    const filterLocalizacao = document.getElementById('filterLocalizacao');
    const filterValor = document.getElementById('filterValor');
    const activeQuartosBtn = document.querySelector('.filter-btn.active');
    
    console.log('filterTipo:', filterTipo?.value || 'NOT FOUND');
    console.log('filterLocalizacao:', filterLocalizacao?.value || 'NOT FOUND');
    console.log('filterValor:', filterValor?.value || 'NOT FOUND');
    console.log('activeQuartosBtn:', activeQuartosBtn?.dataset.quartos || 'NONE');
    
    if (!filterTipo || !filterLocalizacao || !filterValor) {
        console.warn('❌ Um ou mais elementos de filtro não foram encontrados');
        return;
    }
    
    activeFilters.tipo = filterTipo.value;
    activeFilters.localizacao = filterLocalizacao.value;
    activeFilters.valorMax = parseInt(filterValor.value);
    activeFilters.quartosMin = activeQuartosBtn ? parseInt(activeQuartosBtn.dataset.quartos) || 0 : 0;
    
    console.log('📋 Filtros aplicados:', activeFilters);
    
    // Aplicar filtros
    filteredProperties = properties.filter(property => {
        const tipoMatch = !activeFilters.tipo || property.tipo === activeFilters.tipo;
        const localizacaoMatch = !activeFilters.localizacao || property.localizacao === activeFilters.localizacao;
        const valorMatch = property.valor <= activeFilters.valorMax;
        const quartosMatch = property.quartos >= activeFilters.quartosMin;
        const searchMatch = !activeFilters.searchTerm || 
                          property.nome.toLowerCase().includes(activeFilters.searchTerm) ||
                          property.tipo.toLowerCase().includes(activeFilters.searchTerm) ||
                          property.localizacao.toLowerCase().includes(activeFilters.searchTerm);
        
        return tipoMatch && localizacaoMatch && valorMatch && quartosMatch && searchMatch;
    });
    
    console.log('✅ Imóveis encontrados após filtro:', filteredProperties.length);
    console.log('Imóveis:', filteredProperties.map(p => p.nome));
    
    renderProperties(filteredProperties);
    updatePropertiesCount();
    
    // Scroll suave até os resultados
    const propertiesGrid = document.getElementById('propertiesGrid');
    if (propertiesGrid) {
        propertiesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function clearFilters() {
    // Resetar formulário
    const filterTipo = document.getElementById('filterTipo');
    const filterLocalizacao = document.getElementById('filterLocalizacao');
    const filterValor = document.getElementById('filterValor');
    const searchInput = document.getElementById('searchInput');
    
    if (filterTipo) filterTipo.value = '';
    if (filterLocalizacao) filterLocalizacao.value = '';
    if (filterValor) filterValor.value = 2000000;
    if (searchInput) searchInput.value = '';
    
    // Resetar botões de quartos
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const defaultQuartosBtn = document.querySelector('.filter-btn[data-quartos="0"]');
    if (defaultQuartosBtn) defaultQuartosBtn.classList.add('active');
    
    // Resetar filtros ativos
    activeFilters = {
        tipo: '',
        localizacao: '',
        valorMax: 2000000,
        quartosMin: 0,
        searchTerm: ''
    };
    
    // Atualizar display
    updateValueDisplay();
    filteredProperties = [...properties];
    renderProperties(filteredProperties);
    updatePropertiesCount();
}

function toggleFavorite(id) {
    const btn = document.querySelector(`.property-favorite[data-id="${id}"]`);
    
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
        btn.classList.remove('active');
    } else {
        favorites.push(id);
        btn.classList.add('active');
    }
    
    // Salvar no localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function contactWhatsApp(id) {
    const property = properties.find(p => p.id === id);
    if (!property) return;
    
    const phoneNumber = '5543999016628';
    const message = `Olá, tenho interesse no imóvel: ${property.nome} localizado em ${property.localizacao} no valor de R$ ${formatPrice(property.valor)}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// =============================================================================
// UTILIDADES
// =============================================================================

function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function updateValueDisplay() {
    const slider = document.getElementById('filterValor');
    const display = document.getElementById('filterValorDisplay');
    if (slider && display) {
        display.textContent = `R$ ${formatPrice(slider.value)}`;
    }
}

function updatePropertiesCount() {
    const count = document.getElementById('propertiesCount');
    if (count) {
        const total = filteredProperties.length;
        count.textContent = `${total} ${total === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}`;
    }
}

// =============================================================================
// MODAL DE DETALHES DO IMÓVEL
// =============================================================================

let currentPropertyImages = [];
let currentImageIndex = 0;
let currentPropertyData = null;

// Abrir modal ao clicar no card
document.addEventListener('click', (e) => {
    const card = e.target.closest('.property-card');
    if (card && !e.target.closest('.property-favorite')) {
        const propertyId = parseInt(card.dataset.id);
        openPropertyModal(propertyId);
    }
});

function openPropertyModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    currentPropertyData = property;
    currentPropertyImages = property.imagens;
    currentImageIndex = 0;
    
    const modal = document.getElementById('propertyModal');
    const isFavorite = favorites.includes(propertyId);
    
    // Preencher informações
    document.getElementById('modalType').textContent = property.tipo;
    document.getElementById('modalTitle').textContent = property.nome;
    document.getElementById('modalLocation').textContent = property.localizacao;
    document.getElementById('modalPrice').textContent = `R$ ${formatPrice(property.valor)}`;
    document.getElementById('modalDescription').textContent = property.descricao;
    
    // Atualizar link do WhatsApp
    const modalWhatsapp = document.getElementById('modalWhatsapp');
    const message = `Olá! Tenho interesse no imóvel: ${property.nome} - ${property.localizacao} (Cód: ${property.id})`;
    modalWhatsapp.href = `https://wa.me/5543999016628?text=${encodeURIComponent(message)}`;
    
    // Atualizar botão de favoritos
    const modalFavorite = document.getElementById('modalFavorite');
    if (isFavorite) {
        modalFavorite.classList.add('active');
        modalFavorite.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Favoritado
        `;
    } else {
        modalFavorite.classList.remove('active');
        modalFavorite.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Favoritar
        `;
    }
    
    // Preencher características
    const featuresHTML = [];
    if (property.quartos > 0) {
        featuresHTML.push(`
            <div class="modal-feature">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>${property.quartos} ${property.quartos === 1 ? 'quarto' : 'quartos'}</span>
            </div>
        `);
    }
    if (property.banheiros > 0) {
        featuresHTML.push(`
            <div class="modal-feature">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0l-1 1a1.5 1.5 0 0 0 0 1L7 9"></path>
                    <path d="m21 15-3-3-1.5 1.5a1.5 1.5 0 0 1-1 .5 1.5 1.5 0 0 1-1-.5L9 9"></path>
                    <path d="M7 13v5a2 2 0 0 0 2 2h5"></path>
                    <circle cx="17" cy="17" r="5"></circle>
                </svg>
                <span>${property.banheiros} ${property.banheiros === 1 ? 'banheiro' : 'banheiros'}</span>
            </div>
        `);
    }
    if (property.vagas > 0) {
        featuresHTML.push(`
            <div class="modal-feature">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
                    <circle cx="6.5" cy="16.5" r="2.5"></circle>
                    <circle cx="16.5" cy="16.5" r="2.5"></circle>
                </svg>
                <span>${property.vagas} ${property.vagas === 1 ? 'vaga' : 'vagas'}</span>
            </div>
        `);
    }
    if (property.arCondicionado) {
        featuresHTML.push(`
            <div class="modal-feature">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <span>Ar Condicionado</span>
            </div>
        `);
    }
    document.getElementById('modalFeatures').innerHTML = featuresHTML.join('');
    
    // Configurar galeria
    updateModalGallery();
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalGallery() {
    const mainImage = document.getElementById('modalMainImage');
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    const currentIndex = document.getElementById('currentImageIndex');
    const totalImages = document.getElementById('totalImages');
    
    // Atualizar imagem principal
    mainImage.src = currentPropertyImages[currentImageIndex];
    mainImage.alt = currentPropertyData.nome;
    
    // Atualizar contador
    currentIndex.textContent = currentImageIndex + 1;
    totalImages.textContent = currentPropertyImages.length;
    
    // Criar thumbnails
    thumbnailsContainer.innerHTML = currentPropertyImages.map((img, index) => `
        <div class="gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}" data-index="${index}">
            <img src="${img}" alt="Imagem ${index + 1}">
        </div>
    `).join('');
}

// Fechar modal
document.getElementById('modalClose')?.addEventListener('click', closePropertyModal);
document.querySelector('.modal-overlay')?.addEventListener('click', closePropertyModal);

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Navegação da galeria
document.getElementById('galleryPrev')?.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentPropertyImages.length) % currentPropertyImages.length;
    updateModalGallery();
});

document.getElementById('galleryNext')?.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentPropertyImages.length;
    updateModalGallery();
});

// Click nas thumbnails
document.addEventListener('click', (e) => {
    const thumbnail = e.target.closest('.gallery-thumbnail');
    if (thumbnail) {
        currentImageIndex = parseInt(thumbnail.dataset.index);
        updateModalGallery();
    }
});

// Favoritar do modal
document.getElementById('modalFavorite')?.addEventListener('click', () => {
    if (currentPropertyData) {
        toggleFavorite(currentPropertyData.id);
        openPropertyModal(currentPropertyData.id); // Atualizar modal
    }
});

// Teclas do teclado para navegação
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('propertyModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closePropertyModal();
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + currentPropertyImages.length) % currentPropertyImages.length;
            updateModalGallery();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % currentPropertyImages.length;
            updateModalGallery();
        }
    }
});

// =============================================================================
// CONSOLE INFO
// =============================================================================

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║           🏠 EDUBER ADMINISTRADORA DE IMOVEIS LTDA           ║
║                   Imobiliária de Confiança                   ║
║                                                               ║
║   ✅ ${properties.length} imóveis cadastrados                              ║
║   ✅ Sistema de filtros avançado                             ║
║   ✅ Favoritos com localStorage                              ║
║   ✅ Integração WhatsApp                                     ║
║   ✅ Design responsivo e moderno                             ║
║   ✅ Modal de detalhes com galeria                           ║
║                                                               ║
║   Site desenvolvido com HTML, CSS e JavaScript puro          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`);
