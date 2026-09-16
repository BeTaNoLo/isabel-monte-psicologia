(function () {
  var TRANSLATIONS = {
    es: {
      common: {
        brandTagline: `Psicóloga Infanto-Juvenil`,
        menuOpen: `Abrir menú`,
        menuClose: `Cerrar menú`,
        goHome: `Ir al inicio`,
        logoAlt: `Isabel Monte Psicóloga`,
        langSelectLabel: `Seleccionar idioma`,
        whatsappAria: `Contactar por WhatsApp`
      },
      nav: {
        home: `Inicio`, homeTooltip: `Volvamos al inicio`,
        specialties: `Especialidades`, specialtiesTooltip: `Conoce mis especialidades`,
        benefits: `Por qué la terapia`, benefitsTooltip: `Descubre cómo puede ayudar la terapia`,
        aboutMe: `Sobre mí`, aboutMeTooltip: `Conoce un poco más sobre mí`,
        modality: `Cómo trabajo`, modalityTooltip: `Presencial u online`,
        blog: `Blog`, blogTooltip: `Ideas para cuidar el bienestar`,
        contact: `Contacto`, contactTooltip: `Estoy aquí para escucharte`,
        cta: `Pedir cita`, ctaTooltip: `Damos el primer paso juntas`
      },
      home: {
        meta: {
          title: `Isabel Monte | Psicóloga Infanto-Juvenil en Alhendín, Granada`,
          description: `Isabel Monte, psicóloga infanto-juvenil en Alhendín (Granada). Atención psicológica sanitaria basada en la evidencia. Nº Colegiada AO14821. Presencial y online.`,
          ogTitle: `Isabel Monte | Psicóloga Infanto-Juvenil`,
          ogDescription: `Atención psicológica infanto-juvenil en Alhendín y sesiones online.`
        },
        hero: {
          sanitary: `Atención psicológica sanitaria basada en la evidencia<br>Nº Colegiada AO14821`,
          quote: `A veces solo necesitas una mirada diferente, alguien que te explique el por qué, el cómo y el para qué de lo que sucede.`,
          cta: `Agenda abierta · WhatsApp`,
          ctaTooltip: `Escríbeme y hablamos con calma`
        },
        heroImgAlt: `Isabel Monte, psicóloga infanto-juvenil`
      },
      specialties: {
        meta: {
          title: `Especialidades | Isabel Monte, Psicóloga Infanto-Juvenil`,
          description: `Dificultades del aprendizaje, del neurodesarrollo (TEA, TDAH), terapia psicológica y psicoeducativa, habilidades sociales, talleres y charlas para familias y profesorado.`,
          ogTitle: `Especialidades | Isabel Monte`,
          ogDescription: `Áreas de especialización en psicología infanto-juvenil.`
        },
        title1: `Especializada en`,
        item1: `Evaluación e intervención en las dificultades del aprendizaje relacionadas con la lectura, la escritura y las matemáticas`,
        item2: `Dificultades del neurodesarrollo: TDAH, trastornos del aprendizaje y otros trastornos del desarrollo`,
        item3: `Habilidades sociales, gestión emocional y autoestima`,
        title2: `Además ofrezco`,
        item4: `Talleres sobre gestión emocional`,
        item5: `Entrenamiento y práctica de técnicas de estudio`,
        item6: `Charlas y formaciones dirigidas a las familias y el profesorado`
      },
      benefits: {
        meta: {
          title: `Por qué la terapia | Isabel Monte, Psicóloga Infanto-Juvenil`,
          description: `Qué aporta la terapia psicológica a niños/as y adolescentes y la importancia de empezar cuanto antes: un espacio seguro, gestión emocional, autoestima y acompañamiento a las familias.`,
          ogTitle: `Por qué la terapia | Isabel Monte`,
          ogDescription: `Beneficios de la terapia psicológica infanto-juvenil.`
        },
        title1: `¿Por qué es importante la terapia a niños/as y adolescentes?`,
        item1: `Un espacio seguro y propio`,
        item2: `Comprensión y gestión de sus emociones`,
        item3: `Fortalecimiento de la autoestima`,
        item4: `Prevención de dificultades a largo plazo`,
        item5: `Apoyo, acompañamiento y pautas para las familias`,
        quote1: `Ir a terapia es regalarles recursos emocionales que les acompañarán toda la vida…`,
        quote2: `¿Sientes que tu hijo/a necesita un espacio de acompañamiento o tienes dudas sobre su desarrollo?<br>Estamos aquí para escucharos y acompañaros en el camino.`,
        title2: `Cuanto antes mejor`,
        intro2: `Comenzar la terapia con el inicio del curso escolar ayuda a los pequeños a:`,
        smiley1: `Gestión emocional desde el día 1`,
        smiley2: `Prevención de dificultades antes de su agravamiento`,
        smiley3: `Coordinación y apoyo continuo`,
        quote3: `La terapia es la mejor inversión que puedes hacer con tu niño/a cuando aparecen comportamientos poco adaptativos, no esperes el momento ideal, el momento es ahora…`
      },
      aboutMe: {
        meta: {
          title: `Sobre mí | Isabel Monte, Psicóloga Infanto-Juvenil`,
          description: `Isabel Monte, psicóloga especializada en infancia, adolescencia y dificultades del neurodesarrollo. Atiendo en consulta en Alhendín (Granada) y también ofrezco sesiones online.`,
          ogTitle: `Sobre mí | Isabel Monte`,
          ogDescription: `Conoce a Isabel Monte, psicóloga infanto-juvenil.`
        },
        title: `Sobre mí`,
        p1: `Soy Isabel Monte, psicóloga especializada en infancia, adolescencia y dificultades del neurodesarrollo. Mi trabajo se centra en ayudar a niños, niñas y jóvenes a gestionar sus emociones, superar dificultades y crecer con confianza, acompañando también a sus familias en este proceso.`,
        p2: `Trabajo con niños, niñas, adolescentes y sus familias en la evaluación e intervención de dificultades como el TDAH, los trastornos del espectro autista, los trastornos del aprendizaje, los problemas de conducta y otras dificultades emocionales.`,
        p3: `Ofrezco terapia psicológica y psicoeducativa desde un enfoque cercano, respetuoso, basado en la evidencia y adaptado a cada etapa evolutiva y a las necesidades de cada persona. Creo un espacio seguro donde el menor pueda expresarse con libertad y donde padres y madres encuentren orientación y apoyo real.`,
        p4: `Atiendo en consulta en <strong>Alhendín (Granada)</strong> y también ofrezco <strong>sesiones online</strong> para quienes lo prefieran o no puedan desplazarse.`,
        photoAlt: `Isabel Monte, psicóloga infanto-juvenil, trabajando con material psicoeducativo`
      },
      modality: {
        meta: {
          title: `Cómo trabajo | Isabel Monte, Psicóloga Infanto-Juvenil`,
          description: `Consulta presencial en Alhendín (Granada) o sesiones online, con la misma cercanía y seguimiento en ambas modalidades.`,
          ogTitle: `Cómo trabajo | Isabel Monte`,
          ogDescription: `Modalidad presencial y online de terapia infanto-juvenil.`
        },
        title: `Cómo trabajo`,
        presencialTitle: `Presencial`,
        presencialText: `Consulta en Alhendín, Granada. Un espacio tranquilo y cercano, pensado para que niños y adolescentes se sientan cómodos desde la primera sesión.`,
        onlineTitle: `Online`,
        onlineText: `Sesiones por videollamada con la misma cercanía y seguimiento que en consulta, ideales para familias que no pueden desplazarse o prefieren esta opción.`
      },
      blog: {
        meta: {
          title: `Blog | Isabel Monte, Psicóloga Infanto-Juvenil`,
          description: `Ideas prácticas para acompañar el desarrollo emocional, el aprendizaje y la autoestima de niños, niñas y adolescentes.`,
          ogTitle: `Blog | Isabel Monte`,
          ogDescription: `Recursos para familias sobre bienestar emocional infanto-juvenil.`
        },
        kicker: `Bienestar emocional`,
        title: `Recursos para familias`,
        intro: `Ideas prácticas para acompañar el desarrollo emocional, el aprendizaje y la autoestima de niños, niñas y adolescentes.`,
        article1: {
          topic: `Gestión emocional infantil`,
          title: `Cómo ayudar a un niño a expresar sus emociones`,
          p1: `Nombrar lo que siente, validar su experiencia y ofrecer un momento tranquilo para hablar son tres pasos sencillos que ayudan a que un niño identifique y comunique lo que le ocurre.`,
          p2: `En lugar de pedirle que se calme sin más, podemos decir: "Veo que estás enfadado. Estoy contigo y podemos buscar juntos qué necesitas". La escucha y la presencia adulta son herramientas importantes.`
        },
        article2: {
          topic: `Psicología infanto-juvenil`,
          title: `Señales de que un niño o adolescente puede necesitar apoyo psicológico`,
          p1: `Los cambios persistentes en el estado de ánimo, el sueño, el rendimiento escolar, las relaciones o la forma de afrontar las emociones merecen una mirada atenta y sin juicios.`,
          p2: `Una consulta inicial puede ayudar a comprender qué está ocurriendo y qué recursos necesita la familia, sin esperar a que la dificultad se haga más grande.`
        },
        article3: {
          topic: `Bienestar adolescente`,
          title: `Rutinas saludables para cuidar el bienestar emocional`,
          p1: `El descanso, el movimiento, una alimentación regular y momentos sin pantallas favorecen la concentración y la regulación emocional durante la adolescencia.`,
          p2: `Las rutinas funcionan mejor cuando se construyen de forma gradual y realista, con participación del adolescente y espacio para adaptar lo que no esté funcionando.`
        },
        ctaText: `¿Tienes dudas sobre el bienestar emocional de tu hijo o hija?`,
        ctaButton: `Hablar sobre mi caso`
      },
      contact: {
        meta: {
          title: `Contacto | Isabel Monte, Psicóloga Infanto-Juvenil`,
          description: `Contacta con Isabel Monte, psicóloga infanto-juvenil en Alhendín (Granada), para pedir una primera cita presencial u online.`,
          ogTitle: `Contacto | Isabel Monte`,
          ogDescription: `Pide tu primera cita con Isabel Monte, psicóloga infanto-juvenil.`
        },
        agenda: `Agenda abierta`,
        title: `Contacto`,
        intro: `Si tienes dudas o quieres pedir una primera cita, estaré encantada de atenderte.`,
        consultLabel: `Consulta`,
        consultText: `Alhendín (Granada). La dirección exacta se facilita al confirmar la cita.`,
        colegiadaLabel: `Colegiada`,
        colegiadaText: `Nº Colegiada AO14821`,
        whatsappBtn: `Escribir por WhatsApp`,
        formTitle: `Envíame un mensaje`,
        privacyNote: `No guardamos tus datos. El mensaje se envía directamente desde esta página.`,
        honeypotLabel: `No rellenar este campo`,
        labelName: `Nombre`,
        labelEmail: `Email`,
        labelPhone: `Teléfono (opcional)`,
        labelMessage: `Mensaje`,
        consent: `Acepto el tratamiento de mis datos para responder a mi consulta. He leído la <a href="../privacy.html" target="_blank" rel="noopener">política de privacidad</a>.`,
        submitBtn: `Enviar mensaje`,
        form: {
          sending: `Enviando...`,
          success: `¡Gracias! Tu mensaje se ha enviado correctamente.`,
          errorGeneric: `No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.`,
          errorValidation: `Por favor, completa los campos obligatorios y acepta la política de privacidad.`
        }
      },
      privacy: {
        meta: { title: `Política de privacidad | Isabel Monte` },
        navBack: `Volver a la web`,
        title: `Política de privacidad`,
        intro: `Esta página informa sobre el tratamiento de los datos enviados mediante el formulario de contacto de Isabel Monte, Psicóloga Infanto-Juvenil.`,
        h1: `Responsable`,
        p1: `Responsable: Isabel Monte, Psicóloga Infanto-Juvenil. Para cualquier consulta relacionada con privacidad, puedes utilizar el formulario de contacto de la web.`,
        h2: `Datos que se solicitan`,
        p2: `El formulario puede solicitar nombre, email, teléfono opcional y mensaje. Se recomienda no incluir información clínica o especialmente sensible en el primer contacto.`,
        h3: `Finalidad y base legal`,
        p3: `Los datos se utilizan únicamente para responder a la consulta y, cuando proceda, contactar para informar sobre una primera cita. La base legal es el consentimiento de la persona interesada.`,
        h4: `Destinatarios y conservación`,
        p4: `El mensaje se envía mediante FormSubmit, proveedor técnico del formulario. Los datos se conservarán únicamente durante el tiempo necesario para gestionar la solicitud y cumplir las obligaciones aplicables.`,
        h5: `Derechos`,
        p5: `Puedes solicitar el acceso, rectificación, supresión, limitación u oposición al tratamiento de tus datos, así como retirar tu consentimiento, utilizando el formulario de contacto.`,
        note: `<strong>Nota:</strong> este texto es un borrador informativo y debe revisarse con los datos fiscales y profesionales definitivos antes de publicar la web.`,
        footerBack: `Volver a Isabel Monte`
      },
      whatsapp: { tooltip: `¡Hola, soy Isabel! ¿Hablamos?` },
      footer: {
        lineRoot: `Isabel Monte · Psicóloga Infanto-Juvenil · Alhendín (Granada) · Nº Colegiada AO14821 · <a href="privacy.html">Privacidad</a>`,
        linePages: `Isabel Monte · Psicóloga Infanto-Juvenil · Alhendín (Granada) · Nº Colegiada AO14821 · <a href="../privacy.html">Privacidad</a>`
      }      
    },

    en: {
      common: {
        brandTagline: `Child & Adolescent Psychologist`,
        menuOpen: `Open menu`,
        menuClose: `Close menu`,
        goHome: `Go to homepage`,
        logoAlt: `Isabel Monte Psychologist`,
        langSelectLabel: `Select language`,
        whatsappAria: `Contact via WhatsApp`
      },
      nav: {
        home: `Home`, homeTooltip: `Back to the homepage`,
        specialties: `Specialties`, specialtiesTooltip: `Discover my areas of expertise`,
        benefits: `Why therapy`, benefitsTooltip: `See how therapy can help`,
        aboutMe: `About me`, aboutMeTooltip: `Get to know me a little better`,
        modality: `How I work`, modalityTooltip: `In person or online`,
        blog: `Blog`, blogTooltip: `Ideas for wellbeing`,
        contact: `Contact`, contactTooltip: `I'm here to listen`,
        cta: `Book an appointment`, ctaTooltip: `Let's take the first step together`
      },
      home: {
        meta: {
          title: `Isabel Monte | Child & Adolescent Psychologist in Alhendín, Granada`,
          description: `Isabel Monte, child and adolescent psychologist in Alhendín (Granada). Evidence-based psychological healthcare. Licence No. AO14821. In person and online.`,
          ogTitle: `Isabel Monte | Child & Adolescent Psychologist`,
          ogDescription: `Child and adolescent psychological care in Alhendín and online sessions.`
        },
        hero: {
          sanitary: `Evidence-based psychological healthcare<br>Licence No. AO14821`,
          quote: `Sometimes all you need is a different perspective — someone to explain the why, the how and the what for of what's happening.`,
          cta: `Now booking · WhatsApp`,
          ctaTooltip: `Write to me and let's talk it through`
        },
        heroImgAlt: `Isabel Monte, child and adolescent psychologist`
      },
      specialties: {
        meta: {
          title: `Specialties | Isabel Monte, Child & Adolescent Psychologist`,
          description: `Learning difficulties, neurodevelopmental disorders (ASD, ADHD), psychological and psychoeducational therapy, social skills, workshops and talks for families and teachers.`,
          ogTitle: `Specialties | Isabel Monte`,
          ogDescription: `Areas of expertise in child and adolescent psychology.`
        },
        title1: `Specialized in`,
        item1: `Assessment and intervention for learning difficulties related to reading, writing and mathematics`,
        item2: `Neurodevelopmental difficulties: ADHD, learning disorders and other developmental disorders`,
        item3: `Social skills, emotional management and self-esteem`,
        title2: `I also offer`,
        item4: `Workshops on emotional management`,
        item5: `Study skills training and practice`,
        item6: `Talks and training sessions for families and teaching staff`
      },
      benefits: {
        meta: {
          title: `Why therapy | Isabel Monte, Child & Adolescent Psychologist`,
          description: `What psychological therapy brings to children and teenagers, and why it matters to start as soon as possible: a safe space, emotional management, self-esteem and support for families.`,
          ogTitle: `Why therapy | Isabel Monte`,
          ogDescription: `Benefits of child and adolescent psychological therapy.`
        },
        title1: `Why is therapy important for children and teenagers?`,
        item1: `A safe space of their own`,
        item2: `Understanding and managing their emotions`,
        item3: `Building self-esteem`,
        item4: `Preventing difficulties in the long run`,
        item5: `Support, guidance and tools for families`,
        quote1: `Going to therapy gives them emotional resources that will stay with them for life…`,
        quote2: `Do you feel your child needs support, or do you have questions about their development?<br>We're here to listen and walk this path with you.`,
        title2: `The sooner, the better`,
        intro2: `Starting therapy at the beginning of the school year helps children with:`,
        smiley1: `Emotional management from day one`,
        smiley2: `Preventing difficulties before they grow`,
        smiley3: `Ongoing coordination and support`,
        quote3: `Therapy is the best investment you can make for your child when unhelpful behaviours appear — don't wait for the perfect moment, the moment is now…`
      },
      aboutMe: {
        meta: {
          title: `About me | Isabel Monte, Child & Adolescent Psychologist`,
          description: `Isabel Monte, psychologist specializing in childhood, adolescence and neurodevelopmental difficulties. I see patients in Alhendín (Granada) and also offer online sessions.`,
          ogTitle: `About me | Isabel Monte`,
          ogDescription: `Get to know Isabel Monte, child and adolescent psychologist.`
        },
        title: `About me`,
        p1: `I'm Isabel Monte, a psychologist specializing in childhood, adolescence and neurodevelopmental difficulties. My work focuses on helping children and young people manage their emotions, overcome difficulties and grow with confidence, while also supporting their families throughout the process.`,
        p2: `I work with children, teenagers and their families on the assessment and treatment of difficulties such as ADHD, autism spectrum disorders, learning disorders, behavioural problems and other emotional difficulties.`,
        p3: `I offer psychological and psychoeducational therapy from a warm, respectful, evidence-based approach adapted to each developmental stage and to each person's needs. I create a safe space where children can express themselves freely, and where parents can find real guidance and support.`,
        p4: `I see patients in <strong>Alhendín (Granada)</strong> and also offer <strong>online sessions</strong> for those who prefer them or cannot travel.`,
        photoAlt: `Isabel Monte, child and adolescent psychologist, working with psychoeducational materials`
      },
      modality: {
        meta: {
          title: `How I work | Isabel Monte, Child & Adolescent Psychologist`,
          description: `In-person sessions in Alhendín (Granada) or online sessions, with the same closeness and follow-up in both formats.`,
          ogTitle: `How I work | Isabel Monte`,
          ogDescription: `In-person and online format for child and adolescent therapy.`
        },
        title: `How I work`,
        presencialTitle: `In person`,
        presencialText: `Practice in Alhendín, Granada. A calm, welcoming space designed to help children and teenagers feel comfortable from the very first session.`,
        onlineTitle: `Online`,
        onlineText: `Video-call sessions with the same closeness and follow-up as in-person consultations, ideal for families who can't travel or prefer this option.`
      },
      blog: {
        meta: {
          title: `Blog | Isabel Monte, Child & Adolescent Psychologist`,
          description: `Practical ideas to support the emotional development, learning and self-esteem of children and teenagers.`,
          ogTitle: `Blog | Isabel Monte`,
          ogDescription: `Resources for families on child and adolescent emotional wellbeing.`
        },
        kicker: `Emotional wellbeing`,
        title: `Resources for families`,
        intro: `Practical ideas to support the emotional development, learning and self-esteem of children and teenagers.`,
        article1: {
          topic: `Children's emotional management`,
          title: `How to help a child express their emotions`,
          p1: `Naming what they feel, validating their experience and offering a calm moment to talk are three simple steps that help a child identify and communicate what's going on.`,
          p2: `Instead of simply asking them to calm down, we can say: "I can see you're angry. I'm here with you, and we can figure out together what you need." Listening and adult presence are powerful tools.`
        },
        article2: {
          topic: `Child and adolescent psychology`,
          title: `Signs that a child or teenager may need psychological support`,
          p1: `Persistent changes in mood, sleep, school performance, relationships or the way emotions are handled deserve a close, non-judgmental look.`,
          p2: `An initial consultation can help understand what's happening and what resources the family needs, without waiting for the difficulty to grow.`
        },
        article3: {
          topic: `Teen wellbeing`,
          title: `Healthy routines to look after emotional wellbeing`,
          p1: `Rest, movement, regular meals and screen-free moments support concentration and emotional regulation during adolescence.`,
          p2: `Routines work best when they're built gradually and realistically, with the teenager's input and room to adjust whatever isn't working.`
        },
        ctaText: `Do you have questions about your child's emotional wellbeing?`,
        ctaButton: `Talk about my case`
      },
      contact: {
        meta: {
          title: `Contact | Isabel Monte, Child & Adolescent Psychologist`,
          description: `Get in touch with Isabel Monte, child and adolescent psychologist in Alhendín (Granada), to book your first in-person or online appointment.`,
          ogTitle: `Contact | Isabel Monte`,
          ogDescription: `Book your first appointment with Isabel Monte, child and adolescent psychologist.`
        },
        agenda: `Now booking`,
        title: `Contact`,
        intro: `If you have any questions or would like to book a first appointment, I'd be happy to help.`,
        consultLabel: `Practice`,
        consultText: `Alhendín (Granada). The exact address is provided when the appointment is confirmed.`,
        colegiadaLabel: `Licence`,
        colegiadaText: `Licence No. AO14821`,
        whatsappBtn: `Write on WhatsApp`,
        formTitle: `Send me a message`,
        privacyNote: `We don't store your data. The message is sent directly from this page.`,
        honeypotLabel: `Leave this field empty`,
        labelName: `Name`,
        labelEmail: `Email`,
        labelPhone: `Phone (optional)`,
        labelMessage: `Message`,
        consent: `I agree to the processing of my data to respond to my enquiry. I have read the <a href="../privacy.html" target="_blank" rel="noopener">privacy policy</a>.`,
        submitBtn: `Send message`,
        form: {
          sending: `Sending...`,
          success: `Thank you! Your message has been sent successfully.`,
          errorGeneric: `The message could not be sent. Please try again later.`,
          errorValidation: `Please fill in the required fields and accept the privacy policy.`
        }
      },
      privacy: {
        meta: { title: `Privacy Policy | Isabel Monte` },
        navBack: `Back to the website`,
        title: `Privacy Policy`,
        intro: `This page explains how data submitted through Isabel Monte's, Child and Adolescent Psychologist, contact form is processed.`,
        h1: `Data controller`,
        p1: `Data controller: Isabel Monte, Child and Adolescent Psychologist. For any privacy-related query, please use the contact form on the website.`,
        h2: `Data requested`,
        p2: `The form may request name, email, an optional phone number and a message. We recommend not including clinical or especially sensitive information in the first contact.`,
        h3: `Purpose and legal basis`,
        p3: `The data is used solely to respond to the enquiry and, where appropriate, to get in touch about a first appointment. The legal basis is the consent of the data subject.`,
        h4: `Recipients and retention`,
        p4: `The message is sent via FormSubmit, the form's technical provider. The data will be kept only for as long as necessary to handle the request and comply with applicable obligations.`,
        h5: `Rights`,
        p5: `You can request access, rectification, erasure, restriction or objection regarding the processing of your data, as well as withdraw your consent, using the contact form.`,
        note: `<strong>Note:</strong> this text is an informative draft and should be reviewed with the final tax and professional details before the website is published.`,
        footerBack: `Back to Isabel Monte`
      },
      whatsapp: { tooltip: `Hi, I'm Isabel! Shall we talk?` },
      footer: {
        lineRoot: `Isabel Monte · Child & Adolescent Psychologist · Alhendín (Granada) · Licence No. AO14821 · <a href="privacy.html">Privacy</a>`,
        linePages: `Isabel Monte · Child & Adolescent Psychologist · Alhendín (Granada) · Licence No. AO14821 · <a href="../privacy.html">Privacy</a>`
      }
    },

    ca: {
      common: {
        brandTagline: `Psicòloga Infanto-Juvenil`,
        menuOpen: `Obrir menú`,
        menuClose: `Tancar menú`,
        goHome: `Anar a l'inici`,
        logoAlt: `Isabel Monte Psicòloga`,
        langSelectLabel: `Seleccionar idioma`,
        whatsappAria: `Contactar per WhatsApp`
      },
      nav: {
        home: `Inici`, homeTooltip: `Tornem a l'inici`,
        specialties: `Especialitats`, specialtiesTooltip: `Coneix les meves especialitats`,
        benefits: `Per què la teràpia`, benefitsTooltip: `Descobreix com pot ajudar la teràpia`,
        aboutMe: `Sobre mi`, aboutMeTooltip: `Coneix una mica més sobre mi`,
        modality: `Com treballo`, modalityTooltip: `Presencial o en línia`,
        blog: `Blog`, blogTooltip: `Idees per cuidar el benestar`,
        contact: `Contacte`, contactTooltip: `Sóc aquí per escoltar-te`,
        cta: `Demanar cita`, ctaTooltip: `Fem el primer pas juntes`
      },
      home: {
        meta: {
          title: `Isabel Monte | Psicòloga Infanto-Juvenil a Alhendín, Granada`,
          description: `Isabel Monte, psicòloga Infanto-Juvenil a Alhendín (Granada). Atenció psicològica sanitària basada en l'evidència. Núm. Col·legiada AO14821. Presencial i en línia.`,
          ogTitle: `Isabel Monte | Psicòloga Infanto-Juvenil`,
          ogDescription: `Atenció psicològica Infanto-Juvenil a Alhendín i sessions en línia.`
        },
        hero: {
          sanitary: `Atenció psicològica sanitària basada en l'evidència<br>Núm. Col·legiada AO14821`,
          quote: `De vegades només necessites una mirada diferent, algú que t'expliqui el per què, el com i el per a què del que passa.`,
          cta: `Agenda oberta · WhatsApp`,
          ctaTooltip: `Escriu-me i en parlem amb calma`
        },
        heroImgAlt: `Isabel Monte, psicòloga Infanto-Juvenil`
      },
      specialties: {
        meta: {
          title: `Especialitats | Isabel Monte, Psicòloga Infanto-Juvenil`,
          description: `Dificultats de l'aprenentatge, del neurodesenvolupament (TEA, TDAH), teràpia psicològica i psicoeducativa, habilitats socials, tallers i xerrades per a famílies i professorat.`,
          ogTitle: `Especialitats | Isabel Monte`,
          ogDescription: `Àrees d'especialització en psicologia Infanto-Juvenil.`
        },
        title1: `Especialitzada en`,
        item1: `Avaluació i intervenció en les dificultats de l'aprenentatge relacionades amb la lectura, l'escriptura i les matemàtiques`,
        item2: `Dificultats del neurodesenvolupament: TDAH, trastorns de l'aprenentatge i altres trastorns del desenvolupament`,
        item3: `Habilitats socials, gestió emocional i autoestima`,
        title2: `A més, ofereixo`,
        item4: `Tallers sobre gestió emocional`,
        item5: `Entrenament i pràctica de tècniques d'estudi`,
        item6: `Xerrades i formacions adreçades a les famílies i el professorat`
      },
      benefits: {
        meta: {
          title: `Per què la teràpia | Isabel Monte, Psicòloga Infanto-Juvenil`,
          description: `Què aporta la teràpia psicològica a nens/es i adolescents i la importància de començar com més aviat millor: un espai segur, gestió emocional, autoestima i acompanyament a les famílies.`,
          ogTitle: `Per què la teràpia | Isabel Monte, Psicòloga Infanto-Juvenil`,
          ogDescription: `Beneficis de la teràpia psicològica Infanto-Juvenil.`
        },
        title1: `Per què és important la teràpia per a nens/es i adolescents?`,
        item1: `Un espai segur i propi`,
        item2: `Comprensió i gestió de les seves emocions`,
        item3: `Enfortiment de l'autoestima`,
        item4: `Prevenció de dificultats a llarg termini`,
        item5: `Suport, acompanyament i pautes per a les famílies`,
        quote1: `Anar a teràpia és regalar-los recursos emocionals que els acompanyaran tota la vida…`,
        quote2: `Sents que el teu fill o filla necessita un espai d'acompanyament o tens dubtes sobre el seu desenvolupament?<br>Som aquí per escoltar-vos i acompanyar-vos en el camí.`,
        title2: `Com més aviat, millor`,
        intro2: `Començar la teràpia amb l'inici del curs escolar ajuda els més petits a:`,
        smiley1: `Gestió emocional des del primer dia`,
        smiley2: `Prevenció de dificultats abans que s'agreugin`,
        smiley3: `Coordinació i suport continu`,
        quote3: `La teràpia és la millor inversió que pots fer amb el teu fill o filla quan apareixen comportaments poc adaptatius, no esperis el moment ideal, el moment és ara…`
      },
      aboutMe: {
        meta: {
          title: `Sobre mi | Isabel Monte, Psicòloga Infanto-Juvenil`,
          description: `Isabel Monte, psicòloga especialitzada en infància, adolescència i dificultats del neurodesenvolupament. Atenc a la consulta a Alhendín (Granada) i també ofereixo sessions en línia.`,
          ogTitle: `Sobre mi | Isabel Monte`,
          ogDescription: `Coneix Isabel Monte, Psicòloga Infanto-Juvenil.`
        },
        title: `Sobre mi`,
        p1: `Sóc Isabel Monte, psicòloga especialitzada en infància, adolescència i dificultats del neurodesenvolupament. La meva feina se centra a ajudar nens, nenes i joves a gestionar les seves emocions, superar dificultats i créixer amb confiança, acompanyant també les seves famílies en aquest procés.`,
        p2: `Treballo amb nens, nenes, adolescents i les seves famílies en l'avaluació i intervenció de dificultats com el TDAH, els trastorns de l'espectre autista, els trastorns de l'aprenentatge, els problemes de conducta i altres dificultats emocionals.`,
        p3: `Ofereixo teràpia psicològica i psicoeducativa des d'un enfocament proper, respectuós, basat en l'evidència i adaptat a cada etapa evolutiva i a les necessitats de cada persona. Creo un espai segur on el menor pugui expressar-se amb llibertat i on pares i mares trobin orientació i suport real.`,
        p4: `Atenc a la consulta a <strong>Alhendín (Granada)</strong> i també ofereixo <strong>sessions en línia</strong> per a qui ho prefereixi o no pugui desplaçar-se.`,
        photoAlt: `Isabel Monte, Psicòloga Infanto-Juvenil, treballant amb material psicoeducatiu`
      },
      modality: {
        meta: {
          title: `Com treballo | Isabel Monte, Psicòloga Infanto-Juvenil`,
          description: `Consulta presencial a Alhendín (Granada) o sessions en línia, amb la mateixa proximitat i seguiment en ambdues modalitats.`,
          ogTitle: `Com treballo | Isabel Monte`,
          ogDescription: `Modalitat presencial i en línia de teràpia Infanto-Juvenil.`
        },
        title: `Com treballo`,
        presencialTitle: `Presencial`,
        presencialText: `Consulta a Alhendín, Granada. Un espai tranquil i proper, pensat perquè nens i adolescents se sentin còmodes des de la primera sessió.`,
        onlineTitle: `En línia`,
        onlineText: `Sessions per videotrucada amb la mateixa proximitat i seguiment que a la consulta, ideals per a famílies que no puguin desplaçar-se o prefereixin aquesta opció.`
      },
      blog: {
        meta: {
          title: `Blog | Isabel Monte, Psicòloga Infanto-Juvenil`,
          description: `Idees pràctiques per acompanyar el desenvolupament emocional, l'aprenentatge i l'autoestima de nens, nenes i adolescents.`,
          ogTitle: `Blog | Isabel Monte`,
          ogDescription: `Recursos per a famílies sobre benestar emocional Infanto-Juvenil.`
        },
        kicker: `Benestar emocional`,
        title: `Recursos per a famílies`,
        intro: `Idees pràctiques per acompanyar el desenvolupament emocional, l'aprenentatge i l'autoestima de nens, nenes i adolescents.`,
        article1: {
          topic: `Gestió emocional infantil`,
          title: `Com ajudar un infant a expressar les seves emocions`,
          p1: `Anomenar el que sent, validar la seva experiència i oferir un moment tranquil per parlar són tres passos senzills que ajuden un infant a identificar i comunicar el que li passa.`,
          p2: `En lloc de demanar-li que es calmi sense més, podem dir: "Veig que estàs enfadat. Sóc amb tu i podem buscar junts què necessites". L'escolta i la presència adulta són eines importants.`
        },
        article2: {
          topic: `Psicologia Infanto-Juvenil`,
          title: `Senyals que un infant o adolescent pot necessitar suport psicològic`,
          p1: `Els canvis persistents en l'estat d'ànim, la son, el rendiment escolar, les relacions o la manera d'afrontar les emocions mereixen una mirada atenta i sense judicis.`,
          p2: `Una consulta inicial pot ajudar a comprendre què està passant i quins recursos necessita la família, sense esperar que la dificultat es faci més gran.`
        },
        article3: {
          topic: `Benestar adolescent`,
          title: `Rutines saludables per cuidar el benestar emocional`,
          p1: `El descans, el moviment, una alimentació regular i moments sense pantalles afavoreixen la concentració i la regulació emocional durant l'adolescència.`,
          p2: `Les rutines funcionen millor quan es construeixen de manera gradual i realista, amb la participació de l'adolescent i espai per adaptar allò que no funcioni.`
        },
        ctaText: `Tens dubtes sobre el benestar emocional del teu fill o filla?`,
        ctaButton: `Parlar sobre el meu cas`
      },
      contact: {
        meta: {
          title: `Contacte | Isabel Monte, Psicòloga Infanto-Juvenil`,
          description: `Contacta amb Isabel Monte, Psicòloga Infanto-Juvenil a Alhendín (Granada), per demanar una primera cita presencial o en línia.`,
          ogTitle: `Contacte | Isabel Monte`,
          ogDescription: `Demana la teva primera cita amb Isabel Monte, Psicòloga Infanto-Juvenil.`
        },
        agenda: `Agenda oberta`,
        title: `Contacte`,
        intro: `Si tens dubtes o vols demanar una primera cita, estaré encantada d'atendre't.`,
        consultLabel: `Consulta`,
        consultText: `Alhendín (Granada). L'adreça exacta es facilita en confirmar la cita.`,
        colegiadaLabel: `Col·legiada`,
        colegiadaText: `Núm. Col·legiada AO14821`,
        whatsappBtn: `Escriure per WhatsApp`,
        formTitle: `Envia'm un missatge`,
        privacyNote: `No guardem les teves dades. El missatge s'envia directament des d'aquesta pàgina.`,
        honeypotLabel: `No emplenar aquest camp`,
        labelName: `Nom`,
        labelEmail: `Email`,
        labelPhone: `Telèfon (opcional)`,
        labelMessage: `Missatge`,
        consent: `Accepto el tractament de les meves dades per respondre la meva consulta. He llegit la <a href="../privacy.html" target="_blank" rel="noopener">política de privacitat</a>.`,
        submitBtn: `Enviar missatge`,
        form: {
          sending: `Enviant...`,
          success: `Gràcies! El teu missatge s'ha enviat correctament.`,
          errorGeneric: `No s'ha pogut enviar el missatge. Torna-ho a provar més tard.`,
          errorValidation: `Si us plau, completa els camps obligatoris i accepta la política de privacitat.`
        }
      },
      privacy: {
        meta: { title: `Política de privacitat | Isabel Monte` },
        navBack: `Tornar a la web`,
        title: `Política de privacitat`,
        intro: `Aquesta pàgina informa sobre el tractament de les dades enviades mitjançant el formulari de contacte d'Isabel Monte, Psicòloga Infanto-Juvenil.`,
        h1: `Responsable`,
        p1: `Responsable: Isabel Monte, Psicòloga Infanto-Juvenil. Per a qualsevol consulta relacionada amb la privacitat, pots utilitzar el formulari de contacte de la web.`,
        h2: `Dades que se sol·liciten`,
        p2: `El formulari pot sol·licitar nom, email, telèfon opcional i missatge. Es recomana no incloure informació clínica o especialment sensible en el primer contacte.`,
        h3: `Finalitat i base legal`,
        p3: `Les dades s'utilitzen únicament per respondre a la consulta i, quan escaigui, contactar per informar sobre una primera cita. La base legal és el consentiment de la persona interessada.`,
        h4: `Destinataris i conservació`,
        p4: `El missatge s'envia mitjançant FormSubmit, proveïdor tècnic del formulari. Les dades es conservaran únicament durant el temps necessari per gestionar la sol·licitud i complir les obligacions aplicables.`,
        h5: `Drets`,
        p5: `Pots sol·licitar l'accés, la rectificació, la supressió, la limitació o l'oposició al tractament de les teves dades, així com retirar el teu consentiment, utilitzant el formulari de contacte.`,
        note: `<strong>Nota:</strong> aquest text és un esborrany informatiu i s'ha de revisar amb les dades fiscals i professionals definitives abans de publicar la web.`,
        footerBack: `Tornar a Isabel Monte`
      },
      whatsapp: { tooltip: `Hola, sóc Isabel! Parlem?` },
      footer: {
        lineRoot: `Isabel Monte · Psicòloga Infanto-Juvenil · Alhendín (Granada) · Núm. Col·legiada AO14821 · <a href="privacy.html">Privacitat</a>`,
        linePages: `Isabel Monte · Psicòloga Infanto-Juvenil · Alhendín (Granada) · Núm. Col·legiada AO14821 · <a href="../privacy.html">Privacitat</a>`
      }
    }
  };

  function resolve(dict, key) {
    if (!key) return undefined;
    var parts = key.split('.');
    var value = dict;
    for (var i = 0; i < parts.length; i++) {
      if (value == null) return undefined;
      value = value[parts[i]];
    }
    return value;
  }

  function getLang() {
    return localStorage.getItem('site-lang') || 'es';
  }

  function i18nText(key) {
    var lang = getLang();
    var value = resolve(TRANSLATIONS[lang], key);
    if (value === undefined) value = resolve(TRANSLATIONS.es, key);
    return value === undefined ? '' : value;
  }

  function applyTranslations(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = resolve(dict, el.getAttribute('data-i18n'));
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = resolve(dict, el.getAttribute('data-i18n-html'));
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = parts[0] && parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (!attr || !key) return;
        var value = resolve(dict, key);
        if (value !== undefined) el.setAttribute(attr, value);
      });
    });

    var menuToggle = document.querySelector('.menu-toggle');
    var mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
      var isOpen = mainNav.classList.contains('is-open');
      menuToggle.setAttribute('aria-label', isOpen ? i18nText('common.menuClose') : i18nText('common.menuOpen'));
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setLanguage(lang) {
    localStorage.setItem('site-lang', lang);
    applyTranslations(lang);
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  window.i18nText = i18nText;
  window.getLang = getLang;
  window.setLanguage = setLanguage;

  applyTranslations(getLang());
})();
