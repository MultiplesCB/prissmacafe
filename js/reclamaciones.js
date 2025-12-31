/* ============================================
   RECLAMACIONES PAGE JAVASCRIPT - Prissma Café
   Funcionalidad específica para reclamaciones.html
   ============================================ */

// Insert current date
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('es-PE', dateOptions);

// Datos de ubicación - Departamentos, Provincias y Distritos del Perú
const ubicacionData = {
    "Ucayali": {
        "Coronel Portillo": ["Callería", "Yarinacocha", "Masisea", "Campoverde", "Iparia", "Nueva Requena", "Manantay"],
        "Atalaya": ["Raymondi", "Sepahua", "Tahuania", "Yurúa"],
        "Padre Abad": ["Aguaytía", "Alexander Von Humboldt", "Curimaná", "Irazola", "Neshuya"],
        "Purús": ["Purús"]
    },
    "Lima": {
        "Lima": ["Lima", "Ancón", "Ate", "Barranco", "Breña", "Carabayllo", "Chorrillos", "Comas", "Independencia", "Jesús María", "La Molina", "La Victoria", "Lince", "Los Olivos", "Lurigancho", "Lurín", "Magdalena del Mar", "Miraflores", "Pachacámac", "Pueblo Libre", "Puente Piedra", "Rímac", "San Borja", "San Isidro", "San Juan de Lurigancho", "San Juan de Miraflores", "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita", "Santiago de Surco", "Surquillo", "Villa El Salvador", "Villa María del Triunfo"],
        "Barranca": ["Barranca", "Paramonga", "Pativilca", "Supe", "Supe Puerto"],
        "Cañete": ["San Vicente de Cañete", "Asia", "Chilca", "Imperial", "Lunahuaná", "Mala", "Nuevo Imperial"],
        "Huaral": ["Huaral", "Aucallama", "Chancay", "Ihuarí"],
        "Huarochirí": ["Matucana", "Ricardo Palma", "San Bartolomé", "Santa Eulalia"],
        "Huaura": ["Huacho", "Hualmay", "Huaura", "Sayán", "Vegueta"],
        "Yauyos": ["Yauyos", "Alis", "Huancaya", "Tupe", "Viñac"]
    },
    "Arequipa": {
        "Arequipa": ["Arequipa", "Alto Selva Alegre", "Cayma", "Cerro Colorado", "Characato", "Jacobo Hunter", "José Luis Bustamante y Rivero", "La Joya", "Mariano Melgar", "Miraflores", "Paucarpata", "Sachaca", "Socabaya", "Tiabaya", "Yanahuara", "Yura"],
        "Camaná": ["Camaná", "José María Quimper", "Nicolás de Piérola", "Ocoña", "Quilca"],
        "Caravelí": ["Caravelí", "Acarí", "Atico", "Chala", "Yauca"],
        "Castilla": ["Aplao", "Orcopampa", "Pampacolca", "Viraco"],
        "Caylloma": ["Chivay", "Achoma", "Cabanaconde", "Majes"],
        "Islay": ["Mollendo", "Cocachacra", "Mejía", "Punta de Bombón"]
    },
    "Cusco": {
        "Cusco": ["Cusco", "Ccorca", "Poroy", "San Jerónimo", "San Sebastián", "Santiago", "Saylla", "Wanchaq"],
        "Acomayo": ["Acomayo", "Acopia", "Pomacanchi", "Sangarará"],
        "Anta": ["Anta", "Ancahuasi", "Limatambo", "Mollepata"],
        "Calca": ["Calca", "Lamay", "Pisac", "Yanatile"],
        "Canchis": ["Sicuani", "Checacupe", "Marangani", "Pitumarca"],
        "La Convención": ["Santa Ana", "Echarate", "Quellouno", "Santa Teresa", "Vilcabamba"],
        "Urubamba": ["Urubamba", "Chinchero", "Machupicchu", "Ollantaytambo", "Yucay"]
    },
    "La Libertad": {
        "Trujillo": ["Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", "La Esperanza", "Laredo", "Moche", "Salaverry", "Víctor Larco Herrera"],
        "Ascope": ["Ascope", "Chicama", "Chocope", "Paiján", "Casa Grande"],
        "Chepén": ["Chepén", "Pacanga", "Pueblo Nuevo"],
        "Otuzco": ["Otuzco", "Agallpampa", "Salpo", "Usquil"],
        "Pacasmayo": ["San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo"],
        "Sánchez Carrión": ["Huamachuco", "Chugay", "Cochorco"],
        "Santiago de Chuco": ["Santiago de Chuco", "Cachicadán", "Quiruvilca"],
        "Virú": ["Virú", "Chao", "Guadalupito"]
    },
    "Piura": {
        "Piura": ["Piura", "Castilla", "Catacaos", "La Arena", "Las Lomas", "Tambo Grande"],
        "Ayabaca": ["Ayabaca", "Frías", "Pacaipampa", "Suyo"],
        "Huancabamba": ["Huancabamba", "Canchaque", "Huarmaca"],
        "Morropón": ["Chulucanas", "Buenos Aires", "Morropón", "Salitral"],
        "Paita": ["Paita", "Colán", "La Huaca", "Vichayal"],
        "Sechura": ["Sechura", "Bellavista de la Unión", "Vice"],
        "Sullana": ["Sullana", "Bellavista", "Querecotillo"],
        "Talara": ["Pariñas", "El Alto", "La Brea", "Los Órganos", "Máncora"]
    },
    "Lambayeque": {
        "Chiclayo": ["Chiclayo", "Cayaltí", "José Leonardo Ortiz", "La Victoria", "Lagunas", "Monsefú", "Pimentel", "Pomalca", "Reque", "Santa Rosa"],
        "Ferreñafe": ["Ferreñafe", "Cañaris", "Incahuasi", "Pitipo"],
        "Lambayeque": ["Lambayeque", "Chóchope", "Illimo", "Jayanca", "Mórrope", "Motupe", "Olmos", "Salas", "San José", "Túcume"]
    },
    "Junín": {
        "Huancayo": ["Huancayo", "Chilca", "El Tambo", "Hualhuas", "Pilcomayo", "San Agustín", "San Jerónimo"],
        "Concepción": ["Concepción", "Aco", "Andamarca", "Chambará"],
        "Chanchamayo": ["Chanchamayo", "Perené", "Pichanaqui", "San Luis de Shuaro", "San Ramón"],
        "Jauja": ["Jauja", "Acolla", "Apata", "Ataura"],
        "Tarma": ["Tarma", "Acobamba", "Huaricolca", "Palca"],
        "Satipo": ["Satipo", "Coviriali", "Mazamari", "Pangoa"]
    },
    "Cajamarca": {
        "Cajamarca": ["Cajamarca", "Asunción", "Baños del Inca", "Jesús", "Llacanora", "Los Baños del Inca", "Namora"],
        "Cajabamba": ["Cajabamba", "Cachachi", "Condebamba"],
        "Celendín": ["Celendín", "Cortegana", "Huasmin"],
        "Chota": ["Chota", "Bambamarca", "Chalamarca", "Lajas"],
        "Jaén": ["Jaén", "Bellavista", "Colasay", "San Felipe"],
        "San Ignacio": ["San Ignacio", "Chirinos", "Huarango"]
    },
    "Puno": {
        "Puno": ["Puno", "Acora", "Amantaní", "Capachica", "Chucuito", "Ilave", "Juli", "Pilcuyo", "Pomata", "Yunguyo"],
        "Azángaro": ["Azángaro", "Achaya", "Arapa", "Asillo"],
        "Huancané": ["Huancané", "Cojata", "Huatasani", "Inchupalla"],
        "Juliaca": ["Juliaca"],
        "Lampa": ["Lampa", "Cabanilla", "Palca"],
        "Melgar": ["Ayaviri", "Antauta", "Cupi", "Llalli"],
        "San Román": ["Juliaca", "Cabana", "Cabanillas", "Caracoto"]
    },
    "Loreto": {
        "Maynas": ["Iquitos", "Alto Nanay", "Fernando Lores", "Indiana", "Las Amazonas", "Mazán", "Napo", "Punchana", "San Juan Bautista"],
        "Alto Amazonas": ["Yurimaguas", "Balsapuerto", "Jeberos", "Lagunas"],
        "Loreto": ["Nauta", "Parinari", "Tigre", "Trompeteros"],
        "Mariscal Ramón Castilla": ["Caballococha", "Pebas", "Ramón Castilla", "Yavari"],
        "Requena": ["Requena", "Alto Tapiche", "Capelo", "Emilio San Martín"],
        "Ucayali": ["Contamana", "Inahuaya", "Padre Márquez", "Pampa Hermosa"]
    },
    "Áncash": {
        "Huaraz": ["Huaraz", "Independencia", "Jangas", "Olleros", "Pampas", "Pariacoto"],
        "Aija": ["Aija", "Coris", "Huacllan"],
        "Bolognesi": ["Chiquián", "Abelardo Pardo Lezameta", "Antonio Raymondi"],
        "Carhuaz": ["Carhuaz", "Acopampa", "Amashca", "Anta"],
        "Casma": ["Casma", "Buena Vista Alta", "Comandante Noel"],
        "Huari": ["Huari", "Anra", "Cajay", "Chavin de Huantar"],
        "Huarmey": ["Huarmey", "Cochapeti", "Culebras"],
        "Santa": ["Chimbote", "Cáceres del Perú", "Coishco", "Macate", "Moro", "Nepeña", "Nuevo Chimbote", "Samanco", "Santa"]
    },
    "Huánuco": {
        "Huánuco": ["Huánuco", "Amarilis", "Chinchao", "Churubamba", "Margos", "Pillco Marca", "Santa María del Valle"],
        "Ambo": ["Ambo", "Cayna", "Colpas", "Conchamarca"],
        "Dos de Mayo": ["La Unión", "Chuquis", "Marías", "Pachas"],
        "Huamalíes": ["Llata", "Arancay", "Chavín de Pariarca", "Jacas Grande"],
        "Leoncio Prado": ["Rupa-Rupa", "Daniel Alomía Robles", "Hermilio Valdizán", "José Crespo y Castillo"],
        "Marañón": ["Huacrachuco", "Cholon"],
        "Pachitea": ["Panao", "Chaglla", "Molino", "Umari"],
        "Puerto Inca": ["Puerto Inca", "Codo del Pozuzo", "Honoria", "Tournavista"]
    },
    "San Martín": {
        "Moyobamba": ["Moyobamba", "Calzada", "Habana", "Jepelacio", "Soritor", "Yantalo"],
        "Bellavista": ["Bellavista", "Alto Biavo", "Bajo Biavo", "Huallaga"],
        "El Dorado": ["San José de Sisa", "Agua Blanca", "San Martín", "Santa Rosa"],
        "Huallaga": ["Saposoa", "Alto Saposoa", "El Eslabón", "Piscoyacu"],
        "Lamas": ["Lamas", "Alonso de Alvarado", "Barranquita", "Caynarachi"],
        "Mariscal Cáceres": ["Juanjuí", "Campanilla", "Huicungo", "Pachiza"],
        "Picota": ["Picota", "Buenos Aires", "Caspisapa", "Pilluana"],
        "Rioja": ["Rioja", "Awajún", "Elías Soplin Vargas", "Nueva Cajamarca", "Pardo Miguel", "Posic", "San Fernando", "Yorongos"],
        "San Martín": ["Tarapoto", "Alberto Leveau", "Cacatachi", "Chazuta", "Chipurana", "El Porvenir", "Huimbayoc", "Juan Guerra", "La Banda de Shilcayo", "Morales", "Papaplaya", "San Antonio", "Sauce", "Shapaja"],
        "Tocache": ["Tocache", "Nuevo Progreso", "Polvora", "Shunte", "Uchiza"]
    },
    "Ica": {
        "Ica": ["Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", "Pachacutec", "Parcona", "Pueblo Nuevo", "Salas", "San José de Los Molinos", "San Juan Bautista", "Santiago", "Subtanjalla", "Tate", "Yauca del Rosario"],
        "Chincha": ["Chincha Alta", "Alto Larán", "Chavín", "Chincha Baja", "El Carmen", "Grocio Prado", "Pueblo Nuevo", "San Juan de Yanac", "San Pedro de Huacarpana", "Sunampe", "Tambo de Mora"],
        "Nazca": ["Nazca", "Changuillo", "El Ingenio", "Marcona", "Vista Alegre"],
        "Palpa": ["Palpa", "Llipata", "Río Grande", "Santa Cruz", "Tibillo"],
        "Pisco": ["Pisco", "Huancano", "Humay", "Independencia", "Paracas", "San Andrés", "San Clemente", "Túpac Amaru Inca"]
    },
    "Ayacucho": {
        "Huamanga": ["Ayacucho", "Acocro", "Acos Vinchos", "Carmen Alto", "Chiara", "Jesús Nazareno", "Quinua", "San José de Ticllas", "San Juan Bautista", "Santiago de Pischa", "Socos", "Tambillo", "Vinchos"],
        "Cangallo": ["Cangallo", "Chuschi", "Los Morochucos", "María Parado de Bellido", "Paras", "Totos"],
        "Huanca Sancos": ["Sancos", "Carapo", "Sacsamarca", "Santiago de Lucanamarca"],
        "Huanta": ["Huanta", "Ayahuanco", "Huamanguilla", "Iguain", "Luricocha", "Santillana", "Sivia", "Llochegua"],
        "La Mar": ["San Miguel", "Anco", "Ayna", "Chilcas", "Chungui", "Luis Carranza", "Santa Rosa", "Tambo"],
        "Lucanas": ["Puquio", "Aucará", "Cabana", "Carmen Salcedo", "Chaviña", "Chipao", "Huac-Huas", "Laramate", "Leoncio Prado", "Llauta", "Lucanas", "Ocaña", "Otoca", "Saisa", "San Cristóbal", "San Juan", "San Pedro", "San Pedro de Palco", "Sancos", "Santa Ana de Huaycahuacho", "Santa Lucía"],
        "Parinacochas": ["Coracora", "Chumpi", "Coronel Castañeda", "Pacapausa", "Pullo", "Puyusca", "San Francisco de Ravacayco", "Upahuacho"],
        "Páucar del Sara Sara": ["Pausa", "Colta", "Corculla", "Lampa", "Marcabamba", "Oyolo", "Pararca", "San Javier de Alpabamba", "San José de Ushua", "Sara Sara"],
        "Sucre": ["Querobamba", "Belén", "Chalcos", "Chilcayoc", "Huacaña", "Morcolla", "Paico", "San Pedro de Larcay", "San Salvador de Quije", "Santiago de Paucaray", "Soras"],
        "Víctor Fajardo": ["Huancapi", "Alcamenca", "Apongo", "Asquipata", "Canaria", "Cayara", "Colca", "Huamanquiquia", "Huancaraylla", "Huaya", "Sarhua", "Vilcanchos"],
        "Vilcas Huamán": ["Vilcas Huamán", "Accomarca", "Carhuanca", "Concepción", "Huambalpa", "Independencia", "Saurama", "Vischongo"]
    },
    "Apurímac": {
        "Abancay": ["Abancay", "Chacoche", "Circa", "Curahuasi", "Huanipaca", "Lambrama", "Pichirhua", "San Pedro de Cachora", "Tamburco"],
        "Andahuaylas": ["Andahuaylas", "Andarapa", "Chiara", "Huancarama", "Huancaray", "Huayana", "Kishuará", "Pacobamba", "Pacucha", "Pampachiri", "Pomacocha", "San Antonio de Cachi", "San Jerónimo", "San Miguel de Chaccrampa", "Santa María de Chicmo", "Talavera", "Tumay Huaraca", "Turpo"],
        "Antabamba": ["Antabamba", "El Oro", "Huaquirca", "Juan Espinoza Medrano", "Oropesa", "Pachaconas", "Sabaino"],
        "Aymaraes": ["Chalhuanca", "Capaya", "Caraybamba", "Chapimarca", "Colcabamba", "Cotaruse", "Ihuayllo", "Justo Apu Sahuaraura", "Lucre", "Pocohuanca", "San Juan de Chacña", "Sañayca", "Soraya", "Tapairihua", "Tintay", "Toraya", "Yanaca"],
        "Cotabambas": ["Tambobamba", "Cotabambas", "Coyllurqui", "Haquira", "Mara", "Challhuahuacho"],
        "Chincheros": ["Chincheros", "Anco_Huallo", "Cocharcas", "Huaccana", "Ocobamba", "Ongoy", "Uranmarca", "Ranracancha"],
        "Grau": ["Chuquibambilla", "Curasco", "Curpahuasi", "Gamarra", "Huayllati", "Mamara", "Micaela Bastidas", "Pataypampa", "Progreso", "San Antonio", "Turpay", "Vilcabamba", "Virundo"]
    },
    "Huancavelica": {
        "Huancavelica": ["Huancavelica", "Acobambilla", "Acoria", "Conayca", "Cuenca", "Huachocolpa", "Huayllahuara", "Izcuchaca", "Laria", "Manta", "Mariscal Cáceres", "Moya", "Nuevo Occoro", "Palca", "Pilchaca", "Vilca", "Yauli", "Ascensión", "Huando"],
        "Acobamba": ["Acobamba", "Andabamba", "Anta", "Caja", "Marcas", "Paucará", "Pomacocha", "Rosario"],
        "Angaraes": ["Lircay", "Anchonga", "Callanmarca", "Ccochaccasa", "Chincho", "Congalla", "Huanca-Huanca", "Huayllay Grande", "Julcamarca", "San Antonio de Antaparco", "Santo Tomás de Pata", "Secclla"],
        "Castrovirreyna": ["Castrovirreyna", "Arma", "Aurahua", "Capillas", "Chupamarca", "Cocas", "Huachos", "Huamatambo", "Mollepampa", "San Juan", "Santa Ana", "Tantara", "Ticrapo"],
        "Churcampa": ["Churcampa", "Anco", "Chinchihuasi", "El Carmen", "La Merced", "Locroja", "Paucarbamba", "San Miguel de Mayocc", "San Pedro de Coris", "Pachamarca", "Cosme"],
        "Huaytará": ["Huaytará", "Ayaví", "Córdova", "Huayacundo Arma", "Laramarca", "Ocoyo", "Pilpichaca", "Querco", "Quito-Arma", "San Antonio de Cusicancha", "San Francisco de Sangayaico", "San Isidro", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Capillas", "Tambo"],
        "Tayacaja": ["Pampas", "Acostambo", "Acraquia", "Ahuaycha", "Colcabamba", "Daniel Hernández", "Huachocolpa", "Huaribamba", "Ñahuimpuquio", "Pazos", "Quishuar", "Salcabamba", "Salcahuasi", "San Marcos de Rocchac", "Surcubamba", "Tintay Puncu"]
    },
    "Tacna": {
        "Tacna": ["Tacna", "Alto de la Alianza", "Calana", "Ciudad Nueva", "Inclán", "Pachía", "Palca", "Pocollay", "Sama", "Coronel Gregorio Albarracín Lanchipa"],
        "Candarave": ["Candarave", "Cairani", "Camilaca", "Curibaya", "Huanuara", "Quilahuani"],
        "Jorge Basadre": ["Locumba", "Ilabaya", "Ite"],
        "Tarata": ["Tarata", "Chucatamani", "Estique", "Estique-Pampa", "Sitajara", "Susapaya", "Tarucachi", "Ticaco"]
    },
    "Moquegua": {
        "Mariscal Nieto": ["Moquegua", "Carumas", "Cuchumbaya", "Samegua", "San Cristóbal", "Torata"],
        "General Sánchez Cerro": ["Omate", "Chojata", "Coalaque", "Ichuña", "La Capilla", "Lloque", "Matalaque", "Puquina", "Quinistaquillas", "Ubinas", "Yunga"],
        "Ilo": ["Ilo", "El Algarrobal", "Pacocha"]
    },
    "Pasco": {
        "Pasco": ["Chaupimarca", "Huachón", "Huariaca", "Huayllay", "Ninacaca", "Pallanchacra", "Paucartambo", "San Francisco de Asís de Yarusyacán", "Simón Bolívar", "Ticlacayán", "Tinyahuarco", "Vicco", "Yanacancha"],
        "Daniel Alcides Carrión": ["Yanahuanca", "Chacayán", "Goyllarisquizga", "Paucar", "San Pedro de Pillao", "Santa Ana de Tusi", "Tapuc", "Vilcabamba"],
        "Oxapampa": ["Oxapampa", "Chontabamba", "Huancabamba", "Palcazu", "Pozuzo", "Puerto Bermúdez", "Villa Rica", "Constitución"]
    },
    "Tumbes": {
        "Tumbes": ["Tumbes", "Corrales", "La Cruz", "Pampas de Hospital", "San Jacinto", "San Juan de la Virgen"],
        "Contralmirante Villar": ["Zorritos", "Casitas", "Canoas de Punta Sal"],
        "Zarumilla": ["Zarumilla", "Aguas Verdes", "Matapalo", "Papayal"]
    },
    "Amazonas": {
        "Chachapoyas": ["Chachapoyas", "Asunción", "Balsas", "Cheto", "Chiliquín", "Chuquibamba", "Granada", "Huancas", "La Jalca", "Leimebamba", "Levanto", "Magdalena", "Mariscal Castilla", "Molinopampa", "Montevideo", "Olleros", "Quinjalca", "San Francisco de Daguas", "San Isidro de Maino", "Soloco", "Sonche"],
        "Bagua": ["Bagua", "Aramango", "Copallin", "El Parco", "Imaza", "La Peca"],
        "Bongará": ["Jumbilla", "Chisquilla", "Churuja", "Corosha", "Cuispes", "Florida", "Jazán", "Recta", "San Carlos", "Shipasbamba", "Valera", "Yambrasbamba"],
        "Condorcanqui": ["Nieva", "El Cenepa", "Río Santiago"],
        "Luya": ["Lamud", "Camporredondo", "Cocabamba", "Colcamar", "Conila", "Inguilpata", "Longuita", "Lonya Chico", "Luya", "Luya Viejo", "María", "Ocalli", "Ocumal", "Pisuquia", "Providencia", "San Cristóbal", "San Francisco de Yeso", "San Jerónimo", "San Juan de Lopecancha", "Santa Catalina", "Santo Tomás", "Tingo", "Trita"],
        "Rodríguez de Mendoza": ["San Nicolás", "Chirimoto", "Cochamal", "Huambo", "Limabamba", "Longar", "Mariscal Benavides", "Milpuc", "Omia", "Santa Rosa", "Totora", "Vista Alegre"],
        "Utcubamba": ["Bagua Grande", "Cajaruro", "Cumba", "El Milagro", "Jamalca", "Lonya Grande", "Yamon"]
    },
    "Madre de Dios": {
        "Tambopata": ["Tambopata", "Inambari", "Las Piedras", "Laberinto"],
        "Manu": ["Manu", "Fitzcarrald", "Madre de Dios", "Huepetuhe"],
        "Tahuamanu": ["Iñapari", "Iberia", "Tahuamanu"]
    }
};

// Referencias a los elementos del DOM
const departamentoSelect = document.getElementById('departamento');
const provinciaSelect = document.getElementById('provincia');
const distritoSelect = document.getElementById('distrito');

// Función para actualizar las provincias según el departamento seleccionado
departamentoSelect.addEventListener('change', function () {
    const departamento = this.value;

    // Limpiar provincias y distritos
    provinciaSelect.innerHTML = '<option value="">Seleccionar...</option>';
    distritoSelect.innerHTML = '<option value="">Seleccione provincia primero</option>';

    if (departamento && ubicacionData[departamento]) {
        const provincias = Object.keys(ubicacionData[departamento]).sort();
        provincias.forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia;
            option.textContent = provincia;
            provinciaSelect.appendChild(option);
        });
        provinciaSelect.disabled = false;
    } else {
        provinciaSelect.disabled = true;
    }
    distritoSelect.disabled = true;
});

// Función para actualizar los distritos según la provincia seleccionada
provinciaSelect.addEventListener('change', function () {
    const departamento = departamentoSelect.value;
    const provincia = this.value;

    // Limpiar distritos
    distritoSelect.innerHTML = '<option value="">Seleccionar...</option>';

    if (departamento && provincia && ubicacionData[departamento][provincia]) {
        const distritos = ubicacionData[departamento][provincia].sort();
        distritos.forEach(distrito => {
            const option = document.createElement('option');
            option.value = distrito;
            option.textContent = distrito;
            distritoSelect.appendChild(option);
        });
        distritoSelect.disabled = false;
    } else {
        distritoSelect.disabled = true;
    }
});

// Inicializar los selects como deshabilitados
provinciaSelect.disabled = true;
distritoSelect.disabled = true;
