<template>
    <div class="max-w-2xl mx-auto p-4">
      <h1 class="text-3xl font-semibold mb-4">Política de Privacidad de Marbres Ter</h1>
      <p class="text-gray-600 mb-2">Última actualización: {{ lastUpdate }}</p>
      
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Información que Recopilamos:</h2>
        <ul class="list-disc pl-4">
          <li>Nombre y apellidos.</li>
          <li>Número de teléfono.</li>
          <li>Dirección de correo electrónico.</li>
          <li>Comentarios o mensajes que nos envíe a través de nuestros formularios de contacto u otros medios de comunicación.</li>
        </ul>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Uso de la Información:</h2>
        <ul class="list-disc pl-4">
          <li>Responder a sus consultas, preguntas o solicitudes de contacto.</li>
          <li>Brindar información sobre nuestros productos y servicios, si así lo ha solicitado.</li>
          <li>Mejorar y personalizar su experiencia con nosotros.</li>
        </ul>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Almacenamiento de Datos:</h2>
        <p>No almacenamos sus datos personales en ninguna base de datos o sistema de almacenamiento a largo plazo. Solo conservamos los datos el tiempo necesario para responder a su solicitud o consulta y, posteriormente, los eliminamos de manera segura.</p>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Divulgación de Datos:</h2>
        <p>No compartiremos sus datos personales con terceros, a menos que tengamos su consentimiento expreso o estemos legalmente obligados a hacerlo.</p>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Seguridad:</h2>
        <p>Tomamos medidas de seguridad adecuadas para proteger sus datos personales y prevenir el acceso no autorizado o el uso indebido de los mismos.</p>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Sus Derechos:</h2>
        <p>Usted tiene ciertos derechos en relación con sus datos personales, que incluyen el derecho de acceso, rectificación, supresión y oposición. Puede ejercer estos derechos enviándonos un correo electrónico a {{ contactEmail }}.</p>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Cambios en la Política de Privacidad:</h2>
        <p>Marbres Ter se reserva el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará en esta página, y la fecha de actualización se modificará para reflejar la fecha más reciente.</p>
      </div>
  
      <div class="bg-white rounded-lg  p-4 mt-4">
        <h2 class="text-xl font-semibold mb-2">Contacto:</h2>
        <p>Si tiene preguntas o inquietudes acerca de esta Política de Privacidad o la forma en que manejamos sus datos personales, no dude en ponerse en contacto con nosotros a través de {{ contactEmail }} o {{ contactPhoneNumber }}.</p>
      </div>
      <p class="text-gray-600 mt-4">Al utilizar nuestros servicios, usted acepta esta Política de Privacidad y el procesamiento de sus datos personales de acuerdo con ella.</p>
    </div>
</template>
  
<script setup>

    const lastUpdate = 'Fecha de actualización'
    const contactEmail= 'su dirección de correo electrónico'
    const contactPhoneNumber='su número de teléfono'

</script>
  