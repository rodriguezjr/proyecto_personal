import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold">Junior David Rodriguez Ramos</h1>
        <p className="text-lg">Ingeniero en Informática | Especialista en Automatización y Control, IA y Desarrollo Web</p>
      </header>

      <nav className="bg-blue-700 text-white p-4 flex gap-6 text-sm md:text-base justify-center">
        <a href="#sobre-mi" className="hover:underline">Sobre Mí</a>
        <a href="#habilidades" className="hover:underline">Habilidades</a>
        <a href="#portafolio" className="hover:underline">Portafolio</a>
        <a href="#experiencia" className="hover:underline">Experiencia Profesional</a>
        <a href="#academica" className="hover:underline">Formación Académica</a>
        <a href="#contacto" className="hover:underline">Contacto</a>
      </nav>

      <section id="sobre-mi" className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Sobre Mí</h2>
        <p className="mb-2">
          ¡Hola! Soy un profesional con más de 7 años de experiencia en el desarrollo de soluciones tecnológicas, comprometido con la innovación, la mejora continua y la automatización de procesos. Mi enfoque combina el pensamiento analítico con habilidades prácticas en ingeniería de software, infraestructura y tecnologías emergentes como inteligencia artificial y machine learning.
        </p>
        <p className="mb-2">
          He liderado y desarrollado proyectos clave dentro de entornos industriales, optimizando flujos operativos mediante aplicaciones web, sistemas de control y herramientas basadas en OCR. Además, poseo competencias sólidas en trabajo colaborativo con metodologías ágiles, herramientas de diseño colaborativo, y plataformas de documentación técnica.
        </p>
        <p><strong>Especializaciones:</strong> Automatización Industrial, Desarrollo Web, OCR y Visión Computacional, Machine Learning, Soporte Técnico, Metodologías Ágiles.</p>
      </section>

      <section id="habilidades" className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Lenguajes</h3>
            <ul className="list-disc list-inside">
              <li>Python, SQL, PHP</li>
              <li>Java, C/C++, JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Herramientas y Frameworks</h3>
            <ul className="list-disc list-inside">
              <li>Django, PostgreSQL, OCR, AutoCAD, Photoshop</li>
              <li>Jira, Confluence, Figma, Slack, NotebookLM, IA</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portafolio" className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Portafolio de Proyectos</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">AsisCar – Asistente Vehicular</h3>
            <p>Proyecto Final de Maestría. Plataforma inteligente de asistencia vehicular.</p>
            <p><strong>Rol:</strong> Líder técnico y desarrollador backend</p>
            <p><strong>Tecnologías:</strong> Python, Django, PostgreSQL, IA, Slack, NotebookLM</p>
            <p><a href="#" className="text-blue-600">Ver repositorio / Demo</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Sistema de Reporte de Alarmas y Forces</h3>
            <p>Aplicación para monitoreo de eventos industriales.</p>
            <p><strong>Rol:</strong> Desarrollador backend</p>
            <p><strong>Tecnologías:</strong> Django, PostgreSQL, OCR (Python)</p>
            <p><a href="#" className="text-blue-600">Ver repositorio</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Reingeniería del Sistema de Instrucciones de Operación</h3>
            <p>Rediseño completo del sistema interno de instrucciones operativas.</p>
            <p><strong>Rol:</strong> Pasante – análisis, diseño y desarrollo</p>
            <p><strong>Tecnologías:</strong> PHP, PostgreSQL</p>
            <p><a href="#" className="text-blue-600">Ver documentación</a></p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Experiencia Profesional</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Especialista en Soporte Tecnológico – CSC Planta Guayana</strong> (2024 - Actualidad)<br />
            Responsable del soporte técnico a usuarios, mantenimiento preventivo y correctivo de equipos de computación,
            gestión de incidencias, asesoría en tecnologías emergentes y asistencia técnica especializada.
          </li>
          <li>
            <strong>Ing. de Automatización y Control – Orinoco Iron SCS</strong> (2018 - 2024)<br />
            Desarrollo de aplicaciones web para el sistema de control, migración de macros de Excel a aplicaciones web,
            implementación de sistemas de reporte OCR, diseño de sistemas de alarmas industriales, mantenimiento de redes
            industriales y programación de interfaces de monitoreo.
          </li>
          <li>
            <strong>Técnico de Sistemas – Orinoco Iron SCS</strong> (2017)<br />
            Desarrollo de bases de datos y módulos de reportes personalizados, implementación de mejoras al Sistema de Gestión
            de Consumos, optimización del rendimiento de aplicaciones existentes en PHP y PostgreSQL.
          </li>
          <li>
            <strong>Pasante de Ingeniería – Orinoco Iron SCS</strong> (2016)<br />
            Proyecto de reingeniería del sistema de instrucciones de operación: análisis, modelado de datos, implementación
            de arquitectura cliente-servidor y pruebas funcionales.
          </li>
          <li>
            <strong>Pasante – CVG Buxilum</strong> (2011)<br />
            Mantenimiento eléctrico de sistemas industriales, inspección de cableado y motores, y propuesta técnica para la
            mejora de sistemas de arranque de cintas transportadoras.
          </li>
        </ul>
      </section>

      <section id="academica" className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Formación Académica</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Maestría en Tecnologías de la Información</strong><br />Universidad Nacional Experimental de Guayana (2025 - En curso)</li>
          <li><strong>Ingeniería en Informática</strong><br />Universidad Nacional Experimental de Guayana (2011 - 2018)</li>
          <li><strong>Técnico Medio Industrial Mención Electricidad</strong><br />U.E.E.T.I Fundación La Salle de Ciencias Naturales (2005 - 2011)</li>
          <li><strong>Certificados adicionales</strong>:
            <ul className="list-inside list-disc ml-5">
              <li>AutoCAD 2009 Nivel I y II – Ingeniería Villalba</li>
              <li>Photoshop CS3 Básico e Intermedio – UNEXPO</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="contacto" className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <ul className="list-none mb-4">
          <li><strong>Email:</strong> <a href="mailto:junior.david.rodriguez@gmail.com" className="text-blue-600">junior.david.rodriguez@gmail.com</a></li>
          <li className="flex items-center gap-2 mt-2">
            <strong>Teléfono:</strong> +58 412 949 3909
            <a href="https://wa.me/584129493909" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-sm">WhatsApp</a>
          </li>
        </ul>
        <a href="mailto:junior.david.rodriguez@gmail.com" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Escríbeme por correo</a>
      </section>

      <footer className="text-center p-4 bg-gray-200 text-sm">
        © {new Date().getFullYear()} Junior David Rodriguez Ramos
      </footer>
    </div>
  );
}
